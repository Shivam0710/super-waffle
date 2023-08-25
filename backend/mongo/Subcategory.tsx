import { SubcategoryModel } from "./schema";
import clientPromise from "./mongoClient";
import type { Document, Schema, Types } from 'mongoose';
import { AddSubCategoryRequest } from "@/app/api/blog/subcategory/route";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "subcategory";

export async function addSubcategory(data?: AddSubCategoryRequest) {
    const client = await clientPromise;
    const db = client.db()

    const collectionName = COLLECTION_NAME;
    if(!db.collection(collectionName)) {
        await db.createCollection(collectionName);
    }

    const entries = db.collection(collectionName);
    const result = await entries.insertOne(new SubcategoryModel({ name: data?.name, parentCategory: new ObjectId(data?.parentCategoryId), seo_title: data?.seo_title, seo_description: data?.seo_description, og_title: data?.og_title, og_description: data?.og_description}));
    return result;
}

export async function getAllSubCategories(limit: number) {
    const client = await clientPromise
    const db = client.db();
    const entries = db.collection(COLLECTION_NAME)
    const result = await entries.find({}).toArray()
    console.log(result)
    return result
}

export async function getBlogsBySubCategory(subCategoryId: string) {
    const client = await clientPromise;
    const db = client.db();
    const entries = db.collection('blog')
    const result = await entries.find({ subcategory: new ObjectId(subCategoryId) }).toArray()
    console.log(result)
    return result;
}
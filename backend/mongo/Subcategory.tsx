import { SubcategoryModel } from "./schema";
import clientPromise from "./mongoClient";
import type { Document, Schema, Types } from 'mongoose';
import { AddSubCategoryRequest } from "@/app/api/blog/addSubcategory/route";
import { ObjectId } from "mongodb";

export async function addSubcategory(data?: AddSubCategoryRequest) {
    const client = await clientPromise;
    const db = client.db()

    const collectionName = 'subcategory';
    if(!db.collection(collectionName)) {
        await db.createCollection(collectionName);
    }

    const entries = db.collection(collectionName);
    const result = await entries.insertOne(new SubcategoryModel({ name: data?.name, parentCategory: new ObjectId(data?.parentCategoryId), seo_title: data?.seo_title, seo_description: data?.seo_description, og_title: data?.og_title, og_description: data?.og_description}));
    return result;
}
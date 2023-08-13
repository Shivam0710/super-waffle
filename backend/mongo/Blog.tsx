import { AddBlogRequest } from "@/app/api/blog/addBlog/route";
import clientPromise from "./mongoClient";
import { BlogModel } from "./schema";
import { ObjectId } from 'mongodb'

const COLLECTION_NAME = "blog"

export async function addBlog(data?: AddBlogRequest) {
    const client = await clientPromise
    const db = client.db();

    if (!db.collection(COLLECTION_NAME)) {
      await db.createCollection(COLLECTION_NAME);
    }

    const entries = db.collection(COLLECTION_NAME);
    const result = entries.insertOne(new BlogModel({ title: data?.title, content: data?.content, category: new ObjectId(data?.categoryId), subcategory: new ObjectId(data?.subcategoryId), date: new Date() }))
    return result;
}
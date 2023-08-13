import { CategoryModel } from './schema'
import clientPromise from './mongoClient';
import { ObjectId } from 'mongodb'
import { AddCategoryRequest } from '@/app/api/blog/addCategory/route';

const COLLECTION_NAME = "category"

export async function addCategory(data?: AddCategoryRequest) {
    const client = await clientPromise
    const db = client.db();

    if (!db.collection(COLLECTION_NAME)) {
      await db.createCollection(COLLECTION_NAME);
    }

    const entries = db.collection(COLLECTION_NAME);
    const result = await entries.insertOne(new CategoryModel({ name: data?.name, seo_title: data?.seo_title, seo_description: data?.seo_description, og_title: data?.og_title, og_description: data?.og_description }))
    return result;
}

export async function getCategoryByName(categoryName: string) {
  const client = await clientPromise
  const db = client.db();

  const entries = db.collection(COLLECTION_NAME)
  const result = entries.findOne({ name: categoryName })
  return result;
}

export async function getCategoryById(categoryId?: string) {
  const client = await clientPromise
  const db = client.db();

  const entries = db.collection(COLLECTION_NAME)
  const result = entries.findOne({ _id: new ObjectId(categoryId)})
  return result;
}
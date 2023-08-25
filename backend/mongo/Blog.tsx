import { AddBlogRequest } from "@/app/api/blog/blog/route";
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
    const result = entries.insertOne(new BlogModel({ title: data?.title, slug: data?.slug, content: data?.content, category: new ObjectId(data?.category), subcategory: new ObjectId(data?.subcategory), date: new Date(), seo_title: data?.seo_title, seo_description: data?.seo_description, og_title: data?.og_title, og_description: data?.og_description  }))
    return result;
}

export async function getBlogBySlug(slug: string) {
  const client = await clientPromise
  const db = client.db();
  const entries = db.collection(COLLECTION_NAME);
  let blog:any = await entries.find({ slug: slug }).toArray();
  blog = await blog.length > 0 ? blog[0] : null;
  return blog
}
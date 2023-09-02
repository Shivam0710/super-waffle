import { AddBlogRequest } from "@/app/api/blog/blog/route";
import clientPromise from "./mongoClient";
import { BlogModel } from "./schema";
import { ObjectId } from 'mongodb'
import { Blog } from "../../src/types/Blog";
import { UpdateBlogRequest } from "../../src/app/api/blog/blog/route";

const COLLECTION_NAME = "blog"

export async function addBlog(data?: AddBlogRequest) {
    const client = await clientPromise
    const db = client.db();

    if (!db.collection(COLLECTION_NAME)) {
      await db.createCollection(COLLECTION_NAME);
    }

    const entries = db.collection(COLLECTION_NAME);
    const coverpic = getCoverPicFromBlogContent(data?.content||"");
    const result = entries.insertOne(new BlogModel({ title: data?.title, slug: data?.slug, content: data?.content, category: new ObjectId(data?.category), subcategory: new ObjectId(data?.subcategory), date: new Date(), seo_title: data?.seo_title, seo_description: data?.seo_description, og_title: data?.og_title, og_description: data?.og_description, blogCoverPic: coverpic  }))
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

export async function getAllBlogs() {
  const client = await clientPromise
  const db = client.db();
  const entries = db.collection(COLLECTION_NAME);
  let blogs:any = await entries.find().toArray();
  return blogs;
}

export async function updateBlog(data?: UpdateBlogRequest) {
  const client = await clientPromise;
  const db = client.db();

  const entries = db.collection(COLLECTION_NAME);
  const coverpic = getCoverPicFromBlogContent(data?.content||"");
  
  const updateObject: Partial<Blog> = {
      title: data?.title,
      content: data?.content,
      slug: data?.slug,
      category: data?.category,
      subcategory: data?.subcategory,
      blogCoverPic: coverpic,
      seo_title: data?.seo_title,
      seo_description: data?.seo_description,
      og_title: data?.og_title,
      og_description: data?.og_description,
  };
  
  const result = await entries.findOneAndUpdate(
      { _id: new ObjectId(data?.id) },
      { $set: updateObject },
  );

  return result.value;
}

function getCoverPicFromBlogContent(blogContent: string) {
  const extractedMatches = blogContent?.match(/####YoutubeVideo=(.*?)####/g);
  const randomVideoId = extractedMatches?.[Math.floor(Math.random()*extractedMatches.length)]?.split("/")[4].replace("####", "");
  const coverpic = `https://img.youtube.com/vi/${randomVideoId}/maxresdefault.jpg`
  return coverpic
}
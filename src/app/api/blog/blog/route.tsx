import { NextResponse } from "next/server";
import { addBlog } from "../../../../../backend/mongo/Blog";

export type AddBlogRequest = {
    title: string,
    slug: string,
    content: string,
    category: string,
    subcategory: string,
    seo_title?: string,
    seo_description?: string,
    og_title?: string,
    og_description?: string
}

export async function POST(req: Request, res: Response) {
    const request: AddBlogRequest|undefined = await req.json();
    const result = await addBlog(request)
    return NextResponse.json(result)
}
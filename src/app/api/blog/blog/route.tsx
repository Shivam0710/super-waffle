import { NextResponse } from "next/server";
import { addBlog, getAllBlogs, updateBlog } from "../../../../../backend/mongo/Blog";

export type AddBlogRequest = {
    title: string,
    slug: string,
    content: string,
    category: string,
    subcategory: string,
    seo_title?: string,
    seo_description?: string,
    og_title?: string,
    og_description?: string,
    blogCoverPic?: string
}

export type UpdateBlogRequest = {
    title: string,
    slug: string,
    content: string,
    category: string,
    subcategory: string,
    seo_title?: string,
    seo_description?: string,
    og_title?: string,
    og_description?: string,
    blogCoverPic?: string,
    id: string
}

export async function POST(req: Request, res: Response) {
    const request: AddBlogRequest|undefined = await req.json();
    const result = await addBlog(request)
    return NextResponse.json(result)
}

export async function GET(req: Request, res: Response) {
    const blogs = await getAllBlogs();
    return NextResponse.json({blogs})
}

export async function PUT(req: Request, res: Response) {
    const request: UpdateBlogRequest|undefined = await req.json();
    const result = await updateBlog(request);
    return NextResponse.json(result);
}
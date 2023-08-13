import { NextResponse } from "next/server";
import { addBlog } from "../../../../../backend/mongo/Blog";

export type AddBlogRequest = {
    title: string,
    content: string,
    categoryId: string,
    subcategoryId: string,
}

export async function POST(req: Request, res: Response) {
    const request: AddBlogRequest|undefined = await req.json();
    const result = await addBlog(request)
    return NextResponse.json(result)
}
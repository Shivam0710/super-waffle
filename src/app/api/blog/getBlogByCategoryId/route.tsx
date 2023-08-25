import { getBlogsByCategory } from "../../../../../backend/mongo/Category"
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let categoryId:any = queryParams.get("id");
    let blogs = await getBlogsByCategory(categoryId)
    return NextResponse.json({ blogs });
}
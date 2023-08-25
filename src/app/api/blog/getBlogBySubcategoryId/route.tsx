import { NextResponse } from "next/server";
import { getBlogsBySubCategory } from "../../../../../backend/mongo/Subcategory";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let categoryId:any = queryParams.get("id");
    let blogs = await getBlogsBySubCategory(categoryId)
    return NextResponse.json({ blogs });
}
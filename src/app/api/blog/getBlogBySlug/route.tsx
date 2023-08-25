import { getBlogBySlug } from "../../../../../backend/mongo/Blog";
import { getBlogsByCategory } from "../../../../../backend/mongo/Category"
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let slug:any = queryParams.get("slug");
    let blog = await getBlogBySlug(slug)
    return NextResponse.json({ blog });
}
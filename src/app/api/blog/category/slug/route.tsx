import { NextResponse } from "next/server";
import { getBlogsByCategoryName, getCategoryById } from "../../../../../../backend/mongo/Category";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    let categoryName = queryParams.get('categoryName') || "";

    const result = await getBlogsByCategoryName(categoryName)
    return NextResponse.json(result)
}
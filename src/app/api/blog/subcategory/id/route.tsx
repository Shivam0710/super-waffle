import { NextResponse } from "next/server";
import { getSubCategoryById } from "../../../../../../backend/mongo/Subcategory";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    let id = queryParams.get('id') || "";

    const result = await getSubCategoryById(id)
    return NextResponse.json(result)
}
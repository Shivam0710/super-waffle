import { NextResponse } from "next/server";
import { getSubcategoriesByCategory } from "../../../../../../backend/mongo/Subcategory";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    let id = queryParams.get('id') || "";

    const result = await getSubcategoriesByCategory(id)
    return NextResponse.json(result)
}
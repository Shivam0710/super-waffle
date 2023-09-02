import { NextResponse } from "next/server";
import { getCategoryById } from "../../../../../../backend/mongo/Category";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    let id = queryParams.get('id') || "";

    const result = await getCategoryById(id)
    return NextResponse.json(result)
}
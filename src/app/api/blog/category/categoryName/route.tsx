import { NextResponse } from "next/server";
import { getCategoryByName } from "../../../../../../backend/mongo/Category";

export async function GET(
    req: Request,
    res: Response
) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    let name = queryParams.get('name') || "";

    // const result = await getCategoryById(id)
    const result = await getCategoryByName(name)
    return NextResponse.json(result)
}
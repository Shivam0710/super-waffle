import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getCategoryById, getCategoryByName } from "../../../../../backend/mongo/Category";
import { addSubcategory } from "../../../../../backend/mongo/Subcategory";

export type AddSubCategoryRequest = {
    name: string,
    parentCategoryId: string,
    seo_title?: string,
    seo_description?: string,
    og_title?: string,
    og_description?: string,
  }

export async function POST(
    req: Request,
    res: Response
) {
    const request: AddSubCategoryRequest | undefined = await req.json();
    const subcategoryResult = await addSubcategory(request);
    return NextResponse.json(subcategoryResult)
}
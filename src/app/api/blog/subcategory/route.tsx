import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getCategoryById, getCategoryByName } from "../../../../../backend/mongo/Category";
import { addSubcategory, getAllSubCategories, updateSubCategory } from "../../../../../backend/mongo/Subcategory";

export type AddSubCategoryRequest = {
  name: string,
  parentCategoryId: string,
  seo_title?: string,
  seo_description?: string,
  og_title?: string,
  og_description?: string,
}

export type UpdateSubCategoryRequest = {
  name: string,
  parentCategoryId: string,
  seo_title?: string,
  seo_description?: string,
  og_title?: string,
  og_description?: string,
  id: string
}

export async function POST(
    req: Request,
    res: Response
) {
    const request: AddSubCategoryRequest | undefined = await req.json();
    const subcategoryResult = await addSubcategory(request);
    return NextResponse.json(subcategoryResult)
}

export async function GET(
    req: Request,
    res: Response
  ) {
    let queryParams = new URL(req.url).searchParams;
    let limit = 0;
    if(queryParams.get('limit')) {
      limit = parseInt(queryParams.get('limit')||"0");
    }
  
    const result = await getAllSubCategories(limit)
    return NextResponse.json(result)
  }

  export async function PUT(req: Request, res: Response) {
    const request: UpdateSubCategoryRequest|undefined = await req.json();
    const result = await updateSubCategory(request);
    return NextResponse.json(result);
  }
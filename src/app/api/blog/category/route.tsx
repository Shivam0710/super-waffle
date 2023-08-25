import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import getSampleData from '../../../../../backend/getSampleData'
import { addCategory, getAllCategories } from "../../../../../backend/mongo/Category";

export type AddCategoryRequest = {
  name: string,
  seo_title?: string,
  seo_description?: string,
  og_title?: string,
  og_description?: string,
}

export async function POST(
  req: Request,
  res: Response
) {
  const request: AddCategoryRequest|undefined = await req.json();
  const result = await addCategory(request)
  return NextResponse.json(result);
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

  const result = await getAllCategories(limit)
  return NextResponse.json(result)
}
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import getSampleData from '../../../../../backend/getSampleData'
import { addCategory } from "../../../../../backend/mongo/Category";

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
  const result = addCategory(request)
  return NextResponse.json(result);
}
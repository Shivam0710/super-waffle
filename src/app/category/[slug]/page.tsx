import Content from "@/components/Content";
import axios from "axios";
import { headers } from "next/headers";

export default async function Category() {
    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");
    let slug = activePath?.split("/")[2]
    let blogs = null
    let subcategories:any = []
    if(slug) {
        try {
            slug = slug.split("-").join(" ")
            let blogsResponse:any = await getBlogsByCategory(slug)
            blogs = blogsResponse
            subcategories = await getSubcategoriesByCategory(blogsResponse[0].category)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <main className="flex flex-row grow min-h-screen">
            <Content 
                subcategories={subcategories}
                blogs={blogs}
                title={slug}
            />    
        </main>
    )
}

async function getBlogsByCategory(slug: string) {
    let blogs = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/category/slug?categoryName=${slug}`);
    if(await blogs && await blogs.data) {
        blogs = await blogs.data
    }
    return blogs
}

async function getSubcategoriesByCategory(categoryId: string) {
    let subcategories = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/subcategory/categoryId?id=${categoryId}`)
    return subcategories.data
}
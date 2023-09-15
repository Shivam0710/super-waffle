import Content from "@/components/Content";
import axios from "axios";
import { headers } from "next/headers";

export default async function Subcategory({ params, searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");
    let slug = activePath?.split("/")[2]
    let subcategories:any = []
    let resp = await fetchData(searchParams?.id)
    let blogs = resp?.blogs
    let subCategory = resp?.subCategory
    // if(slug) {
    //     try {
    //         slug = slug.split("-").join(" ")
    //         let blogsResponse:any = await getBlogsByCategory(slug)
    //         blogs = blogsResponse
    //         subcategories = await getSubcategoriesByCategory(blogsResponse[0].category)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    // return <h1> helo </h1>

    return (
        <main className="flex flex-row grow min-h-screen w-screen">
            <Content 
                subcategories={[]}
                blogs={blogs}
                title={subCategory.name}
            />    
        </main>
    )
}

async function fetchData(subcategoryId: any) {
    try {
        const blogs = await getBlogsBySubcategoryId(subcategoryId);
        const subCategory = await getSubcategoryByID(subcategoryId);
        return await { blogs, subCategory }
    } catch (err) {
        console.log(err);
    }
}

async function getBlogsBySubcategoryId(subCategoryId: string) {
    let blogs = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/getBlogBySubcategoryId?id=${subCategoryId}`);
    if(await blogs && await blogs.data) {
        return blogs.data.blogs
    }

    return []
}

async function getSubcategoryByID(subCategoryId: string) {
    let subcategory = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/subcategory/id?id=${subCategoryId}`)
    if(await subcategory && await subcategory.data) {
        return subcategory.data
    }

    return null
}

// async function getBlogsByCategory(slug: string) {
//     let blogs = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/category/slug?categoryName=${slug}`);
//     if(await blogs && await blogs.data) {
//         blogs = await blogs.data
//     }
//     return blogs
// }
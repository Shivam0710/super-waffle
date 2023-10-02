import Content from "@/components/Content";
import axios from "axios";

export async function generateMetadata({ searchParams }: {
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    let subcategory = searchParams?.id || ""
    const subCategory = await getSubcategoryByID(subcategory)
    return {
        title: subCategory.seo_title,
        description: subCategory.seo_description
    }
}

export default async function Subcategory({ searchParams }: {
    searchParams?: { [key: string]: string | string[] | undefined }
  }) {
    let resp = await fetchData(searchParams?.id)
    let blogs = resp?.blogs
    let subCategory = resp?.subCategory

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
    let blogs = await axios.get("http://socialdoze.in" + `/api/blog/getBlogBySubcategoryId?id=${subCategoryId}`);
    if(await blogs && await blogs.data) {
        return blogs.data.blogs
    }

    return []
}

async function getSubcategoryByID(subCategoryId: any) {
    let subcategory = await axios.get("http://socialdoze.in" + `/api/blog/subcategory/id?id=${subCategoryId}`)
    if(await subcategory && await subcategory.data) {
        return subcategory.data
    }

    return null
}
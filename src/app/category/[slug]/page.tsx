import Content from "@/components/Content";
import axios from "axios";

export async function generateMetadata({ params }: {
    params: { slug: string }
}) {
    const category = await getCategoryBySlug(params.slug)
    return {
        title: category.seo_title,
        description: category.seo_description
    }
}

export default async function Category({ params }: {
    params: { slug: string }
}) {
    let slug = params.slug
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
        <main className="flex flex-row grow min-h-screen w-screen">
            <Content 
                subcategories={subcategories}
                blogs={blogs}
                title={slug}
            />    
        </main>
    )
}

async function getBlogsByCategory(slug: string) {
    let blogs = await axios.get("http://socialdoze.in" + `/api/blog/category/slug?categoryName=${slug}`);
    if(await blogs && await blogs.data) {
        blogs = await blogs.data
    }
    return blogs
}

async function getSubcategoriesByCategory(categoryId: string) {
    let subcategories = await axios.get("http://socialdoze.in" + `/api/blog/subcategory/categoryId?id=${categoryId}`)
    return subcategories.data
}

async function getCategoryBySlug(slug: string) {
    let category = await axios.get("http://socialdoze.in" + `/api/blog/category/categoryName?name=${slug}`)
    return category.data
}
"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { Category, Subcategory } from '@/types/Category';
import DynamicForm from '../../../../components/DynamicForm'
import { useRouter } from 'next/navigation'

export default function EditSubcategory({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | string[] | undefined }}) {
    const router = useRouter()
    const [categories, setCategories] = useState<Category[]>([]);    
    const [subCategory, setSubCategory] = useState<Subcategory[]>();
    const [fieldsConfig, setFieldsConfig] = useState<any>([])
 
    useEffect(() => {
        searchParams = searchParams || {};
        const id = searchParams['id'] ;
        getAllData(id).then(data => {
            console.log(data)
            setSubCategory(data.subcategory)
            setCategories(data.categories)
            setFieldsConfig(getFieldsConfig(data.subcategory, data.categories))
        })
    }, [])

    const getOptionsFromCategory = (categories: any[]) => {
        return categories?.map(category => ({ 'label': category.name, 'value': category._id }));
    }

    const getFieldsConfig = (subCategory: any, categories: any) => {
        return[
            { label: "Name", name: "name", type: "text", required: true, defaultValue: subCategory?.name },
            { label: "Select Category", name: "parentCategoryId", type: "select", options: getOptionsFromCategory(categories), required: true, defaultValue: subCategory?.parentCategory },
            { label: "Seo Title", name: "seo_title", type: "text", required: false, defaultValue: subCategory?.seo_title },
            { label: "Seo Description", name: "seo_description", type: "text", required: false, defaultValue: subCategory?.seo_description },
            { label: "Og Title", name: "og_title", type: "text", required: false, defaultValue: subCategory?.og_title },
            { label: "Og Descriptoin", name: "og_description", type: "text", required: false, defaultValue: subCategory?.og_description },
        ]
    }

    const handleSubmit = async(formData: any) => {
        const subcategoryId = (subCategory as any)._id || ""
        formData['id'] = subcategoryId
        console.log(formData)
        let res = await axios.put('/api/blog/subcategory', formData)
        if(res.status == 200) {
            router.push('/admin/subcategory')
        }
    }

    return (
        <div className="p-20 grow w-screen">
            <h3 className="font-bold text-3xl mb-5"> Edit Subcategory </h3>
            <section className='mb-10'>
                <DynamicForm 
                    fieldsConfig={fieldsConfig}
                    onSubmit={handleSubmit}
                />
            </section>
        </div>
    )
}

async function getAllData(id: any) {
    const subcategory = await getSubcategory(id);
    console.log(subcategory)
    const categories = await fetchCategoryData();
    return await {subcategory, categories}
}

async function getSubcategory(id: any|undefined) {
    let subcategory = (await axios.get("http://socialdoze.in" + `/api/blog/subcategory/id?id=${id}`)).data
    return subcategory
}

async function fetchCategoryData() {
    try {
        const response1 = await axios.get('/api/blog/category');

        let categories = response1.data;
        return categories
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
}
"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import DynamicForm from '../../../../components/DynamicForm'
import { useRouter } from "next/navigation";

export default function EditCategory({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | string[] | undefined }}) {
    const router = useRouter()
    const [category, setCategory] = useState(null);
    const [fieldsConfig, setFieldsConfig] = useState<any>([])

    useEffect(() => {
        searchParams = searchParams || {}
        let categoryId: any = searchParams['id'];
        getCategoryById(categoryId).then((category) => {
            setCategory(category)
            setFieldsConfig(getFieldsConfig(category))
        })
    }, [])


    const getFieldsConfig = (category: any) => {
        return [
            { label: "Name", name: "name", type: "text", required: true, defaultValue: category.name  },
            { label: "Seo Title", name: "seo_title", type: "text", required: false, defaultValue: category.seo_title },
            { label: "Seo Description", name: "seo_description", type: "text", required: false, defaultValue: category.seo_description  },
            { label: "Og Title", name: "og_title", type: "text", required: false, defaultValue: category.og_title  },
            { label: "Og Descriptoin", name: "og_description", type: "text", required: false, defaultValue: category.og_description  },
        ]
    }

    const handleSubmit = async(formData: any) => {
        formData['id'] = (category as any)._id
        console.log(formData)
        let res = await axios.put('/api/blog/category', formData)
        if(res.status == 200) {
            router.push('/admin/category')
        }
    }

    return (
        <div className="p-20 grow">
            <h3 className="font-bold text-3xl mb-5"> Edit Blog </h3>
            <section className='mb-10'>
                <DynamicForm 
                    fieldsConfig={fieldsConfig}
                    onSubmit={handleSubmit}
                />
            </section>
        </div>
    )
}

async function getCategoryById(categoryId: string) {
    let category = await axios.get('/api/blog/category/id?id=' + categoryId)
    return category.data;
}
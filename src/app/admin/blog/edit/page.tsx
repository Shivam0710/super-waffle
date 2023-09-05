"use client"

import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Category, Subcategory } from '@/types/Category';
import { Blog } from "@/types/Blog";
import DynamicForm from '../../../../components/DynamicForm'
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from "next/navigation";


export default function EditBlog({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | string[] | undefined }}) {
    const router = useRouter()
    const editorRef: any = useRef(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subCategories, setSubCategories] = useState<Subcategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<Blog>()
    const [fieldsConfig, setFieldsConfig] = useState<any>([])
    const [content, setContent] = useState("")
    
    useEffect(() => {
        searchParams = searchParams || {};
        const slug = searchParams['slug'];
        getAllData(slug).then(data => {
            setBlog(data.blog);
            setCategories(data.categories)
            setSubCategories(data.subcategories)
            setFieldsConfig(getFieldsConfig(data.blog, data.categories, data.subcategories))
            setContent(data.blog.content)
        });
    }, [searchParams]);

    const handleSubmit = async(formData: any) => {
        formData['content'] = editorRef.current.getContent()
        const blogId = (blog as any)._id || ""
        formData['id'] = blogId
        console.log(formData)
        let res = await axios.put('/api/blog/blog', formData)
        if(res.status == 200) {
            router.push('/admin/blog')
        }
    }

    const getOptionsFromCategory = (categories: any[]) => {
        return categories.map(category => ({ 'label': category.name, 'value': category._id }));
    }

    const getFieldsConfig = (blog: any, categories: any, subCategories: any) => {
        console.log(blog.title)
        return [
            { label: "Title", name: "title", type: "text", required: true, defaultValue: blog.title},
            { label: "Slug", name: "slug", type: "text", required: true, defaultValue: blog.slug },
            { label: "Select Category", name: "category", type: "select", options: getOptionsFromCategory(categories), required: true, defaultValue: blog.category },
            { label: "Select Subcategory", name: "subcategory", type: "select", options: getOptionsFromCategory(subCategories), required: true, defaultValue: blog.subcategory },
            { label: "Seo Title", name: "seo_title", type: "text", required: false, defaultValue: blog.seo_title },
            { label: "Seo Description", name: "seo_description", type: "text", required: false, defaultValue: blog.seo_description },
            { label: "Og Title", name: "og_title", type: "text", required: false, defaultValue: blog.og_title },
            { label: "Og Description", name: "og_description", type: "text", required: false, defaultValue: blog.og_description },
        ]
    }


    return ( blog &&
        <div className="p-20 grow">
            <h3 className="font-bold text-3xl mb-5"> Edit Blog </h3>
            <section className='mb-10'>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                            'iframe'
                        ],
                        toolbar: 'undo redo | formatselect | iframe | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </section>
            <DynamicForm 
                fieldsConfig={fieldsConfig}
                onSubmit={handleSubmit}
            />
            {/* {JSON.stringify(blog)}
            {JSON.stringify(categories)}
            {JSON.stringify(subCategories)} */}
            {/* Render your form fields here using the fieldsConfig */}
        </div>
    );
}

async function getAllData(slug: any) {
    const blog = await getBlog(slug);
    const data = await fetchCategoryData();
    const categories = data?.categories
    const subcategories = data?.subcategories
    return await {blog, categories, subcategories}
}

async function getBlog(slug: any|undefined) {
    let blog = (await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/getBlogBySlug?slug=${slug}`)).data
    return blog.blog
}

async function fetchCategoryData() {
    try {
        const response1 = await axios.get('/api/blog/category');
        const response2 = await axios.get('/api/blog/subcategory');

        let categories = response1.data;
        let subcategories = response2.data;
        return {categories, subcategories}
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
}
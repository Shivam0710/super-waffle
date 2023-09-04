"use client"
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Category, Subcategory } from '@/types/Category';
import DynamicForm from '@/components/DynamicForm';
import Loader from '@/components/Loader';
import { Editor } from '@tinymce/tinymce-react';

export default function Blog() {
    const editorRef: any = useRef(null);
    const [categories, setCategories] = useState<Category[]>([])
    const [subCategories, setSubCategories] = useState<Subcategory[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getOptionsFromCategory = (categories: any[]) => {
        let optionList: any = [];
        categories.map(category => optionList.push({ 'label': category.name, 'value': category._id}))
        return optionList;
    }

    const fetchData = async() => {
        try {
            const request1 = axios.get('/api/blog/category');
            const request2 = axios.get('/api/blog/subcategory');
    
            const [response1, response2] = await Promise.all([request1, request2]);
    
            setCategories(response1.data);
            setSubCategories(response2.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {        
        fetchData();
    }, [])

    const fieldsConfig = [
		{ label: "Title", name: "title", type: "text", required: true },
        { label: "Slug", name: "slug", type: "text", required: true },
		{ label: "Select Category", name: "category", type: "select", options: getOptionsFromCategory(categories), required: true },
		{ label: "Select Subcategory", name: "subcategory", type: "select", options: getOptionsFromCategory(subCategories), required: true },
		{ label: "Seo Title", name: "seo_title", type: "text", required: false },
		{ label: "Seo Description", name: "seo_description", type: "text", required: false },
		{ label: "Og Title", name: "og_title", type: "text", required: false },
		{ label: "Og Description", name: "og_description", type: "text", required: false },
	]

    const handleSubmit = async(formData: any) => {
        formData['content'] = editorRef.current.getContent()
        let res = await axios.post('/api/blog/blog', formData)
		console.log(res.status)
        console.log(res)
    }

    return (
        <div className='bg-gray-600 p-20 font-bold grow'>
            <h3 className='text-xl mb-10'> Add blog </h3>
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
                />
            </section>
            <div>
                { loading ?
                    <Loader />
                    :
                    <DynamicForm fieldsConfig={fieldsConfig} onSubmit={handleSubmit} />
                }
            </div>

        </div>
  )
}

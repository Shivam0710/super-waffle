"use client";

import React, { useEffect, useState } from 'react'
import DynamicForm from '@/components/DynamicForm'
import axios from 'axios';
import { Category } from '@/types/Category';
import Loader from '@/components/Loader'

export default function SubCategory() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get('/api/blog/category').then(res => {
            setCategories(res.data)
            setLoading(false)
        })
    }, [])

    const getOptionsFromCategory = (categories: Category[]) => {
        let optionList: any = [];
        categories.map(category => optionList.push({ 'label': category.name, 'value': category._id}))
        return optionList;
    }

	const fieldsConfig = [
		{ label: "Name", name: "name", type: "text", required: true },
		{ label: "Select Category", name: "parentCategoryId", type: "select", options: getOptionsFromCategory(categories), required: true },
		{ label: "Seo Title", name: "seo_title", type: "text", required: false },
		{ label: "Seo Description", name: "seo_description", type: "text", required: false },
		{ label: "Og Title", name: "og_title", type: "text", required: false },
		{ label: "Og Descriptoin", name: "og_description", type: "text", required: false },
	]

	const handleSubmit = async(formData: any) => {
		let res = await axios.post('/api/blog/subcategory', formData)	
		console.log(res.status)
        console.log(res)
	}

	return (
		<div className='bg-white h-screen flex justify-center align-middle items-center p-20'>
			<div className='bg-slate-600 p-10 flex gap-10 flex-col rounded-lg'>
				<h1> Add a sub category </h1>
                { loading ?
                    <Loader />
                    :
				    <DynamicForm fieldsConfig={fieldsConfig} onSubmit={handleSubmit} />
                }
			</div>
		</div>
	)
}

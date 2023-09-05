"use client";

import React from 'react'
import DynamicForm from '@/components/DynamicForm'
import axios from 'axios';

export default function Category() {
	const fieldsConfig = [
		{ label: "Name", name: "name", type: "text", required: true },
		{ label: "Seo Title", name: "seo_title", type: "text", required: false},
		{ label: "Seo Description", name: "seo_description", type: "text", required: false },
		{ label: "Og Title", name: "og_title", type: "text", required: false },
		{ label: "Og Descriptoin", name: "og_description", type: "text", required: false },
	]

	const handleSubmit = async(formData: any) => {
		let res = await axios.post('/api/blog/category', formData)	
		console.log(res.status)
	}

	return (
		<div className='bg-white h-screen flex justify-center align-middle items-center p-20 grow w-screen'>
			<div className='bg-slate-600 p-10 flex gap-10 flex-col rounded-lg'>
				<h1> Add a category </h1>
				<DynamicForm fieldsConfig={fieldsConfig} onSubmit={handleSubmit} />
			</div>
		</div>
	)
}

import React from 'react'

export default function admin() {
  return (
    <div className='bg-white h-full h-screen p-10 lg:p-24'>
        <h2 className='text-black text-2xl mb-10'> Admin Portal </h2>
        <section className='flex align-middle gap-10'>
            <a href="/admin/category/add" className='bg-slate-600 shadow-lg w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Add Category </p>
            </a>
            <a href="/admin/subcategory/add" className='bg-slate-600 shadow-lg w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Add Subcategory </p>
            </a>
            <a href="/admin/blog/add" className='bg-slate-600 shadow-lg w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Add Blog </p>
            </a>
        </section>
    </div>
  )
}

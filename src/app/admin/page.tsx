import React from 'react'

export default function admin() {
  return (
    <div className='bg-white min-h-screen p-10 lg:p-24 grow w-screen'>
        <h2 className='text-black text-2xl mb-10'> Admin Portal </h2>
        <section className='flex align-middle gap-10 flex-col lg:flex-row'>
            <a href="/admin/category" className='bg-slate-600 shadow-lg w-full lg:w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Category </p>
            </a>
            <a href="/admin/subcategory" className='bg-slate-600 shadow-lg w-full lg:w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Subcategory </p>
            </a>
            <a href="/admin/blog" className='bg-slate-600 shadow-lg w-full lg:w-1/6 rounded-lg h-48 flex align-middle justify-center self-center items-center cursor-pointer'>
                <p> Blog </p>
            </a>
        </section>
    </div>
  )
}

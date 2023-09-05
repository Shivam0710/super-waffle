import React from 'react'
import SubcategoryCarousel from './SubcategoryCarousel';
import BlogListing from './BlogListing'

export default async function Content({ blogs, subcategories, title }) {
    return (
        <div className='bg-[#11102E] p-7 min-h-screen'>
            <h3 className='text-2xl font-medium'> {title} </h3>
            <SubcategoryCarousel 
            subcategories={subcategories}
            />
            <BlogListing 
                blogs={blogs}
            />
        </div>
    )
}


async function getAllBlogs() {
    const response = await fetch('http://localhost:3000/api/blog/blog');
    const data = await response.json();
    return data.blogs;
}
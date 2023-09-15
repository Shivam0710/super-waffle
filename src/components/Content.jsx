import React from 'react'
import SubcategoryCarousel from './SubcategoryCarousel';
import BlogListing from './BlogListing'

export default async function Content({ blogs, subcategories, title }) {
    return (
        <div className='bg-[#11102E] p-7 min-h-screen w-full'>
            <h3 className='text-2xl font-medium'> {title} </h3>
            { subcategories &&
                <SubcategoryCarousel 
                subcategories={subcategories}
                />
            }
            <BlogListing 
                blogs={blogs}
            />
        </div>
    )
}


async function getAllBlogs() {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/blog/blog');
    const data = await response.json();
    return data.blogs;
}
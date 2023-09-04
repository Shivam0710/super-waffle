import React from 'react'
import SubcategoryCarousel from './SubcategoryCarousel';
import BlogListing from './BlogListing'

const subcategories = [
    {
        name: 'All',
        active: true,
        url: '/subcategory/all'
    },
    {
        name: 'Electronics',
        active: false,
        url: '/subcategory/electronics'
    },
    {
        name: 'Clothing',
        active: true,
        url: '/subcategory/clothing'
    },
    {
        name: 'Home Decor',
        active: true,
        url: '/subcategory/home-decor'
    },
    {
        name: 'Books',
        active: false,
        url: '/subcategory/books'
    },
    {
        name: 'Sports',
        active: true,
        url: '/subcategory/sports'
    },
    {
        name: 'Beauty',
        active: false,
        url: '/subcategory/beauty'
    },
    {
        name: 'All',
        active: true,
        url: '/subcategory/all'
    },
    {
        name: 'Electronics',
        active: false,
        url: '/subcategory/electronics'
    },
    {
        name: 'Clothing',
        active: true,
        url: '/subcategory/clothing'
    },
    {
        name: 'Home Decor',
        active: true,
        url: '/subcategory/home-decor'
    },
    {
        name: 'Books',
        active: false,
        url: '/subcategory/books'
    },
    {
        name: 'Sports',
        active: true,
        url: '/subcategory/sports'
    },
    {
        name: 'Beauty',
        active: false,
        url: '/subcategory/beauty'
    }
];


export default async function Content() {
    const blogs = await getAllBlogs();
    return (
        <div className='w-10/12 bg-[#11102E] p-7'>
            <h3 className='text-2xl font-medium'> Home </h3>
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
import React from 'react'
import SubcategoryCarousel from './SubcategoryCarousel';

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


export default function Content() {
  return (
    <div className='h-screen w-10/12 bg-[#11102E] p-7'>
        <h3 className='text-2xl font-medium'> Technology </h3>
        <SubcategoryCarousel 
        subcategories={subcategories}
        />
    </div>
  )
}

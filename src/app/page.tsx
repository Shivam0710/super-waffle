import React from "react";
import AppSideBar from "../components/AppSidebar";
import Content from "../components/Content";

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

export default async function Home() {
  const {blogs, subcategories } = await fetchData();
  console.log(blogs,subcategories)
  return (
    <main className="overflow-hidden">
      <Content 
        subcategories={subcategories}
        blogs={blogs}
        title={'Home'}
      />    
    </main>
  )
}

async function fetchData() {
    try {
        const blogs = await getAllBlogs();
        const subcategories = await getAllSubCategories();
        return await { blogs, subcategories }
    } catch(err) {
        console.error('Error fetching data:', err);
        return {}
    }
}

async function getAllBlogs() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/blog/blog');
  const data = await response.json();
  return data.blogs;
}

async function getAllSubCategories() {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/blog/subcategory');
    const data = await response.json();
    return data
}
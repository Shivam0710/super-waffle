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
  const blogs = await getAllBlogs();
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

async function getAllBlogs() {
  const response = await fetch('http://localhost:3000/api/blog/blog');
  const data = await response.json();
  return data.blogs;
}
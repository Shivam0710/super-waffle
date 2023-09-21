import React from "react";
import AppSideBar from "../components/AppSidebar";
import Content from "../components/Content";
import Head from "next/head";
import axios from "axios";

export const metadata = {
    title: "SocialDoze: Curated YouTube Video Lists for Every Niche",
    description: "Explore handpicked YouTube video collections on SocialDoze. Discover top content in various categories through insightful blogs and stay updated with the latest trends.",
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
};

export default async function Home() {
  const {blogs, subcategories } = await fetchData();
  return (
    <div>
        <Head>
            <title> SocialDoze: Curated YouTube Video Lists for Every Niche </title>
            <meta name="description" content="Explore handpicked YouTube video collections on SocialDoze. Discover top content in various categories through insightful blogs and stay updated with the latest trends." />
        </Head>
        <main className="overflow-hidden">
            <Content 
                subcategories={subcategories}
                blogs={blogs}
                title={'Home'}
            />    
        </main>
    </div>
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
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/blog/blog')
  return response.data.blogs;
}

async function getAllSubCategories() {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/blog/subcategory')
    return response.data
}
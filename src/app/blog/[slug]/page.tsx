import { headers } from "next/headers";
import React from 'react'
import axios from 'axios';
import { modifyBlogContent } from '../../../../helper/utils';

export default async function Blog() {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const slug = activePath?.split("/")[2]
  let blog = null;
  if(slug) {
    blog = await axios.get(`http://localhost:3000/api/blog/getBlogBySlug?slug=${slug}`);
    if(await blog && await blog.data && await blog.data.blog) {
      blog = await blog.data.blog
      blog.content = await modifyBlogContent(blog.content)
    }
  }

  if(await !blog) return null
  return (
    <div className='grow p-7 bg-[#11102E]'>
      <h1 className='text-xl font-bold'>
        {blog.title}
      </h1>
      <section 
        dangerouslySetInnerHTML={{__html: blog.content}}
        className='blog-content'
      >
      </section>
    </div>
  )
}

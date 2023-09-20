import React from 'react'
import axios from 'axios';
import { modifyBlogContent } from '../../../../helper/utils';

export async function generateMetadata({ params }: {
  params: { slug: string }
}) {
  const blog = await getBlog(params.slug)
  return {
      title: blog.seo_title,
      description: blog.seo_description
  }
}

export default async function Blog({ params }: {
  params: { slug: string }
}) {
  const slug = params.slug
  let blog = null;
  if(slug) {
    blog = await getBlog(slug)
  }

  if(await !blog) return null
  return (
    <div className='grow p-7 bg-[#11102E] min-h-screen'>
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

async function getBlog(slug: any) {
  let blog: any = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/blog/getBlogBySlug?slug=${slug}`);
  if(await blog && await blog.data && await blog.data.blog) {
    blog = await blog.data.blog
    if(await blog.content) {
      blog.content = await modifyBlogContent(blog.content)
    }
  }
  return blog
}

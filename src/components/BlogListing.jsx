import React from 'react'

export default function BlogListing({blogs}) {
    console.log(blogs)
    return (
        <div className='flex mt-12 flex-wrap gap-6'>
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
            { blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`} key={index}>
                        <img className='h-[170px] w-[300px] rounded-md' src={blog.blogCoverPic} alt="" />
                        <p className='pt-2'>
                            {blog.title}
                        </p>
                    </a>
                )
            })

            }
        </div>
    )
}

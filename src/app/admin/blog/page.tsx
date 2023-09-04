import axios from "axios";
import React from "react";

export default async function blog() {
    let blogs = await getAllBlogs();
    console.log(blogs)    

    return (
        <div className="p-20 grow">
           <h3 className="font-bold text-2xl text-white mb-10 flex justify-between"> 
		   		<span>
					All Blogs 
				</span>
				<a href="/admin/blog/add" className="bg-white text-black p-2 rounded-md text-sm">
					Add Blog
				</a>
			</h3>
           <section className="">
                { blogs.map((blog: any, index:number) => (
                    <a href={`/admin/blog/edit?slug=${blog.slug}`} key={index} className="flex flex-row justify-between bg-slate-50 text-black px-6 py-4 rounded-xl">
                        <span>
                            {blog.title}
                        </span>
                        <span>
                            Edit
                        </span>
                    </a>
                ))

                }
           </section>
        </div>
    )
}

async function getAllBlogs() {
    let blogs = (await axios.get("http://localhost:3000/api/blog/blog")).data
    return blogs.blogs;
}
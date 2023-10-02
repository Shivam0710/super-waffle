import axios from "axios";

export default async function Categories() {
    let categories:any = await getAllCategories();

    return (
        <div className="p-20 grow w-screen">
           <h3 className="font-bold text-2xl text-white mb-10 flex justify-between"> 
		   		<span>
					All Categories 
				</span>
				<a href="/admin/category/add" className="bg-white text-black p-2 rounded-md text-sm">
					Add Category
				</a>
			</h3>
           <section className="flex gap-4 flex-col">
                { categories.map((category: any, index: number) => (
                        <a href={`/admin/category/edit?id=${category._id}`} key={index} className="flex flex-row justify-between bg-slate-50 text-black px-6 py-4 rounded-xl">
                            <span>
                                {category.name}
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

async function getAllCategories() {
    let categories = await axios.get("http://socialdoze.in" + "/api/blog/category")
    return categories.data
}
import axios from "axios";

export default async function Categories() {
    let categories:any = await getAllSubcategories();

    return (
        <div className="p-20">
           <h3 className="font-bold text-2xl text-white mb-10"> All Categories </h3>
           <section className="flex gap-4 flex-col">
                { categories.map((category: any, index: number) => (
                        <a href={`/admin/subcategory/edit?id=${category._id}`} key={index} className="flex flex-row justify-between bg-slate-50 text-black px-6 py-4 rounded-xl">
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

async function getAllSubcategories() {
    let categories = await axios.get("http://localhost:3000/api/blog/subcategory")
    return categories.data
}
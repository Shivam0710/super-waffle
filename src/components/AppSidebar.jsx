import axios from "axios"
import MobileSidebar from './MobileSidebar'


export default async function AppSideBar({ }) {
    let categories = await getAllCategories();

    return (
        <>
            <div className="block lg:hidden">
                <MobileSidebar categories={categories} />
            </div>
            <div className="hidden md:flex">
                <div className="bg-[#1D1D41] min-w-[200px]">
                    <a href="/" className="block font-bold text-2xl p-7 text-center">SocialDoze</a>
                    { categories?.map((category, index) => (
                        <a href={`/category/${category.name.split(" ").join("-")}`} className="py-4 px-5 text-sm flex items-center gap-3 cursor-pointer" key={index}> 
                            <img className="h-6" src="/generic.png" alt="" />
                            <p className="font-semibold">
                                {category.name} 
                            </p>
                        </a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

async function getAllCategories() {
    try {
        const response = await axios.get("http://socialdoze.in" + "/api/blog/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}
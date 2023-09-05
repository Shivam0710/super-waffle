import axios from "axios"
import { headers } from "next/headers";
import MobileSidebar from './MobileSidebar'

export default async function AppSideBar({ }) {
    let categories = await getAllCategories();
    // return (<MobileSidebar />)
    return (
        <div className="bg-[#1D1D41] min-w-[200px]">
            <p className="font-bold text-2xl p-7 text-center">SocialDoze</p>
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
    )
}

async function getAllCategories() {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/api/blog/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}
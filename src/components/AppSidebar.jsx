import axios from "axios"

export default async function AppSideBar({ }) {
    let categories = await getAllCategories();
    return (
        <div className="w-2/12 bg-[#1D1D41]">
            <p className="font-bold text-2xl p-7 text-center">SocialDoze</p>
            { categories?.map((category, index) => (
                <a className="py-4 px-5 text-sm flex items-center gap-3 cursor-pointer" key={index}> 
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
        const response = await axios.get("http://localhost:3000/api/blog/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}
export default function SubcategoryCarousel({ subcategories }) {
    function getSlug(name) {
        return name.split(" ").join("-").toLowerCase();
    }
    
    return (
        <div className="mt-3 flex flex-row gap-5 overflow-auto no-scrollbar">
            { subcategories.map((subcategory, index) => (
                <a className="bg-[#1D1D41] py-2 px-3 rounded-3xl hover:text-black hover:bg-white whitespace-nowrap" href={`/subcategory/${getSlug(subcategory.name)}?id=${subcategory._id}`} key={index}>
                    {subcategory.name}
                </a>
            ))

            }
        </div>
    )
}
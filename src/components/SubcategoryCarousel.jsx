export default function SubcategoryCarousel({ subcategories }) {
    return (
        <div className="mt-3 flex flex-row gap-5 overflow-auto no-scrollbar">
            { subcategories.map((subcategory, index) => (
                <a className="bg-[#1D1D41] py-2 px-3 rounded-3xl hover:text-black hover:bg-white whitespace-nowrap" href="" key={index}>
                    {subcategory.name}
                </a>
            ))

            }
        </div>
    )
}
export type Category = {
    _id: string;
    name: string;
    seo_title: string;
    seo_description: string;
    og_title: string;
    og_description: string;
};

export type Subcategory = {
    name: string;
    parentCategory: string;
    seo_title?: string;
    seo_description?: string;
    og_title?: string;
    og_description?: string;
}
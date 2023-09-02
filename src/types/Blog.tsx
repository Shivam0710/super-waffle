export interface Blog {
    title: string;
    content: string;
    slug: string;
    category: string;
    subcategory?: string;
    date?: string;
    blogCoverPic: string;
    seo_title?: string;
    seo_description?: string;
    og_title?: string;
    og_description?: string;
}
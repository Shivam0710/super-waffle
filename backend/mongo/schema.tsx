import mongoose from "mongoose";
import { Document, Schema, Types } from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: false },
    date: { type: Date, required: false },
    seo_title: {
        type: String,
        required: false,
        default: function () {
            return (this as any).title;
        }
    },
    seo_description: { type: String, required: false },
    og_title: { type: String, required: false },
    og_description: { type: String, required: false}
});


const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    seo_title: { type: String, required: false },
    seo_description: { type: String, required: false },
    og_title: { type: String, required: false },
    og_description: { type: String, required: false},
});

const SubcategorySchema = new mongoose.Schema({
    name: String,
    parentCategory: { type: Types.ObjectId, ref: 'Category' },
    seo_title: { type: String, required: false },
    seo_description: { type: String, required: false },
    og_title: { type: String, required: false },
    og_description: { type: String, required: false},
});

export const CategoryModel = mongoose.models.Category || mongoose.model('Category', CategorySchema)
export const BlogModel = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
export const SubcategoryModel = mongoose.models.Subcategory || mongoose.model('Subcategory', SubcategorySchema)
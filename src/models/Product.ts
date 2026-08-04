import { Schema, model, InferSchemaType } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
        category: {
            type: String,
            trim: true,
            default: "general",
        },
        imageUrl: {
            type: String,
            trim: true,
        },
        isActive: {
            type: Boolean,
            default: true, // baja lógica
        },
    },
    {
        timestamps: true,
    }
);

type ProductType = InferSchemaType<typeof productSchema>;

const Product = model<ProductType>("Product", productSchema);

export default Product;
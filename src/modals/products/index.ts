import { Schema, model, Document } from "mongoose";

import * as Constants from "../../utils/constants";

export interface requestBodyI {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  image: string;
  averageRating: number;
  comments: [
    {
      userId: string;
      username: string;
      comment: string;
      rating: number;
      timestamp: string;
    }
  ];
}

interface ProductFields extends Document, requestBodyI {}

const ProductSchema = new Schema<ProductFields>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: Constants.Categories,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
      enum: Constants.SubCategory,
    },
    averageRating: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      enum: Constants.Brands,
    },
    comments: {
      type: [
        {
          userId: { type: String, required: true },
          username: { type: String, required: true },
          comment: { type: String, required: true },
          rating: { type: Number, required: true },
          timestamp: { type: String, required: true },
        },
      ],
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const ProductModel = model<ProductFields>("Product", ProductSchema);

export default ProductModel;

import { Schema, model, Document } from "mongoose";

export interface requestBodyI {
  productId: string;
  productCount: number;
  productTotal: number;
}

export interface CartFields extends Document, requestBodyI {}

const cartSchema = new Schema<CartFields>(
  {
    productId: { type: String, require: true },
    productCount: { type: Number, require: true },
    productTotal: { type: Number, require: true },
  },
  { versionKey: false }
);

const cartModel = model<CartFields>("cart", cartSchema);

export default cartModel;

import { Schema, model, Document } from "mongoose";

export interface userOrderInterface {
  OrderId: string;
  ExpectedDelivery: string;
  productId: string;
  productCount: number;
  productTotal: number;
}
export interface requestBodyI {
  userId: string;
  userData: userOrderInterface[];
}

export interface OrderFields extends Document, requestBodyI {}

const orderSchema = new Schema<OrderFields>(
  {
    userId: { type: String, require: true },
    userData: [
      {
        OrderId: { type: String, require: true },
        ExpectedDelivery: { type: String, require: true },
        productId: { type: String, require: true },
        productCount: { type: Number, require: true },
        productTotal: { type: Number, require: true },
      },
    ],
  },
  { versionKey: false }
);

const orderModal = model<OrderFields>("order", orderSchema);

export default orderModal;

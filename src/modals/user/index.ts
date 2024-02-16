import { Schema, model, Document } from "mongoose";

export interface requestBodyI {
  name: string;
  email: string;
  password: string;
}

interface UserFields extends Document, requestBodyI {}

const userSchema = new Schema<UserFields>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const userModel = model<UserFields>("user", userSchema);

export default userModel;

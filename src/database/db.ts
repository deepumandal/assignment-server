import mongoose from "mongoose";
import { EnvProvider } from "../utils/EnvProvider";

const connectToDB = async (): Promise<void> => {
  console.log("database connecting...");
  const connectionUrl = EnvProvider.CONNECTION_URL;

  try {
    await mongoose.connect(connectionUrl);
    console.log("DB connected successfully!");
  } catch (err: any) {
    if (err instanceof Error) {
      console.log(`Getting Error from DB connection ${err.message}`);
    } else {
      console.log("An unknown error occurred.");
    }
  }
};

export default connectToDB;

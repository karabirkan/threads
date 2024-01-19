import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGODB not found");

  if (isConnected) return console.log("Already conencted to mongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log("MONGODB connected!");
  } catch (error) {
    console.log(error);
  }
};

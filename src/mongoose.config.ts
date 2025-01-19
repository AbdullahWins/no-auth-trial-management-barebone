import mongoose from "mongoose";
import { environment } from "./environment.config";

export const connectToDatabase = async () => {
  const uri = environment.MONGOOSE_URL;
  try {
    await mongoose.connect(uri, {
      writeConcern: { w: "majority" },
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: process.cwd() ? path.join(process.cwd(), ".env") : ".env",
});

export const environment = {
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  MONGOOSE_URL: process.env.MONGOOSE_URL || "mongodb://localhost:27017/test",
};

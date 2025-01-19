import express, { Request, Response } from "express";
import { connectToDatabase } from "./mongoose.config";
import { environment } from "./environment.config";
import trial_router from "./trial.router";

const app = express();
const port = environment.SERVER_PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDatabase();

app.use("/trials", trial_router);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

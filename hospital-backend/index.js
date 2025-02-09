import express from "express";
import connectDB from "./src/connectDB/connectDB.js";
import userRouter from "./src/routes/userRouter.js";
import { config } from "dotenv";

config();

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/hospital-user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import connectDB from "./src/connectDB/connectDB.js";
import userRouter from "./src/routes/userRouter.js";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT; // Change 5000 to your desired port

connectDB();

app.use(cors());

app.use(express.json());

app.use("/hospital-user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

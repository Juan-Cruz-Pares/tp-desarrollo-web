import express, { Request, Response } from "express";
import dontenv from 'dotenv';
import cors from 'cors'
import connectDB from "./config/db";

dontenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor on!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
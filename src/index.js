import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "../routes/product.route.js";
import inventoryRoute from "../routes/inventory.route.js";
import "../db/connection.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productRoute);
app.use("/api", inventoryRoute);

app.listen(4000, () => {
  console.log("Server is up.!");
});

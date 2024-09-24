import express from "express";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// router.get('/test', test)
router.get("/products", fetchProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", updateProduct);
router.get("/product/:id", getProductById);

export default router;

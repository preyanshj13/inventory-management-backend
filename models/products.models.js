import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  // date: {
  //   type: String,
  //   required: true,
  // },
  // amount: {
  //   type: Number,
  //   required: true,
  // },
  // buyPrice: {
  //   type: Number,
  // },
  // seller: {
  //   type: String,
  // },
  // sellPrice: {
  //   type: Number,
  // },
  // buyer: {
  //   type: String,
  // },
  // transaction: {
  //   type: String,
  //   required: true,
  // },
});

const Product = mongoose.model("Product", productSchema);

export default Product;

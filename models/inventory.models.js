import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  transactionType: {
    type: String,
    enum: ["Purchased", "Sold"],
    required: true,
  },
  pricePerItem: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;

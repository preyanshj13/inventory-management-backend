import Inventory from "../models/inventory.models.js";
import Product from "../models/products.models.js";

export const fetchInventory = async (req, res) => {
  const inventory = await Inventory.find({}).populate(
    "productId",
    "productName"
  );
  res.send(inventory);
};

export const manageInventory = async (req, res) => {
  try {
    const { productId, transactionType, quantity, amount } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ error: "Product does not exist." });
    }
    if (transactionType === "Sold" && product.quantity < quantity) {
      return res
        .status(400)
        .send({ error: "Insufficient Quantity available. "});
    }

    const inventory = new Inventory(req.body);
    await inventory.save();

    if (transactionType === "Purchased") {
      product.quantity += Number(quantity);
      // product.price = (product.price * product.quantity + amount) / (quantity + product.quantity);
    } else if (transactionType === "Sold") {
      product.quantity -= quantity;
    }
    // product.quantity += transactionType === "Purchased" ? quantity : -quantity;
    await product.save();
    res.status(201).send(inventory);
  } catch (error) {
    console.log(error);
    res.status(500).send("error occured in transaction ", error);
  }
};

export const deleteInventoryTransaction = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      return res.send("Transaction does not exist.");
    }
    res.send("Inventory transaction Deleted");
  } catch (error) {
    console.log(error);
    res.send("error occured in Deleting Inventory transaction", error);
  }
};

// export const deleteAllTransactions = async (req,res) => {
//   try {
//     const inventory = await Inventory.deleteMany({})
//     res.send("Transactions deleted")
//   } catch (error) {
//     console.log(error) 
//     res.send("error in deleting all transactions", error)
//   }
// };

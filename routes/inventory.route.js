import express from 'express'
import { deleteInventoryTransaction, fetchInventory, manageInventory } from '../controllers/inventory.controller.js';
const router = express.Router();

router.get("/inventory", fetchInventory);
router.post("/inventory", manageInventory);
router.delete("/inventory/:id", deleteInventoryTransaction);
// router.delete("/inventory/", deleteAllTransactions);

export default router
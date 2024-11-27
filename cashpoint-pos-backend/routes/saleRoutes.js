import express from "express";
import asyncHandler from "express-async-handler";
import Sale from "../models/Sale.js";
import Product from "../models/Product.js";

const router = express.Router();

// Create a new sale
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { productId, userId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    if (product.quantity < quantity) {
      res.status(400);
      throw new Error("Insufficient product quantity");
    }

    const total = product.price * quantity;

    const sale = await Sale.create({ product: productId, user: userId, quantity, total });

    product.quantity -= quantity;
    await product.save();

    res.status(201).json(sale);
  })
);

// Get all sales
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const sales = await Sale.find({}).populate("product user", "name price");
    res.json(sales);
  })
);

// Get a single sale by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const sale = await Sale.findById(req.params.id).populate("product user", "name price");

    if (sale) {
      res.json(sale);
    } else {
      res.status(404);
      throw new Error("Sale not found");
    }
  })
);
export default router;

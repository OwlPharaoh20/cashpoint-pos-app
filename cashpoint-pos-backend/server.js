
// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());


// Routes for different API endpoints 
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sales", saleRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Cashpoint POS Backend is Running");
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));
import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("Sale", saleSchema);

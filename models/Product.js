import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    tag: { type: String },
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    description: { type: String },
    features: [{ type: String }],
    techs: [{ type: String }],
    imageUrl: { type: String },
    subImages: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

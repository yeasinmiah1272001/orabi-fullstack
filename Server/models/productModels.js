import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  _type: { type: String },
  name: { type: String, require: true },
  images: { type: Array, require: true },
  price: { type: Number, require: true },
  discountedPersentage: { type: Number },
  category: { type: String, require: true },
  band: { type: [String] },
  badge: { type: Boolean },
  isAvailabel: { type: Boolean },
  offer: { type: Boolean },
  description: { type: String, require: true },
  tags: { type: Array },
});

const productModels =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModels;

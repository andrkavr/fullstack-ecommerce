const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

export const Product = model("Product", ProductSchema);

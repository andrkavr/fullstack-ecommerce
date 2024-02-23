const { model, Schema, models } = require("mongoose");

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

//Check if product exists, otherwise create new Product
export const Product = models.Product || model("Product", ProductSchema);

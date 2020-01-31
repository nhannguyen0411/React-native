var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  id: String,
  images: Array,
  name: String,
  price: String,
  category: String,
  isDeleted: Boolean
});

var Products = mongoose.model("Products", productSchema, "products");

module.exports = Products;

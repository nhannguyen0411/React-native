var mongoose = require("mongoose");

var categoriesSchema = new mongoose.Schema({
  id: String,
  name: String,
  img: String,
  isDeleted: Boolean
});

var Categories = mongoose.model("Categories", categoriesSchema, "categories");

module.exports = Categories;

const Category = require("../../models/categories.model");

module.exports.index = async (req, res, next) => {
  const categories = await Category.find();
  res.send({
    success: true,
    message: categories
  });
};

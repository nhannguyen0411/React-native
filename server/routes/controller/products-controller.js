const Product = require("../../models/product.model");

module.exports.index = async (req, res, next) => {
    const { category } = req.query;
    await Product.find({
        category: category
    }, (err, category) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        if(category.length < 1) {
            return res.send({
                success: false,
                message: 'Error: Category Invalid'
            })
        }

        return res.send({
            success: true,
            message: category
        })
    });
};

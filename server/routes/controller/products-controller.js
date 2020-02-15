const Product = require("../../models/product.model");
var fs = require('fs');
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

module.exports.create = async (req, res, next) => {
    let formidable = require('formidable');
    let form = new formidable.IncomingForm();
    form.uploadDir = global.__project_dirname + '../../uploads';
    form.keepExtensions = true;
    form.maxFieldsSize = 10*1024*1024;
    form.multiples = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            res.send({
                success: false,
                message: 'Error: Cannot upload image'
            })
        }
        let arrayOfFiles = files[""];
        if(arrayOfFiles.length > 0) {
            let fileNames = [];
            arrayOfFiles.forEach((eachFile) => {
                fileNames.push(eachFile.path.split('\\')[1]);
            });
            res.send({
                success: true,
                data: fileNames,
                message: 'Upload images successfully'
            });
        }
        else {
            res.send({
                success: false,
                message: 'No images to upload!'
            })
        }
    })
};
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

module.exports.create = async (req, res, next) => {
    console.log(req.userId);
    let formidable = require('formidable');
    let form = new formidable.IncomingForm();
    form.uploadDir = global.__project_dirname + '../../uploads';
    form.keepExtensions = true;
    form.maxFieldsSize = 10*1024*1024;
    form.multiples = true;
    form.parse(req, (err, fields, files) => {
        const { image } = fields;
        console.log(image);
        if(err) {
            res.send({
                success: false,
                message: 'Error: Cannot upload image'
            })
        }
        let arrayOfFiles = [image];
        if(arrayOfFiles.length > 0) {
            res.send({
                success: true,
                message: 'Upload images successfully',
                data: image
            })
        }
        else {
            res.send({
                success: false,
                message: 'No images upload'
            })
        }
        // if(arrayOfFiles.length > 0) {
        //     let fileNames = [];
        //     arrayOfFiles.forEach((eachFile) => {
        //         fileNames.push(eachFile.path.split('\\')[1]);
        //     });
        //     res.send({
        //         success: true,
        //         data: fileNames,
        //         message: 'Upload images successfully'
        //     });
        // }
        // else {
        //     res.send({
        //         success: false,
        //         message: 'No images to upload!'
        //     })
        // }
    })
};
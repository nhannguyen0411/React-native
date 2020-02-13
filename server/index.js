require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require('path');
const formidable = require('express-formidable');
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');

// const tokenMiddle = require('./middleware/tokenMiddle');
const indexRoutesProduct = require('./routes/api/products');
const indexRoutesCategory = require('./routes/api/categories');
const signInRoutes = require('./routes/api/auth');
const signUpRoutes = require('./routes/api/auth');
const verifyRoutes = require('./routes/api/auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidable({uploadDir: __dirname + '/uploads'}));

app.post('/upload', (req, res) => {
    console.log(req.fields); // contains non-file fields
    res.send({
        success: true,
        message: 'Good',
        data: req.fields.image
    }) // contains files
});
// const storage = multer.diskStorage({
//     destination: './uploads',
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// })

// const upload = multer({
//     storage
// }).single('myImage')

// app.post('/upload', (req, res) => {
//     console.log('req ouside: ', req.body)
//     upload(req, res, (err) => {
//         if(err) {
//             res.send({
//                 success: false,
//                 message: 'Server error'
//             })
//         }
//         else {
//             console.log("req inside: ", req.file);
//             res.send({
//                 success: true,
//                 message: 'Good'
//             })
//         }
//     })
// })


app.use('/api', indexRoutesProduct);
app.use('/api', indexRoutesCategory);
app.use('/api', signInRoutes);
app.use('/api', signUpRoutes);
app.use('/api', verifyRoutes);
app.listen(port, () => {
    console.log(`App running`);
});
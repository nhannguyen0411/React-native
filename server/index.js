require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require('path');
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
// const formidable = require('express-formidable');
// const tokenMiddle = require('./middleware/tokenMiddle');
const indexRoutesProduct = require('./routes/api/products');
const createRoutesProduct = require('./routes/api/products');
const indexRoutesCategory = require('./routes/api/categories');
const signInRoutes = require('./routes/api/auth');
const signUpRoutes = require('./routes/api/auth');
const verifyRoutes = require('./routes/api/auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(formidable({uploadDir: __dirname + '/uploads'}));

app.use('/api', indexRoutesProduct);
app.use('/api', createRoutesProduct);
app.use('/api', indexRoutesCategory);
app.use('/api', signInRoutes);
app.use('/api', signUpRoutes);
app.use('/api', verifyRoutes);


app.listen(port, () => {
    console.log(`App running port ${port}`);
});
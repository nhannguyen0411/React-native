require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = process.env.PORT
const bodyParser = require('body-parser');
const indexRoutesProduct = require('./routes/api/products');
const indexRoutesCategory = require('./routes/api/categories');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', indexRoutesProduct);
app.use('/api', indexRoutesCategory);
app.listen(port, () => {
    console.log(`App running`);
});
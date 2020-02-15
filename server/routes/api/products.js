const controller = require("../controller/products-controller");
var router = require("express").Router();

router.get("/products", controller.index);
router.post('/upload', controller.create)
module.exports = router;

const controller = require("../controller/products-controller");
const authController = require('../controller/auth-controller');
var router = require("express").Router();

router.get("/products", controller.index);
router.post('/upload', authController.requireToken, controller.create)
module.exports = router;

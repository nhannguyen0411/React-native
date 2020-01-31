const controller = require("../controller/categories-controller");
var router = require("express").Router();

router.get("/categories", controller.index);
module.exports = router;

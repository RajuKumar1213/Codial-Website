const express = require("express");
const router = express.Router()
const homeController = require("../controllers/home_controller");

console.log("This is the express router")
router.get("/", homeController.home );






module.exports = router;
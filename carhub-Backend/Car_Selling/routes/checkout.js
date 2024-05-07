const express = require("express")
const userController = require("../controllers/checkout")
const router = express.Router();

router.post("/",userController.checkout)

module.exports = router;
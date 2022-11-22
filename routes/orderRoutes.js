const express = require("express");
const router = express.Router();
const {addOrderItems}=require("../controllers/orderControllers");
const {protect} =require('../middleware/authMiddleware')


router.route('/').post(protect,addOrderItems)
module.exports=router
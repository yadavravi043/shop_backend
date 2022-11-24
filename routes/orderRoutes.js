const express = require("express");
const router = express.Router();
const {addOrderItems,getOrderById}=require("../controllers/orderControllers");
const {protect} =require('../middleware/authMiddleware')


router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrderById)
module.exports=router
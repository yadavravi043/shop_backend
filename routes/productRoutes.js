const express = require("express");
const router = express.Router();
const {getProducts,getProductById}=require('../controllers/productController')
//const asyncHandler = require("express-async-handler");
//const Product = require("../models/productsModel");
//const mongoose=require('mongoose')

//we can use try catch but we use inbuilt asyncHandler
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     //res.status(401)
//     //throw new Error('Not Authorized')
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(400).json({ message: "product not found" });
//     }
//   })
// );



router.route('/').get(getProducts)
//router.get("/",getProducts)
router.get('/:id',getProductById)

module.exports = router;

const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

module.exports.addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice}=req.body
      
        if(orderItems && orderItems.length===0){
          res.status(400)
          throw new Error('no order items')
        }
        else{
            const order=new Order({
                orderItems,
                user:req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice 
            })

            const createdOrder=await order.save()
            res.status(201).json(createdOrder)
        }
        
});
module.exports.getOrderById=asyncHandler(async(req,res)=>{
    const order= await Order.findById(req.params.id).populate('user','name','email')
    if(order){
  res.json(order)
    }else{
     res.status(400)
     throw new Error("Order not Found")
    }
})
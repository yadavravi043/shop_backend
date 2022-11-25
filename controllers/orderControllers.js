const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const mongoose =require('mongoose')

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
    //const order= await Order.findById(req.params.id)
    //var valid= mongoose.Types.ObjectId.isValid(req.params.id);
    let orderId=req.params.id
    console.log("hiii")
    console.log(orderId,"req id ")
    // console.log(mongoose.Types.ObjectId(orderId))
    console.log('line 42')
    const order = await Order.findById(req.params.id).populate('user','name email')
    console.log("order hai.................",order)
    if(order){
       res.json(order)
    }else{
     res.status(404)
     throw new Error("Order not Found")
    }
})
module.exports.updateOrderTOPaid=asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
       order.isPaid=true
       order.paidAt=Date.now()
       order.paymentResult={
        id:req.body.status,
         status:req.body.status,
         update_time:req.body.update_time,
         email_address:req.body.payer.email_address
       }
       const updatedOrder= await order.save()
       res.json(updatedOrder)

    }else{
     res.status(404)
     throw new Error("Order not Found")
    }
})
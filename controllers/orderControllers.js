const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

module.exports.addOrderItems = asyncHandler(async (req, res) => {
    const {orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice}=req.body;
      
        if(orderItems && orderItems.length===0){
          res.status(400)
          throw new Error('no order items')
          return
        }
        else{
            const order=new Order({
                orderItems,
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
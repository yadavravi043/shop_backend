const jwt = require('jsonwebtoken');
const User= require("../models/userModel");
const asyncHandler =require('express-async-handler')
module.exports.protect=  asyncHandler(async(req,res,next)=>{
let token
if(req.headers.authorization  && req.headers.authorization.startsWith('Bearer')){
  try{
   token=req.headers.authorization.split(' ')[1]
   const decoded = jwt.verify(token,process.env.JWT_SECRET)
   req.user=await User.findById(decoded.id).select('-password')


   if (!req.user) {
    res.status(400)
    throw new Error('user not found!')
}
   //next()
  }
  catch(err){
  res.status(401)
  throw new Error('Token not found')
  }
}
if(!token){
    res.status(401)
    throw new Error('Not Authorized not Token')
}
next()
})
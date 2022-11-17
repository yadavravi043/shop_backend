const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const {generateToken} =require('../utils/generateTokens')
module.exports.authUser = asyncHandler(async (req, res) => {
    
        const {email,password}=req.body;
    //    res.send({
        //     email,password
        //    })
        
        //IT FINDS ALL THE USERS FROM DATABASE
        // const user = await User.find({});
        // res.json(user);
        
      //FIND THAT ONLY USER WITH THAT EMAIL
         const user = await User.findOne({email});
         console.log(user)
         if(user && (await user.matchedPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user._id),
            })
        }else{
            res.status(401)
            throw new Error('invalid email or password ')
        }
    });
 module.exports.getUserProfile = asyncHandler(async (req, res) => {
    const user= await User.findById(req.user._id)
    if(user){
      res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
      })
    }
    else{
        res.status(401)
        throw new Error('user not found')
    }
 })
module.exports.registerUser= asyncHandler(async(req,res)=>{
const {name,email,password}=req.body
const userExists= await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('User Already Exist')
  }
  const user= await User.create({
    name,email,password
  })
  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin, 
        token:generateToken(user._id)
    })
  }else{
    res.status(401)
        throw new Error('user not registered')
  }
})
const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
},{timestamp:true})

const productSchema=mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref :'User'
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
//we can make seprate model for this but this small enough so we can do like this also
    reviews:[reviewSchema],
    numReviews:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    }
},{timestamp:true})
const Product=mongoose.model('Product',productSchema)
//export default Product;
module.exports=Product
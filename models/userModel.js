const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamp:true})

userSchema.methods.matchedPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//user save krne se pehle password encrpyt krega
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt =await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
const User=mongoose.model('User',userSchema)
//export default User;
module.exports=User
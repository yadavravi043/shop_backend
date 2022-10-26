const mongoose =require('mongoose')
const connectDB= async ()=>{
    try{
        const db=process.env.DATABASE_ATLAS
        mongoose.connect(db)   
    }
    catch(error){
  console.log(error)
  process.exit(1)
    }
}
module.exports=connectDB
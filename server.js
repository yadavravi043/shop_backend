const { json } = require('express')
const express =require('express')
const port=process.env.PORT||5000
const app = express()
//allow us to accept json data in body
app.use(express.json())
//const products = require('./data/products')
const  mongoose =require('mongoose')
const connectDB=require('./config/db')
const colors=require('colors')
require("dotenv").config();

const productRoutes=require('./routes/productRoutes')
const userRoutes=require('./routes/userRoutes')
app.get('/api',(req,res)=>{
res.end('server is running')
})


//  app.get('/api/products',(req,res)=>{
//     res.json(products)
//  })

// app.get('/api/products/:id',(req,res)=>{
//     const product=products.find(p=>p._id ===req.params.id)
//     res.json(product)
// })
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)


const db=process.env.DATABASE_ATLAS
mongoose
.connect(db)
.then(()=>console.log(`database connected successfully`.cyan.underline))
.catch(()=>console.log(`database connection failed`.red.underline))

app.listen(port,()=>{
    console.log(`server is running on port:${port}`.cyan)
})
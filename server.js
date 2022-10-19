const { json } = require('express')
const express =require('express')
const port=process.env.PORT||5000
const app = express()
const products = require('./data/products')



app.get('/api',(req,res)=>{
res.end('server is running')
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=>p._id ===req.params.id)
    res.json(product)
})


app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
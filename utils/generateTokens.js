const jwt=require('jsonwebtoken')
module.exports.generateToken=(id)=>
{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'20d'
    })
}
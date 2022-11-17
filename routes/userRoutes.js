const express=require('express')
const router=express.Router()
const {authUser,getUserProfile}=require('../controllers/userControllers')

router.post('/login',authUser)
router.route('/profile').get(getUserProfile)
module.exports=router;
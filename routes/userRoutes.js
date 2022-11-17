const express=require('express')
const router=express.Router()
const {authUser,getUserProfile,registerUser}=require('../controllers/userControllers')
const {protect}= require('../middleware/authMiddleware')

router.post('/login',authUser)
router.post('/',registerUser)
router.route('/profile').get(protect,getUserProfile)
module.exports=router;
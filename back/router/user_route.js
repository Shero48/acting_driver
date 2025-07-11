const express=require('express');
const router=express.Router();
const {register,login,my_profile,view_profile,logout}=require('../controller/user_con');
const {view_order}=require('../controller/order_con')
const find_token=require('../middleware/find_token')

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/my_profile').get(find_token,my_profile)
router.route("/view_order").get(find_token,view_order)
router.route('/search/:id').get(view_profile);
router.route('/exit').get(logout);

module.exports=router
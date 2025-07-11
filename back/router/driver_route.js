const express=require('express');
const router=express.Router();
const {register,login,my_profile,logout,view_profile}=require('../controller/dri_con');
const {view_order}=require('../controller/order_con');
const find_token=require('../middleware/find_token')

router.route("/register").post(register);
router.route('/login').post(login);
router.route("/my_page").get(find_token,my_profile);
router.route('/view_profile/:id').get(view_profile);
router.route("/view_order").get(find_token,view_order);
router.route("/logout").get(logout);

module.exports=router
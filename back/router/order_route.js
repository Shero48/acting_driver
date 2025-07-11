const express=require('express');
const router=express.Router();
const {book_order,change_status,view_partricular}=require("../controller/order_con");
const find_token=require('../middleware/find_token');

router.route("/book_order/:id").post(find_token,book_order);
router.route("/change/:id").get(find_token,change_status);
router.route("/view/:id").get(view_partricular);


module.exports=router
const User=require("../model/user");
const Driver=require("../model/driver");
const Order=require("../model/order");
const Notify=require('../model/notify');


const book_order=async (req,res)=>{
    try{
        const {id}=req.params;
        const {time,date,from,to,distance,amount}=req.body;
        const user=req.user;
        const booking=await Order.create({
            user:user,
            driver:id,
            book_info:{
                from:from,
                to:to,
                time:time,
                distance:distance,
                Date:date,
                amount:amount
            }
        });
        if(booking){
            return res.status(201).json("you booked successfully");
        }
    }catch(err){
        console.log(`book order page err occured : ${err}`);
        res.status(500).json("internal server error");
    }
}

const view_order=async(req,res)=>{
    try{
        const user_id=req.user;
        let type=req.originalUrl.trim().split('/')[3];
       const order_list=type=='driver'?await Order.find({driver:user_id}):await Order.find({user:user_id});
       return res.status(200).json(order_list)
    }catch(err){
        console.log(`err occured on view_order page : ${err}`);
        res.status(500).json("internal server error")
    }
}

const view_partricular=async(req,res)=>{
    try{
        const {id}=req.params;
        const order=await Order.findById(id);
        if(!order){
            return res.status(404).json("booking is not found");
        }
        return res.status(200).json(order)
    }catch(err){
        console.log(`err occured on view_particulaer page : ${err}`);
        return res.status(500).json("internal server err");
    }
}

const change_status=async(req,res)=>{
    try{
        const status=req.query.status;
        const {id}=req.params;
        const message=status=='accept'?"your booking is conformed go to enjoy our trip":"sorry, your booking is canceld try to book another driver";
        const order_detail=await Order.findByIdAndUpdate(id,{status:status});
        console.log(order_detail)
        const notify=await Notify.create({
            from:order_detail.user,
            to:order_detail.driver,
            msg:message,
        })
    }catch(err){
        console.log(`err occured on change order page : ${err}`);
        return res.status(500).json("internal server err");
    }
}
module.exports={book_order,view_order,change_status,view_partricular};
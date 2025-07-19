const User=require("../model/user");
const Driver=require("../model/driver");
const Order=require("../model/order");
const Notify=require('../model/notify');


const book_order=async (req,res)=>{
    try{
        const {id}=req.params;
        let {time,date,from,to,distance,amount,type}=req.body;
        const user=req.user;
        let [houer,minute]=time.split(':')
        const am=houer>=12||12?"PM":"AM";
        const houers=houer%12||12;
        time=`${houers.toString().padStart(2,0)}:${minute} ${am}`
        console.log(time)
        const booking=await Order.create({
            user:user,
            driver:id,
            book_info:{
                from:from,
                to:to,
                time:time,
                distance:distance,
                Date:date,
                amount:amount,
                type:type
            }
        });
        const user_data =await User.findById(user);
        const driver=await Driver.findById(id);
        if(booking){
            user_data.booking.push(booking._id);
            driver.order.push(booking._id);
            await user_data.save();
            await driver.save();
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
        const order_list=type=='driver'?await Order.find({driver:user_id}):await Order.find({user:user_id}).populate({path:'user',select:'-password'})
        .populate({path:'driver',select:'-password -document'});
        return res.status(200).json(order_list);
    }catch(err){
        console.log(`err occured on view_order page : ${err}`);
        res.status(500).json("internal server error");
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
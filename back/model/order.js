const mongoose=require("mongoose");
const schema=mongoose.Schema;
const data_model=new schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    driver:{
        type:mongoose.Schema.ObjectId,
        ref:'driver'
    },
    book_info:{
        time:{
            type:String,
            required:true,
            match:/^(0[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i
        },
        type:{
            type:String,
            enum:['bike','car','auto','bus'],
        },
        Date:{
            type:Date,
            required:true
        },
        from:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        },
        distance:{
            type:Number,
            required:true
        }
    },
    coupon:{
        type:mongoose.Schema.ObjectId,
        ref:'coupon'
    },
    status:{
        type:String,
        enum:['accept','reject','pending'],
        default:'pending'
    }
},{timestamps:true});

const Order=mongoose.model("order",data_model);

module.exports=Order  
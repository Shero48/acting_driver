const mongoose=require("mongoose");
const schema=mongoose.Schema;
const data_model={
    code:{
        type:String,
        trim:true,
        unique:true
    },
    start:{
        type:String
    },
    end:{
        type:String
    },
    con:{
        type:String
    },
    user:{
        type:sting
    }
}
const coupon_code=mongoose.model('coupon',data_model);
module.exports=coupon_code;
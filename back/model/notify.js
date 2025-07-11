const mongoose=require("mongoose");
const schema=mongoose.Schema;
const data_model=new schema({
    from:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    to:{
        type:mongoose.Schema.ObjectId,
        ref:'driver'
    },
    msg:{
        type:String,
        required:[true,"fill the msg"]
    },
    read:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Notify=mongoose.model("notify",data_model);
module.exports=Notify
const mongoose=require('mongoose');
const schema=mongoose.Schema;

const data_model=new schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    number:{
        type:Number,
        required:true,
        unique:[true,"the number already exist"],
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:[true,'must enter the password']
    },
    verified:{
        type:Boolean,
        default:false
    },
    booking:[{
        type:mongoose.Schema.ObjectId,
        ref:'order'
    }]
},{timestamps:true})
const user=mongoose.model('user',data_model);
module.exports=user;
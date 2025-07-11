const mongoose = require("mongoose");

const connect=()=>{
mongoose.connect(process.env.URL)
.then(res=>console.log("db connected"))
.catch(err=>console.log(`error occured : ${err}`));
};
module.exports=connect;
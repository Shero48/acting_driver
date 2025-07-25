const Driver=require('../model/driver');
const bcrypt=require('bcrypt');
const gen_token=require('../middleware/gen_token');

const register=async(req,res)=>{
    try{
        const {name,password,email,number,lic_num,id_num,loc,price}=req.body;
        const exist_user=await Driver.aggregate([{$match:{
            $or:[
                {email:email},
                {number:number}
            ]
        }}]);
        if(exist_user.length>0){
            return res.status(400).json("user already exist");
        }
        const salt=await bcrypt.genSalt(10);
        const hash_pass=await bcrypt.hash(password,salt);
        const create_user=await Driver.create({
            name:name,
            password:hash_pass,
            email:email,
            number:number,
            document:{
                lic_num:lic_num,
                id_num:id_num
            },
            loc:loc,
            price:price
        })
        return res.status(201).json("user register successfully");
    }catch(err){
        console.log(err);
        return res.status(500).json("internal server err")
    }
}
const get_driver=async(req,res)=>{
    try{
        const {loc,gender}=req.body;
        let p_up=loc.toLowerCase();
        const data=await Driver.aggregate([
            {$match:{
                $and:[
                {gender:{$eq:gender}},
                {loc:{$eq:p_up}}
            ],
            }},
            {$sort:{price:1}},
            {$project:{password:0}}
        ])
        return res.status(200).json({
            msg:"list of drivers",
            data
        })
    }catch(err){
        console.log(err);
        return res.status(500).json("internal server err");
    }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const exist_user=await Driver.findOne({
            $or:[
                {email:typeof email=='string'?email:null},
                {number:typeof email=='number'?email:null}
            ]
        });
        console.log(exist_user,req.body,email)
        if(!exist_user){
            return res.status(404).json("user doesn't exist")
        };
        const match_pass=await bcrypt.compare(password,exist_user.password);
        if(!match_pass){
            return res.status(300).json("invalid data");
        }
        let token=await gen_token(res,exist_user._id);
        res.cookie('token',token,{maxAge:10*24*60*60})
        return res.status(200).json("user logined successfully");
    }catch(err){
        console.log(`err occuered ${err}`);
        return res.status(500).json("internal server error")
    }
}
const my_profile=async(req,res)=>{
    try{
        console.log(req.user)
        const fetch_user=await Driver.findOne({_id:req.user}).select('-password');
        if(!fetch_user){
            return res.status(404).json("user not found");
        }
        res.status(200).json({
            msg:"user find successfully",
            fetch_user
        })
    }catch(err){
        console.log(`err occured : ${err}`);
        res.status(500).json("internal server error");
    }
}
const view_profile=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await Driver.findOne({_id:id}).select('-password');
        if(!user){
            return res.status(404).json("user not found");
        }
        res.status(200).json({
            msg:'user find successfully',
            user
        })
    }catch(err){
        console.log(`err occured on view profile : ${err}`);
        res.status(500).json("internal server err");
    }
}
const logout=async(req,res)=>{
    try{
        res.cookie("token","",{maxAge:Date.now()}).json("logout successfully")
    }
    catch(err){
        console.log(`logout err occured : ${err}`);
        res.status(500).json("internal server err");
    }
}
const rate=async(req,res)=>{
    try{
        const id=req.user;
        const dri_id=req.params;
        const {rat,cmd}=req.body;
        const data=await Driver.findById(dri_id.id);
        const value= data.rating.filter(val=>val.user==id)
        console.log(data,value," : value");
        data.rating.push({
            user:id,
            rat:value.length?value[0].rat:rat,
            Comment:cmd
        })
        await data.save();
        console.log(req.body);
        return res.status(200).json("rating successfully");
    }catch(err){
        console.log(err);
        res.status(500).json('something went wrong');
    }
}
module.exports={register,login,my_profile,view_profile,logout,get_driver,rate}
const jwt=require('jsonwebtoken');

const gen_token=async(res,id)=>{
    try{
        if(!id){
            return res.status(500).json("invalid data");
        }
        const token=jwt.sign({id},process.env.JWT_KEY,{expiresIn:'1d'});
        return token;
    }
    catch(err){
        return res.status(500).json("internal server err");
    }
}
module.exports=gen_token;
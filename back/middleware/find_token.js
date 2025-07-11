const jwt=require('jsonwebtoken');

const find_user=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        console.log(token,req.cookies)
        if(!token){
            console.log("go to login");
            return res.status(404).json("go to login")
        }
        const user=jwt.verify(token,process.env.JWT_KEY);
        req.user=user.id;
        next();
    }catch(err){
        console.log(`err occured on find_token : ${err}`);
        res.status(500).json("internal server error")
    }
}
module.exports=find_user
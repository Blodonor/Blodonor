const jwt =require('jsonwebtoken')
const mongoose= require('mongoose')
const {JWT_SERECTKEY}=require('../../config/keys')
const Admin = mongoose.model("Admin")
module.exports=(req,res,next)=>{
    const {authorization} =req.headers
    if(!authorization){
        return res.status(401).json({error:"you must be logged in"})
    }
    const token=authorization.replace("Bearer1 ","")
    jwt.verify(token,JWT_SERECTKEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you  must be logged in"})
        }
        const {_id}=payload
        Admin.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })
        
    })
}
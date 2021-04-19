const express= require('express')
const mongoose = require('mongoose')
const router=express.Router()
const Post=mongoose.model('Post')
router.post('/post',(req,res)=>{
    const {name,hospital,bloodgroup,pic}=req.body
    if(!name || !hospital || !bloodgroup || !pic){
        return res.status(422).json({error:"you need to enter all the fields"})
    }
    const post=new Post({
        name,
        hospital,
        bloodgroup,
        pic,
        time:new Date().getTime()
    })
    post.save()
    .then(results=>{
        res.json({post:results})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports=router
const express= require('express')
const mongoose = require('mongoose')
const router=express.Router()
const Posts=mongoose.model('Posts')
const requireAdmin = require('../middleware/requireadmin')
const requireLogin = require('../middleware/requirelogin')
router.get('/adminposts',(req,res)=>{
    Posts.find()
    .sort('-createdAt')
    .then(Posts=>{
        res.json({Posts})
    })
    .catch(err=>{
        res.json(err)
    })
})


router.post('/requestform',(req,res)=>{
    const {patient_name,guardian_name,hospital,address,bloodgroup,phone,pic}=req.body
    if(!patient_name || !guardian_name || !address || !hospital || !bloodgroup || !pic || !phone){
        return res.status(422).json({error:"you need to enter all the fields"})
    }
    const post=new Posts({
        patient_name,
        guardian_name,
        phone,
        hospital,
        address,
        bloodgroup,
        photo:pic,
        time:new Date().getTime(),
        
    })
    post.save()
    .then(results=>{
        res.json({post:results})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.delete('/deletpost/:postId',(req,res)=>{
    Posts.findById({_id:req.params.postId})
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
            post.remove()
            .then(result=>{
                res.json(result)
            })
            .catch(err=>{
                console.log(err)
            })
    })
})
module.exports=router
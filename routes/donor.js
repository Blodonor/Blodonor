const express= require('express')
const mongoose = require('mongoose')
const router=express.Router()
const Donor=mongoose.model('Donor')
const requireAdmin = require('../middleware/requireadmin')
const requireLogin = require('../middleware/requirelogin')
router.get('/donorslist',(req,res)=>{
    Donor.find()
    .sort('-createdAt')
    .then(Posts=>{
        res.json({Posts})
    })
    .catch(err=>{
        res.json(err)
    })
})
router.post('/bloodonationform',(req,res)=>{
    const {name,email,address,bloodgroup,phone,pic}=req.body
    if(!email || !name || !address|| !bloodgroup || !pic || !phone){
        return res.status(422).json({error:"you need to enter all the fields"})
    }
    const donor=new Donor({
        email,
        name,
        phone,
        address,
        bloodgroup,
        photo:pic,
        time:new Date().getTime()
    })
    donor.save()
    .then(results=>{
        res.json({donor:results})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.delete('/deletepost/:postId',(req,res)=>{
    Donor.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
            Donor.remove()
            .then(result=>{
                res.json(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    )
})
module.exports=router
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

router.post('/bloodonationform',requireLogin,(req,res)=>{
    const {name,email,address,age,bloodgroup,phone,pic}=req.body
    if(!email || !name || !address|| !bloodgroup || !pic || !phone || !age){
        return res.status(422).json({error:"you need to enter all the fields"})
    }
    Donor.findOne({email:email})
    .then(savedUser=>{
        if(savedUser){
            return res.status(422).json({error:"You are Already a Donor"})
        }
    const donor=new Donor({
        email,
        name,
        age,
        phone,
        address,
        bloodgroup,
        photo:pic,
        time:new Date().getTime(),
        postedBy:req.user
    })
    donor.save()
    .then(results=>{
        res.json({results})
    })
    .catch(err=>{
        console.log(err)
    })
})
})
router.get('/mypost',requireLogin,(req,res)=>{
    Donor.findOne({postedBy:req.user._id})
    .populate("postedBy","name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.put('/litersdonated',(req,res)=>{
    //console.log(req.body.postId)
    Donor.findByIdAndUpdate(req.body.postId,{
        $push:{liters:liters+100}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})
router.delete('/deletepost/:postId',(req,res)=>{
    Donor.findOne({_id:req.params.postId})
    .exec((err,donor)=>{
        if(err || !donor){
            return res.status(422).json({error:err})
        }
            donor.remove()
            .then(result=>{
                res.json(result)
            })
            .catch(err=>{
                console.log(err)
            })
    })
})
module.exports=router
const mongoose = require('mongoose')
const donorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.model("Donor",donorSchema)
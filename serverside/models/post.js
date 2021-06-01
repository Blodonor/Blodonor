const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    patient_name:{
        type:String,
        required:true
    },
    guardian_name:{
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
    hospital:{
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

mongoose.model("Posts",postSchema)
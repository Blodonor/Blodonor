const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    hospital:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.model("Post",postSchema)
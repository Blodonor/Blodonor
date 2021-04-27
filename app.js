const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')
const PORT= 5000

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })
mongoose.connect(MONGOURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected',()=>{
    console.log("mongo yeah")
})

mongoose.connection.on('error',()=>{
    console.log("mongo error",err)
})
mongoose.set('useFindAndModify', false);

const countMiddleware=(req,res,next)=>{
    console.log("Middleware executed")
    next()
}

require('./models/user')
require('./models/post')
require('./models/admin')
require('./models/donor')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/donor'))
app.use(require('./routes/post'))
app.use(require('./routes/admins'))

app.listen(PORT,()=>{
    console.log("listenig at server",PORT)
})
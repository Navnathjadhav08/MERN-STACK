const express = require("express")

const app = express()

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/student")
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err))

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("running on localhost 8000")
})

const route = require('./route')
app.use('/',route)

app.listen(8000,()=>{console.log("running on localhost  8000");})
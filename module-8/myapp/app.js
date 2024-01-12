const express= require('express');

const app=express()

const route = require

app.get('/',(req,res)=>{
    res.send("Server is running on localhost 8000")
})

app.listen(8000,()=>{
    console.log("Server runs on localhost 8000");
})
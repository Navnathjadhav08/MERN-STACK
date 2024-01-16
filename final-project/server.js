const express =  require('express')
const colors = require('colors')
const dotenv = require('dotenv')

//configure env
dotenv.config();


//rest object
const app=express()

//rest api
app.get('/', (req,res) => {
    res.send(
        "<h1>Welcome to app</h1>"
    );
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});

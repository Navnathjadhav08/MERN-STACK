//initialyse project

//>npm init -y

//download express module

//>yarn add express-save

//import express module

let express = require('express')

//create rest object

let app = express()

//import my_fun

let my_fun = require('./config/my_fun')

//create rest api

app.get("/", (req, res) => {

let uname = req.query.uname

let upwd = req.query.upwd

res.send(my_fun(uname, upwd))

})

//assign port no

app.listen(8080)

console.log("Server listening port no 8080")

//url:- http://localhost:8080?uname=admin&upwd=admin
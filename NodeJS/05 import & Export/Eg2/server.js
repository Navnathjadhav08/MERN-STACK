let express = require('express')
let app = express()
let obj = require('./config/db_connection')

app.get("/oracle", (req, res) => {

    res.json(obj.oracle())
    
    })
    
app.get("/mysql", (req, res) => {
    
    res.send(obj.mysql())
    
    })
    
app.get("/mongodb", (req, res) => {
    
    res.send(obj.mongodb())
    
    })
    
app.get("/mssql", (req, res) => {
    
    res.send(obj.mssql())
    
    })
    
    //assign port no

app.listen(8080)
console.log("server is running")
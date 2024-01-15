const express= require('express')
const studcontroller = require('./controller')
const route = express.Router()

route.post('/register',studcontroller.adduser)

module.exports=route
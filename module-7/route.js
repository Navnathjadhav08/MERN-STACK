const express= require('express')
const studcontroller = require('./controller')
const route = express.Router()

route.post('/register',studcontroller.adduser)
route.get('/finddata',studcontroller.getdata)
route.put('/update/:fname',studcontroller.updatedata1)
module.exports=route
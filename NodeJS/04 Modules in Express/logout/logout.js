//import express module
let express = require('express')
//create router instance
let router = express.Router()
//create get request
router.get("/", (req, res) => {
    res.json({ 'message': 'Welcome to logout module' })
})
//create one more get request
//URL :- http://localhost:8080/logout/logout/?uname=admin&upwd=admin
router.get("/logout", (req, res) => {
    //here we are reading get parameters using query
    let uname = req.query.uname
    let upwd = req.query.upwd
    if (uname === 'admin' && upwd === 'admin')
        res.send({ 'logout': 'success' })
    else
        res.send({ 'logout': 'failed' })
})
//export router
module.exports = router

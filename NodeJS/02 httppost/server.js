//import modules
let http = require('http')
let qs = require('querystring')
//create server
let server = http.createServer((req, res) => {
    //set MIME type
    res.writeHead(200, { 'content-type': 'text/html' })
    let body = ""
    //listen to post parmateres
    req.on("data", (result) => {
        body = body + result
    })
    //end callback to node engine
    req.on('end', () => {
        let obj = qs.parse(body)
        let uname = obj.uname
        let upwd = obj.upwd
        if (uname === 'admin' && upwd === 'admin')
            res.write("<h1 style = 'color:green'>Login success</h1> ")
        else
            res.write("<h1 style = 'color:red'>Login failed</h1>")
        res.end()
    })
})
//assign port number
server.listen(8080)
console.log("Server listening port no 8080")
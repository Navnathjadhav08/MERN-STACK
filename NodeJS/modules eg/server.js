//import http model
let http = require('http')
let server = http.createServer((req,res) => {
    //set MIME type
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>Welcome to my linkedin</h1>")
    res.end()
})
// assign port no

server.listen(9090)
console.log('server listening at port 9090')


const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url);
    res.end(res.statusCode+': you called me with'+req.url);
}).listen(2000);
console.log("Listening");
const http = require('http');
const url = require('url');
const axios = require('axios');

http.createServer((req, res)=>{
    const pathname=url.parse(req.url,true);
    switch(pathname){
        case '/':
            const index = fs.createReadStream('./index.html');
            res.writeHead(200,{Content-Type: text/html});
            index.pipe(res);
        case '/getWeather':
            
            break;
    }
}).listen(2000);
console.log("Listening");
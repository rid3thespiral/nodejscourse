const request = require('request');

request('http://localhost:2000/',(err,resp,body)=>{
    console.log(body);
})


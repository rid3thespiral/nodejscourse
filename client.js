const request = require('request');

request('http://localhost:2000/getWeather',(err,resp,body)=>{
    console.log(body);
})


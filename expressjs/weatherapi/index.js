const express = require('express');
const app = express();

//return an instance of http.Server
app.listen(3000);
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send({name:'Hidran',lastname:'Ole'});
});

//placeholders parameters
app.get('/getWeather/:zip([0-9]+)',(req,res)=>{
    res.send(req.params.zip);
});

//placeholders city
app.get('/getWeather/:city([a-zA-Z]+)',(req,res)=>{
    res.send(req.params.city);
});


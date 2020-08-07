const API_KEY = '4d09dbc190bafd4cbb89d3135ca6a2f8';
const WEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?appid='+API_KEY+'&units=metric&q=';
const https = require('https');

try{
const req = https.get(WEATHERURL+'TORINO,IT', resp => {
    let response = '';
    resp.on('data', chunck => {
        response += chunck;
    });
    resp.on('end', ()=>{
        try{
        let output = '';
        const weatherObj = JSON.parse(response);
        output = 'The weather is ';
        console.log(output+weatherObj.weather[0].description);
        } catch(e) {
            console.log(e.message);
        }
    });
})
}
catch {
    console.log('errore');
}
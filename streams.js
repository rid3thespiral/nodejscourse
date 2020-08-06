const fs = require('fs');

const read = fs.createReadStream(__dirname + '/sample.txt');
const write = fs.createWriteStream(__dirname + '/destinationText.txt');

//the sample text is loaded into the readStream
read.on('ready', ()=>{
    console.log('Ready to read');
})

//if there is an error
read.on('error', ()=>{
    console.error('There is an error');
})

//connect data from sources at the same speed
read.pipe(write);


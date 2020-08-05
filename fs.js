//request filesystem 
const fs = require('fs');

const config = {
    host: 'localhost',
    port: '8000',
    protocol: 'https'
}

// async function
fs.writeFile('config.json', JSON.stringify(config), {encoding: 'utf8'}, (error) => {
    if(error){
        console.error(error);
    } else {
        console.log('File created');
    }
});

//get executed before writeFile 
console.log('After file creation 1');

fs.writeFileSync('config2.json', JSON.stringify(config));

//get executed before writeFileSync
console.log('After file creation 2');

//in this example, it get executed we see 
//that JS executes instruction line by line

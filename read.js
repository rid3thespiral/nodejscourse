//require filesystem
const fs = require('fs');

//read async files from the folder 
fs.readdir('.', 'utf8', (error, arrFiles)=>{
    if(error){
        console.error(error);
        return;
    }
    for(let f of arrFiles){
        if(f == 'config.json'){
            fs.readFile(f, 'utf8', (error,data)=>{
                if(error){
                    console.error("Error reading file");
                    return;
                } else{
                    console.log(data);
                }
            })
        }
        console.log(f);
    }
})

fs.stat('config.json', (error, result)=>{
    if(error){
        console.error(error);
    }else{
    console.log(result);
    }
})
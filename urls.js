const fs = require('fs');
const axios = require('axios');
// import url from 'node:url';



function CapToNewFile(newFile, data){
    fs.writeFile(newFile, data, 'utf8', (err) => {
         if(err){
            console.log(`Could not write to ${path}, error:${err}`)
            process.exit(1);
         }
        console.log(`Wrote on ${newFile}`)    
    });
};

async function captureURLDoc(newfile, url){
    try{
        let res = await axios.get(url);
        // console.log(res.data);
        CapToNewFile(newfile, res.data)
    } catch(err){
        console.log(`could not fetch ${url}`)
    }
}

async function readFileAndCapWebToNewFile(path){
    let lines;
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(`there was error reading a file : ${path}, error:${err}`);
            process.exit(1);
        }
        
        lines =data.toString().split('\n')
        for(let line of lines){
            let newURL = new URL(line)
            let newFile = `${newURL.hostname}`;
            captureURLDoc(newFile,newURL);
            // bonus use Promise.all()?
        }
    });  
};


let path = process.argv[2]
readFileAndCapWebToNewFile(path);


const fs=require('fs')
fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data);
    
})
fs.unlink('delete.txt',(err)=>{
    if(err) throw err
    console.log('file deleted');
    
})
fs.writeFile('output.txt',"HEllo woeld",(err)=>{
    if(err) throw err
    console.log("created");
    //trial 1
})
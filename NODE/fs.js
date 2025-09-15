const fs=require('fs')
// fs.readFile('hello.txt','utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data);
    
// })
fs.unlink('delete.txt',(err)=>{
    if(err) throw err
    console.log('file deleted');
    
})
fs.writeFile('output.txt',"HEllo woeld",(err)=>{
    if(err) throw err
    console.log("created");
    //trial 1
})

//! check file exist or not 

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'example.txt');

// if (fs.existsSync(filePath)) {
//     console.log('File exists!');
// } else {
//     console.log('File does not exist!');
// }



//!Write Current Time into a File

// const time = new Date().toLocaleString(); // e.g., "15/09/2025, 20:05:30"
// fs.writeFile('time.txt', time, (err) => {
//     if (err) console.error('Error writing file:', err);
//     else console.log('Time written successfully!');
// });


//! or

// const time = new Date().toLocaleString() + '\n';
// fs.appendFile('time.txt', time, (err) => {
//     if (err) console.error('Error appending file:', err);
//     else console.log('Time appended successfully!');
// });

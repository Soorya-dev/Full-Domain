// const express=require('express')
// const app=express()
// const port=4000;
// app.get('/',(req,res)=>{
//     const num=req.query.num
//     console.log(num)
//     res.send("hello")
// })
// app.listen(port,()=>{
//     console.log("gfhctdy"+port);
// })





// var http=require('http')
// const port=3000
// const server=http.createServer((req,res)=>{
//     res.end("hello")
// })
// server.listen(port,()=>console.log("running at"+port))








// const express=require('express')
// const app=express()
// const port=8000;
// app.get('/',(req,res)=>{
//     const num=req.query.num
//     console.log(num);
//     res.send('hello')
// })
// app.listen(port,()=>{
//     console.log("running"+port);
// })




// const express=require('express')
// const app=express()
// const port=7000;
// app.get('/',(req,res)=>{
//     res.end("hello");
// })
// app.get('/home',(req,res)=>{
//     res.send("home page")
// })
// app.listen(port,()=>{
//     console.log("server listening to "+port);
// })













// os module
// const os = require('os')
// console.log(os.platform());

// var promise=new Promise((res,rej)=>{
//     count =true;
//     if(count){
//     res("hello")}
//     else{
//         rej('hi')
//     }

// })
// console.log(promise);

// function sum(a = 'hello' b = 'hey'){
//     console.log(a+'  '+b);
// }

// sum();





// let array=[3]
// function squaren(n){
//     n*n
// }
// newArray=array.map(squaren)
// console.log(newArray)





// function isPaliandrome(str){
//     const lower=str.toLowerCase().replace(/[^a-z0-9]/g,'')
//    return str===lower.split('').reverse().join('')
// }
// console.log(isPaliandrome('Ara'))



// app.listen(port,()=>{
//     console.log(`server listening to ${port}`)
// })

// let str=("hello")




// let nums = [3,2,1,1,2,2,4,5]
// let frequency={}

// for(let num of nums){
//     if(frequency[num]){
//         frequency[num]+=1
//     }else{
//         frequency[num]=1
//     }

// }
// console.log(frequency);

// let count=0
// let max;
// for(let num in frequency){
//     if(frequency[num]>count){
//         count=frequency[num]
//         max=num
//     }
// }
// console.log(max);

// let maxA
// let maxCount=0
// for(let i=0;i<nums.length;i++){
//     let countA=0
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j]){
//             countA++

//         }
//     }
//     if(countA>maxCount){
//         maxCount=countA
//         maxA=nums[i]
//     }
// }
// console.log(maxA);





// let express = require("express");
// let app = express();
// const port = 3300;

// app.get("/", (req, res) => {
//   let num1 = parseInt(req.query.num1);
//   let num2 = parseInt(req.query.num2);

//   let result = num1 + num2;
//   console.log(result);
//   res.redirect(`/home/${result}`);
// });

// app.get("/home/:sum", (req, res) => {
//   res.send(`This is home. The sum is: ${req.params.sum}`);
// });

// app.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });






// const express=require('express')
// const app=express()
// const port=3000
// app.get('/',(req,res)=>{
//     let num1=parseInt(req.query.num1)
//     let num2=parseInt(req.query.num2)
//     result=num1+num2
//     console.log(result);
//     res.send(`the sum of numbers are ${result}`)
// })
// app.listen(port,()=>{console.log(`server running on port`)})










// var http=require('http')
// const port=3000
// let server=http.createServer((req,res)=>{
//     res.end('hello mone')
// })
// server.listen(port,()=>{console.log('running')})

// const express=require('express')
// let app=express()
// const port=3000
// app.get('/',(req,res)=>{
//     let num1=parseInt(req.query.num1)
    
    
//   let type=(num1%2==0)?true:false
//   res.send(type)
// })
// app.listen(port,()=>{
//     console.log('server running')
// })

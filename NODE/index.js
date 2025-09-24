// const express=require('express')
// const app=express()
// const port=4000;
// app.get('/',(req,res)=>{
//     const num=req.query.num
//     console.log(num)
//     res.send("hello")
// })
// app.listen(port,()=>{
//     console.log("gfhfgfdgfctdy"+port);
// })



//!-------------------------------------------------------------------------------------------

// var http=require('http')
// const port=3000
// const server=http.createServer((req,res)=>{
//     res.end("hello")
// })
// server.listen(port,()=>console.log("running at"+port))




//!-------------------------------------------------------------------------------------------



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


//!-------------------------------------------------------------------------------------------

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










//!-------------------------------------------------------------------------------------------


// os module
// const os = require('os')
// console.log(os.platform());




//!-------------------------------------------------------------------------------------------


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



//!-------------------------------------------------------------------------------------------


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


//!-------------------------------------------------------------------------------------------

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







//!----------------------MiddleWear---------------------------------------------------------------------

//? log the mrthord and url












//!-------------------------------------------------------------------------------------------

//? Middlewear to log the names of query params

// const express =require('express')
// const app=express()

// function logParams(req, res, next) {
//     // console.log("Path Params:", Object.keys(req.params));
//     // console.log("Query Params:", Object.keys(req.query));
//     let params=Object.keys(req.query)
//     console.log("params are",params);
    
//     next(); // move to next handler
// }
// app.use((req, res, next) => {
//     console.log('Middleware executed');
//     next();
// });
// app.get('/',logParams,(req,res)=>{
//     res.send('hello from server')
// })
// app.listen(3001,()=>{
//     console.log('Server is runnighng on http://localhost:3001');
    
// })






//!-------------------------------------------------------------------------------------------

//?router-level middleware

// const express = require('express');
// const app = express();

// // Create a router for user routes
// const userRouter = express.Router();

// // Router-level middleware (only for /user routes)
// userRouter.use((req, res, next) => {
//   console.log('User middleware executed');
//   next();
// });

// // Routes inside the router
// userRouter.get('/profile', (req, res) => {
//   res.send('User Profile');
// });

// userRouter.get('/settings', (req, res) => {
//   res.send('User Settings');
// });

// // Mount the router at /user
// app.use('/user', userRouter);

// // Admin route (no user middleware here)
// app.get('/admin/dashboard', (req, res) => {
//   res.send('Admin Dashboard');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));





//!-------------------------------------------------------------------------------------------
//  const express=require('express');
//  const port=3000
// const app=express()
// function validateNumber(req,res,next){
//     if(typeof(Number(req.query.num))==Number){
//         return "this is a number"
//     }
//         next()
// }

// app.get('/',validateNumber,(req,res)=>{
//     let num=(req.query.num)
//     console.log(num);
    
//     res.send(num)
// })
// app.listen(3000)







//!-------------------------------------------------------------------------------------------












//!-------------------------------------------------------------------------------------------
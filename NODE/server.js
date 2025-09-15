
// const http=require ('http')
// const server=http.createServer((req,res)=>{
//     res.write("hello from node")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log('Server is running on http://localhost:3000');
    
// })



const express=require('express')
const app=express()
const PORT=3000
const fs=require('fs')
app.use((req,res,next)=>{
    if(req.method=='GET'){
        return res.status(400).send('get methord not allowed')
    }else{
        let log=new Date().toISOString() + req.method
        fs.appendFile('Data.txt',log,(err)=>{
            if(err){
                console.log("error found",err);
                
            }
        })
        next()
    }
    
})



app.get('/users',(req,res)=>{
    res.send("hello from users")
})
app.post('/form',(req,res)=>{
    res.send("hello from post form")
})


app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
    
})


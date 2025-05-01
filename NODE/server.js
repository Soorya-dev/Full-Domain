// const http=require ('http')
// const server=http.createServer((req,res)=>{
//     res.write("hello from node")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log('Server is running on http://localhost:3000');
    
// })

//&'"'-&&"££_
// change may day

// const express =require('express')
// const app=express()
// app.get('/',(req,res)=>{
//     res.send('hello from server')
// })
// app.listen(3001,()=>{
//     console.log('Server is runnighng on http://localhost:3001');
    
// })

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1 + num2;
    res.redirect(`/result?sum=${sum}`);
})
app.get('/result',(req,res)=>{
    const sum = req.query.sum;
    res.send(`The result is ${sum}`);
})
app.listen(3002, () => {
    console.log('Server running at http://localhost:3002')
})

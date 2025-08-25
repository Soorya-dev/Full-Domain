// const express = require('express')
// const app = express()
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// app.get('/users',(req,res)=>{
//     res.send('this is get request to fetvh users')
// })

// app.post('/createUser',(req,res)=>{
//     res.send('this is to create new users')
// })

const express = require('express')
const app = express()
const PORT = 3443

app.listen(PORT, () => {
  console.log(`server listening to ${PORT}`)
})

app.get('/home', (req, res) => {
  let num1 = parseInt(req.query.num1)
  let num2 = parseInt(req.query.num2)

  let result = num1 + num2
  console.log("Result:", result);
  res.redirect(`/home/${result}`)

})
app.get('/home/:sum',(req,res)=>{
 res.send({ sum: req.params.sum })
})


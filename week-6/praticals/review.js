var fs=require('fs')
let date=new Date().toString()
fs.writeFile('./date',date,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file created')
    }
})
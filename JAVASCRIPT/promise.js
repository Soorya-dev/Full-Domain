let count=1
let promise=new Promise((res,rej)=>{
   setTimeout(()=>{
       if(count){
    res('resolved')
    }else{
        rej('rejected')
    } 
   },2000)
   
})
async function aFunction(){
   let  result= await promise
   console.log(result)
    console.log('hello')
}
aFunction()
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


//!promise----------------------->
// let mypromise=new Promise((resolve,reject)=>{
//     if(age>=18)
//     {
//         resolve("you are eligible to enter")
//     }
//     else{
//         reject("you are not eligible to enter")
//     }
      
//   })
  
//   mypromise.then((result)=>{
//       console.log(result)
//   })
//   .catch((error)=>{
//       console.log(error)
//   })




//!  //promise using async await------------>

//   const promise=new Promise((resolve,reject)=>{
//     if(age>=18)
//     {
//         resolve("you are eleigible to enter")
//     }
//     else{
//         reject("you are not eligible to enter")
//     }
// })

// async function checkage(){
//     try{
//         const result=await promise;
//         console.log(result)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
    
// }
// checkage()



//!   //promise all------------------->
//!Waits for all promises to resolve. If any one fails, it rejects.
// {

//     const promise1=new Promise((resolve,reject)=>resolve("promise 1 resolved"))
//     const promise2=new Promise((resolve,reject)=>resolve("promise 2 resolved"))
//     const promise3=new Promise((resolve,reject)=>resolve("promise 3 resolved"))


// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//         console.log("all promise result resolved")
//         console.log(result)
// })
// .catch((error)=>{
//         console.log("one of the promise rejecter")
//         console.log(error)
// })
// }


//!promise all setteled------------------>(Waits for all promises to settle (resolve or reject) and returns the result of each)
// {
// const promise1=new Promise((resolve,reject)=>resolve("promise 1 resolved"))
// const promise2=new Promise((resolve,reject)=>resolve("promise 2 resolved"))
// const promise3=new Promise((resolve,reject)=>reject("promise 3 rejected"))


// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result)
// })

// }

//!------------------------------promise.any
//!Returns the first fulfilled promise. Ignores rejections unless all fail.
// {
// const promise1=new Promise((resolve,reject)=>resolve("promise 1 resolved"))
// const promise2=new Promise((resolve,reject)=>resolve("promise 2 resolved"))
// const promise3=new Promise((resolve,reject)=>reject("promise 3 rejected"))

// Promise.any([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// })
// }
//!----------------------------------promise.race (Returns the first settled promise (resolved or rejected).)
// {
//     const promise1=new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 1 resolved"),3000))
//     const promise2=new Promise((resolve,reject)=>setTimeout(()=>reject("promise 2 rejected"),5000))
//     const promise3=new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 3 resolved"),4000))
    
    
//     Promise.race([promise1,promise2,promise3])
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// }


//!------------------------------------primise using delay>
// {

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              if(age>=18)
//           {
//               resolve("you are eligible to enter")
//           }
//           else{
//               reject("you are not eligible")
//           } 
            
            
//         },5000)
           
           
//        })
       
//        promise.then((result)=>{
           
//            console.log(result)
//        })
//        .catch((error)=>{
//            console.log(error)
//        })
    
// }
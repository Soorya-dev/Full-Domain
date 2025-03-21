
// const count=true;
// let countValue= new Promise(function(resolve,reject){
//     if(count) {
//         resolve("resolved")
// }
// else{
//     reject("rejected")
// }
// })
// console.log(countValue);

// const count=true;
// let promise = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve('function resolved')
//     },3000)
// })
// async function asyncFunction(){
//     let result=await promise
//     console.log(promise);
// console.log("hello");
// }
// asyncFunction()

















// const count=true;
// let countValue= new Promise(function(resolve,reject){
//     if(count) {
//         resolve("resolved")
// }
// else{
//     reject("rejected")
// }
// })
// console.log(countValue);

// const count=true;
// let promise = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve('function resolved')
//     },3000)
// })
// async function asyncFunction(){
//     let result=await promise
//     console.log(promise);
// console.log("hello");
// }
// asyncFunction()






// let p1=new Promise((res,rej)=>{
 
//     res('failed');
// })
// let p2=new Promise((res,rej)=>{
    
//     rej('success1');
// })
// let p3=new Promise((res,rej)=>{
    
//     res('success3');
// })
// let result=Promise.all([p1,p2,p3]);
// result.then((x)=>{
//     console.log(x);
// }).catch((err)=>{
//     console.log(err);
// })





// async function c1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("this is c1")
//             resolve()
//         },1000)
//     })
//  }
 
//  async function c2(){
//      console.log("its c2")
//  }
//  async function data(){
//      try{
//           await c1()
//      await c2()
    
//          console.log("all added")
//      }catch(err) {
//          console.log(err)
//      }
//  }
//  // console.log(data())
//  data()
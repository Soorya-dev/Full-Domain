//! A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function.

//* This is a key feature of callbacks: they allow to run code asynchronously, ensuring that certain actions only happen after others have finished.



function greet(name,callback){
    console.log("hello " + name);
    callback()
}
function sayBye() {
    console.log("Goodbye!");

}
greet("soorya",sayBye)

//! Asynchronous Callback
//Callbacks are often used in asynchronous functions, such as when reading a file or making a network request.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data from an API";
        callback(data);  // Callback is executed when the data is ready
    }, 1000);  // Simulate async operation
}

function processData(data) {
    console.log("Data received:", data);
}

fetchData(processData);

// Output (after 1 second):
// Data received: Some data from an API


//! Callback hell, often referred to as Pyramid of Doom, describes a situation in JavaScript where multiple nested callbacks become difficult to manage, leading to unreadable and unmaintainable code. 
//! It often arises when performing multiple asynchronous operations that depend on the completion of previous operations.
//! The code starts to take on a pyramidal shape due to the nesting.



callAsync1(function(){
    callAsync2(function(){
        callAsync3(function(){
            callAsync4(function(){
                callAsync5(function(){

                })
            })
        })
    })
})

//! Strategies to avoid callback hell

//* promise chaining

callAsync1()

.then(()=>callAsync2())
.then(()=>callAsync3())
.then(()=>callAsync4())
.then(()=>callAsync5())
.catch((err)=>console.error(err));

//* async/await

async function asyncCall(){
    try {
        await callAsync1()
        await callAsync2()
        await callAsync3()
        await callAsync4()
        await callAsync5()
    } catch (error) {
        console.log(error);
    }
}
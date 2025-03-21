//! A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function.

//* This is a key feature of callbacks: they allow to run code asynchronously, ensuring that certain actions only happen after others have finished.



//?callback function with argument
function finishHomework(sub){
    console.log(`Completed the ${sub} homework`);

}

function doHomework(sub, callback){
    console.log(`satrting the ${sub} homework`);
    setTimeout(() => {
      console.log(`finish the ${sub} homework`);
    }, 2000);
    callback(sub)
}

//doHomework('math', finishHomework)

//? callback function without aruguments

function  finishWork(){
    console.log("completed the work");
}

function doWork(wrk,callback){
    console.log(`starting the ${wrk} work`);
    setTimeout(() => {
        console.log(`finishes the ${wrk} work`);
        callback()
    }, 3000);
}

doWork('paint',finishWork)


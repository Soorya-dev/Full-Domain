
let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('promise resolved');
    }, 4000);
})

async function demo(num){
    console.log(num);
    let result = await promise
    console.log(result);
    console.log("Hello");
}

demo(25)
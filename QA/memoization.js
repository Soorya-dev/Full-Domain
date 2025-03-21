function memoiz(fn){
    let cache ={}
    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key]){
            console.log("called from");
            return cache[key];
        }else {
            const result = fn(...args)
            cache[key] = result
            console.log("called from");
            return result
        }
    }
}


function fn (n){
    console.log("called");
    for(let i = 1; i<=n; i++){
        if(i%2 === 0){
            return i
        }
    }
}

const demo = memoiz(fn)

console.log(demo(40));
console.log(demo(40));
console.log(demo(40));
console.log(demo(40));
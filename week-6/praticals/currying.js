//normal function
function add(a,b){
    return a+b
}
console.log(add(1,2))


//curried function
function cAdd(a){
    return function(b){
        return a+b
    }
}
console.log(cAdd(2)(3))
const { log } = require("console");

let arr = [2,4,5,6,7]

arr.splice(3,0,4,5)
console.log(arr);

arr.splice(4, 1)
console.log(arr);
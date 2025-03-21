const { log } = require("console");

const arr = [34, 23, 56, 7, 98,, 98, 54];

const res = arr.reduce((acc, curr)=>{
    return   curr>acc ? curr : acc
},-Infinity)

log(res);


const result = arr.filter((num)=>{
    return num%2 ===0
}).sort().reduce((acc,curr)=>{
    return curr>acc? curr: acc
}, -Infinity)

console.log(result)

let text;
for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  text += "Number: " + i + "<br>";
}

console.log(text);
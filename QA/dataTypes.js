
console.log(typeof(true))
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(Symbol))
console.log(typeof([]))
console.log(typeof({}))


console.log("A" + 3);
console.log("A" + 3 - 1);
console.log("A" + 3 - "B");
console.log("A" + 3 + 1);
console.log("10" - "1" + 3);

//console.log(isArray(arr));

function average(arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("asdfghj");
    }
    const sum = arr.reduce((acc, curr) => {
       return  acc + curr
    },0)
    const avg =  sum / arr.length
    return avg
}

let arr = [1,2,3,4]
console.log(Array.isArray(arr));
console.log(average(arr))

console.log(parseInt("123abc"));
console.log(parseInt("abc123"));
console.log(parseInt("12" + 2));
console.log(parseInt("12",2));
console.log(Number("123abc"));
console.log(Number("abc123"));
console.log(Number("12"+ 2));



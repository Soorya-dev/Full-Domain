//!shallow copy
//* Changes are affected on the original array only if the copied elements are objects (nested structures).
//If the array contains primitive values (like numbers, strings),
//  the original array is not affected because primitives are copied by value.

let a=[1,2,3,4,5]
let b=[...a]  // Creates a new array (shallow copy)
b.push(6)
console.log(a);
console.log(b);
//!Shallow Copy with Nested Objects

let c= [{name:'alice'},{age:20}]
let d=[...c];
d[0].name='soorya'
console.log(d);
console.log(c);//(original affected)


//!Deep copy

let e=[{ name: "Alice" }, { name: "Bob" }]
let deepCopy = JSON.parse(JSON.stringify(e));
deepCopy[0].name = "Charlie"; // Modify the nested object

console.log(deepCopy);
console.log(e);

// JSON.stringify(): Converts a JavaScript object or array into a JSON string.
// JSON.parse(): Converts a JSON string back into a JavaScript object or array.

// json.parse Since it's creating a new object from the 
// serialized data, there are no references to the original object or array.
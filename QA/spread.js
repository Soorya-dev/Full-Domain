//! The Spread Operator

//*The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.

//! Before the Spread Operator

const arr = [1,2,4]

const newArr = [5,6,8, arr[0], arr[1], arr[2]]
console.log(newArr);

//! After the Spread Operator

const newArr1 = [5, 6, ...arr]
console.log(newArr1);

//! Spread Operator Use Cases

//? Combining Arrays
 //* The spread operator provides an elegant solution for combining multiple arrays into a single array. By spreading each array's elements within a new array, we can concatenate them effortlessly.

 const arr1 = [1,2,3]
 const arr2 = [4,5,6]

 const merged = [...arr1, ...arr2]
 console.log(merged);


 //? Passing Arguments to Functions

 //* The spread operator simplifies the process of passing variable-length arguments to functions. Instead of specifying each argument individually, we can use the spread operator to unpack an array of values into function parameters.

 function sum(a,b,c){
    return a+b+c;
 }

 const nums = [1,2,3]
const result = sum(...nums)
console.log(result);

//? Copying Arrays

//* The spread operator offers a concise method for copying arrays, ensuring that modifications to the copied array do not affect the original. By spreading the original array's elements into a new array, we create a distinct copy.

const orginal = [1,2,3]
const copy = [...orginal]
console.log(copy);
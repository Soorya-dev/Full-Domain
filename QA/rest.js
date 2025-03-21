//! The Rest Operator

//* While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring. It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation.

//! Before the Rest Operator

const arr = [1, 2, 3, 4, 5];

const first = arr[0]; //? Extracting the first element
const rest = arr.slice(1); //? Collecting the rest of the elements

console.log("First element:", first); 
console.log("Rest of the elements:", rest); 

//! After the Rest Operator

const [first1, ...rest1] = [1, 2, 3, 4, 5];
console.log("First element:", first1); 
console.log("Rest of the elements:", rest1); 

//! Rest Operator Use Cases

//? Handling Variable-Length Function Arguments

//* The rest operator simplifies the handling of variable-length arguments in functions. It allows functions to accept an indefinite number of arguments without explicitly specifying each one.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("Sum:", sum(10, 20));

//? Array Destructuring

//* The rest operator is commonly used in array destructuring to capture remaining elements into a separate array variable.

const [first2, second, ...rest2] = [1, 2, 3, 4, 5];
console.log("First element:", first2); // First element: 1
console.log("Second element:", second); // Second element: 2
console.log("Rest of the elements:", rest2); // Rest of the elements: [3, 4, 5]
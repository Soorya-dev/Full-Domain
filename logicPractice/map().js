//!The .map() method is a built-in array method in JavaScript 
// !that creates a new array by applying a provided callback function to each element of the original array. 
// !It’s widely used for transforming data without mutating the original array.





//? Syntax: array.map(callback(element[, index[, array]])[, thisArg])
//* - callback: Function executed for each element
//* - element: Current element being processed
//* - index (optional): Index of the current element
//* - array (optional): The array .map() was called upon
//* - thisArg (optional): Value to use as 'this' in the callback
//* Returns: A new array with transformed //? Example 1: Double each number in an array


const numbers = [1, 2, 3, 4, 5];
//* Use .map() to create a new array with each number doubled
const doubled = numbers.map(num => num * 2);
//* doubled = [2, 4, 6, 8, 10]
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] //? Original array unchanged

//? Example 2: Add index to each element
const fruits = ['apple', 'banana', 'orange'];
//* Include index in transformation
const indexedFruits = fruits.map((fruit, idx) => `${idx + 1}. ${fruit}`);
//* indexedFruits = ["1. apple", "2. banana", "3. orange"]
console.log(indexedFruits);



//? Example 3: Extract property from array of objects

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
//* Extract names into a new array
const namesList = users.map(user => user.name);
//* namesList = ["Alice", "Bob", "Charlie"]
console.log(namesList);



//? Q1: Given an array of strings, create a new array with all strings in uppercase
const words = ['hello', 'world', 'javascript'];
//* Use .map() to transform each string to uppercase
const upperWords = words.map(word => word.toUpperCase());
//* upperWords = ["HELLO", "WORLD", "JAVASCRIPT"]
console.log(upperWords);



//? Q2: Add "-item" to each string in an array
const items = ['pen', 'book', 'laptop'];
//* Append "-item" to each element
const suffixedItems = items.map(item => `${item}-item`);
//* suffixedItems = ["pen-item", "book-item", "laptop-item"]
console.log(suffixedItems);


//? Q3: From an array of objects, create an array of messages based on a condition
const students = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 92 },
  { name: 'Tom', score: 78 }
];
//* Create messages: "Name passed" if score >= 80, else "Name failed"
const results = students.map(student => 
  `${student.name} ${student.score >= 80 ? 'passed' : 'failed'}`);
//* results = ["John passed", "Jane passed", "Tom failed"]
console.log(results);


//? Q4: Convert an array of numbers to an array of objects
const scores = [10, 20, 30];
//* Create objects with value and isHigh (true if > 15)
const scoreObjects = scores.map((score, idx) => ({
  id: idx + 1,
  value: score,
  isHigh: score > 15
}));
//* scoreObjects = [{id: 1, value: 10, isHigh: false}, {id: 2, value: 20, isHigh: true}, {id: 3, value: 30, isHigh: true}]
console.log(scoreObjects);



//? Q7: Extract and rename properties from an array of objects
const products = [
  { productName: 'Laptop', price: 1000 },
  { productName: 'Phone', price: 800 },
  { productName: 'Tablet', price: 600 }
];
//* Create array of objects with renamed keys
const renamedProducts = products.map(({ productName, price }) => ({
  name: productName,
  cost: price
}));
//* renamedProducts = [{name: "Laptop", cost: 1000}, {name: "Phone", cost: 800}, {name: "Tablet", cost: 600}]
console.log(renamedProducts);


//? Example: Chain .map() with other methods
const rawData = [1, -2, 3, -4, 5];
//* Filter positive numbers, double them, and format as strings
const processedData = rawData
  .filter(num => num > 0)
  .map(num => num * 2)
  .map(num => `Value: ${num}`);
//* processedData = ["Value: 2", "Value: 6", "Value: 10"]
console.log(processedData);
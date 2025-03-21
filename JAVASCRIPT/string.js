//* Remove a Character from String
let str = "hello world";
let newStr = str.replace("o", ""); // Removes first "o"
console.log(newStr); // "hell world"
//!------------------------------------------------------------------------------------------------------//
let strr = "hello world";
let newStrr = str.replaceAll("o", ""); // Removes all "o"
console.log(newStrr); // "hell wrld"
//!--------------------------------------------------------------------------------------------------------//
let strrr = "hello world";
let newStrrr =str.split("o").join(""); // Splits by "o" and joins back
console.log(newStrrr); // "hell wrld"
//!--------------------------------------------------------------------------------------------------------//
let strrrr = "hello";
let indexToRemove = 1; // Remove character at index 1 ('e')
let newStrrrr = str.slice(0, indexToRemove) + str.slice(indexToRemove + 1);
console.log(newStrrrr); // "hllo"
//!--------------------------------------------------------------------------------------------------------//

//* capitalize
let words = ["hello", "world", "javascript"];
let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalizedWords); 
// Output: ["Hello", "World", "Javascript"]

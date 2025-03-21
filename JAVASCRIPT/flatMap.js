//!An array of objects is simply a collection (array) where each element is an object containing key-value pairs.


let users = [
  { name: "Sooryadev", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Anjali", age: 22 }
];

console.log(users[0]);      // { name: 'Sooryadev', age: 25 }
console.log(users[0].name); // "Sooryadev"

//? What is flatMap()?
// It maps each array element and then flattens the result into a single array.
// It is useful when each element maps to multiple values (nested arrays).


let userss = [
    { name: "Sooryadev", hobbies: ["Coding", "Reading"] },
    { name: "Rahul", hobbies: ["Music", "Traveling"] }
  ];
  
let hobbiesFlat = userss.flatMap(user => user.hobbies);
console.log(hobbiesFlat);


//!------------------------------------------------------------------------------------------------------------//
let data = [
    { nums: [1, 2, 3] },
    { nums: [4, 5, 6] }
  ];
  
  let doubled = data.flatMap(obj => obj.nums.map(n => n * 2));
  console.log(doubled);
//!------------------------------------------------------------------------------------------------------------//
let numbers = [
    { values: [10, -5, 3] },
    { values: [-2, 8, -7] }
  ];
  
  let positiveNumbers = numbers.flatMap(obj => obj.values).filter(n => n > 0);
  console.log(positiveNumbers);
//!----------------------------------------------------------------------------------------------------------------//  
let Ab = [
    { af: [34, 343] },
    { af: [34, 343] },
    { af: [34, 343] },
    { af: [34, 343] }
  ];
  
  let a=Ab.flatMap(num=>num.af).reduce((acc,curr)=>{return acc+curr},0)
  console.log(a)
  //!----------------------------------------------------------------------------------------------------------------//
  let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(count);
//{ apple: 3, banana: 2, orange: 1 }
//!----------------------------------------------------------------------------------------------------------------//
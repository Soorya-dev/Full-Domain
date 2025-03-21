//* This allows to extract data from arrays or objects in a concise and readable way.
//* Extracts elements from an array into separate variables.

//? Syntax: const [element1, element2, ...rest] = array;

//! Array Destructuring

const arr = [10,203,430, 540]

const [elem1, elem2, elem3] = arr

console.log(elem1);
console.log(elem2);
console.log(elem3);

//! Object Destructuring

const person = { 
    name: "Arunghosh",
    age: 27
}

const {name, age} = person;

console.log(name);
console.log(age);

//! Nested Destructuring

//* Combines destructuring for arrays and objects to extract data from deeply nested structures.

const data = {
    person: {
        name1: "arunghosh",
        address: {
            street: "Anjathani",
            state: "Kerala"
        }
    }
}

const {person:{name1, address:{street, state}}} = data

console.log(name);
console.log(street);
console.log(state);






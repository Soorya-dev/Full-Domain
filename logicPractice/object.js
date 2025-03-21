let obj={
    name:"soorya",
    age:30,
    isStudent:false
}
obj.gender="male"

obj.name="bob"  //update
obj["age"]=31;  //update

//accessing
console.log(obj)
console.log(obj.name)
console.log(obj["age"]);

//delete property
obj.sample="yes"
delete obj.sample
console.log(obj)


//check existance
console.log("name" in obj) 
console.log(obj.hasOwnProperty("age"));

//iterate Properties

for(let key in obj){
    console.log(key + ": "+obj[key])
}

//array of the object's keys using Object.keys()
let keys = Object.keys(obj)
console.log(keys)


//You can get an array of the object's values using Object.values():
let values=Object.values(obj)
console.log(values)

//You can get an array of the object's key-value pairs using Object.entries():
let entries=Object.entries(obj)
console.log(entries)


//You can merge objects using Object.assign() or the spread operator (...):
let obj2={country:"india", proffession:"engineer"}
let merge1=Object.assign( obj, obj2);
console.log(merge1)
let merge2={...obj,...obj2}
console.log(merge2)


//You can create a shallow copy of an object using Object.assign() or the spread operator:
let clonedObj = Object.assign({}, obj);
let clonedObj2 = { ...obj };
console.log(clonedObj);


// Object.freeze(obj): Makes the object immutable, meaning you can’t change, add, or remove properties.
// Object.seal(obj): Prevents adding or removing properties, but allows modifying existing properties.
let objj = { name: "Alice" };
Object.freeze(objj);

objj.name = "Bob"; // Will have no effect
console.log(objj.name); // Output: Alice



let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

let frequency = {};

// Iterate through the array
for (let i = 0; i < array.length; i++) {
  let element = array[i];
  // If the element is already in the frequency object, increment its count
  if (frequency[element]) {
    frequency[element]++;
  } else {
    // Otherwise, initialize it with a count of 1
    frequency[element] = 1;
  }
}

console.log(frequency);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }


let nums=[1,2,3,4,5,6,4,3,1]
 obj={}
for(let num of nums){
;
    
    if(obj[num]){
        obj[num]+=1
    }else{
        obj[num]=1
    }
    console.log(obj[1])
}
for(let key in obj){
    console.log(key)
}
console.log(obj)

/////deeper

















// JavaScript objects can inherit properties and methods from other objects through prototypes. Every object in JavaScript has a prototype, which is another object from which it inherits properties:

// let animal = { species: "Animal" };
// let dog = Object.create(animal); // dog inherits from animal
// dog.breed = "Labrador";

// console.log(dog.species); // Output: Animal (inherited from animal)


// Getter and Setter Methods
// You can define getter and setter methods to control access to an object’s properties:

// javascript
// Copy code
// let person = {
//     firstName: "Alice",
//     lastName: "Smith",
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     }
// };

// person.fullName = "John Doe"; // Using the setter
// console.log(person.fullName); // Using the getter: Output: John Doe
// 7. this Keyword
// In the context of an object, the this keyword refers to the object itself. This is commonly used in object methods:

// javascript
// Copy code
// let person = {
//     name: "Alice",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// person.greet(); // Output: Hello, my name is Alice
// 8. Object Spread Operator and Rest Parameters
// You can use the spread operator to merge objects, as you learned earlier. You can also use rest parameters to collect remaining properties in a new object:

// javascript
// Copy code
// let obj = { a: 1, b: 2, c: 3 };
// let { a, ...rest } = obj; // Destructuring with rest

// console.log(a); // Output: 1
// console.log(rest); // Output: { b: 2, c: 3 }
// 9. Symbol Keys
// JavaScript objects can also have keys that are symbols, which are a unique and immutable primitive type:

// javascript
// Copy code
// let id = Symbol("id");
// let obj = {
//     [id]: 123
// };

// console.log(obj[id]); // Output: 123
// 10. Object Methods
// Objects can have methods, which are functions that belong to the object:

// javascript
// Copy code
// let car = {
//     brand: "Tesla",
//     model: "Model 3",
//     drive() {
//         console.log(`Driving the ${this.brand} ${this.model}`);
//     }
// };

// car.drive(); // Output: Driving the Tesla Model 3
// 11. Object References
// Objects in JavaScript are passed by reference. This means that when you assign an object to another variable, both variables reference the same object:

// javascript
// Copy code
// let obj1 = { name: "Alice" };
// let obj2 = obj1;

// obj2.name = "Bob";
// console.log(obj1.name); // Output: Bob (Both variables reference the same object)
// 12. Working with JSON (JavaScript Object Notation)
// You can convert objects to JSON strings and parse JSON strings back into objects:

// javascript
// Copy code
// let person = { name: "Alice", age: 25 };
// let jsonString = JSON.stringify(person); // Convert object to JSON string

// let parsedObject = JSON.parse(jsonString); // Convert JSON string




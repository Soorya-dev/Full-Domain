//* The this keyword refers to an object.
//!The this keyword refers to different objects depending on how it is used:
//* In an object method, this refers to the object.
//* Alone, this refers to the global object.
//* In a function, this refers to the global object.
//* In a function, in strict mode, this is undefined.
//* In an event, this refers to the element that received the event.
//* Methods like call(), apply(), and bind() can refer this to any object.

//! this is not a variable. It is a keyword. we cannot change the value of this.

//? an object called car with a method to describe itself.

let car = {
  brand: "tata",
  model: "nexon",
  year: "2022",
  describe: function () {
    console.log(`this car is a ${this.year} ${this.brand} ${this.model} `);
  },
};

car.describe();

//? Reusability in Methods

let person1 = {
  name: "Arunghosh",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let person2 = {
  name: "ahalya",
  greet: person1.greet,
};

person1.greet();
person2.greet();

//? Constructor Functions
function person(name) {
  this.name = name;
  this.greet = function () {  //? adding method to the new object
    console.log(`my name is ${this.name}`);
  };
}

let person3 = new person("arunghosh"); //? creating new object
let person4 = new person("ahalya");

person3.greet();
person4.greet();

//* Constructor functions are used to create multiple objects of the same type.
//* In the constructor function, this has no value.
//*The value of this will become the new object when a new object is created.

//* Methods in JavaScript are functions defined as properties of objects. They allow objects to perform actions, encapsulate behavior, and interact with their own properties.

//! In real life, objects are things like: houses, cars, people, animals, or any other subjects.

//? Object Properties
//* A real life car has properties like weight and color:
//* car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
//* Car objects have the same properties, but the values differ from car to car.
//? Object Methods
//* A real life car has methods like start and stop:
//* car.start(), car.drive(), car.brake(), car.stop().
//* Car objects have the same methods, but the methods are performed at different times.


//! objects are variables toolbar. but objects can contain many values

const car = {type: "fiat", model:"500", color: "white"};
console.log(car);

//* Objects are key-value pairs that group related data and functions.
//* Properties are values associated with a key.
//* Methods are functions stored as object properties.
//* Creating objects can be done using literals, constructors, and classes.
//* Accessing/modifying properties can be done using dot or bracket notation.
//* Adding/deleting properties dynamically modify the object.
//* Looping through properties helps in accessing all key-value pairs.


//? Object literals: ( {} )

let person = {
    name: "Arun",
    age: "27",
    greet: function (){
        console.log(`my name is ${this.name}`);
    }
};
console.log(person.name)
person.greet()

//? Using 'new' keyword with 'object' constructor

let person1 = new Object();

person1.name = "ArunGhosh";
person1.age = "27";
person1.greet = function(){
    console.log(`my name is ${this.name}`);
};

person1.greet()


//! InstanceOf

//* The instanceof operator in JavaScript is used to check if an object is an instance of a specific constructor or class. It returns true if the object is an instance of the specified constructor or class, and false otherwise.

//? Syntax
// object instanceof constructor;

//? object: The object to test.
//? constructor: The constructor function or class to check against.

//! How it works

//* The instanceof operator checks the prototype chain of the object to determine if it contains the prototype property of the constructor.

function person2(name){
    this.name = name
}

function person3(name){
    this.name = name
}

const arun = new person2("arun");
console.log(arun instanceof person2);
console.log(arun instanceof Object);
console.log(arun instanceof person3);

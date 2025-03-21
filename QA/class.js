//* A class is a blueprint for creating objects with shared properties and methods. It allows you to define a constructor to initialize the object's properties and methods to define the object's behavior.


//? JavaScript Classes are templates for JavaScript Objects.
//? The constructor method is called automatically when a new object is created.

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello, my name is ${this.name}`);
    }
}

let person1 = new person("Arunghosh", "26")

person1.greet()
console.log(person1);

//! Inheritance

//* Classes support inheritance, allowing to create a class that extends another class.

class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed
    }

    speak(){
        console.log(`${this.name} barks, its breed is ${this.breed}`);
    }
}

const rex = new Dog('Rex', 'German Sheperd')
const puppy = new Animal("blacky")
puppy.speak()
rex.speak()

//* Constructor: Method for initializing instances.
//* Methods: Functions defined within the class.
//* Inheritance: Using extends and super to create subclasses.
//* Static Methods: Methods that belong to the class, not instances.
//* Getters/Setters: Define methods for getting and setting property values.
//* Private Fields/Methods: Use # to define private members.

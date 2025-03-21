//! Call()

//* The call() method allows you to call a function with a specified this value and arguments provided individually.
//* Syntax: function.call(thisArg, arg1, arg2, ...)

function greet1 (name){
    return console.log(`my name is ${name}, I'm a ${this.role}`);
}

const person = {role : " developer"}

greet1.call(person, "arunghosh")

//! Apply()

//* The apply() method is similar to call(), but it takes arguments as an array.
//* Syntax: function.apply(thisArg, [argsArray])

function greet2(name){
    return console.log(`my name is ${name}, I'am ${this.age} age, I'm a ${this.role}`);
}

const person1 = {role: " developer", age:26}

greet2.apply(person1,["arun"])

//! Bind()

//* The bind() method creates a new function that, when called, has its this keyword set to a specific value, and arguments are fixed (pre-specified).
//* It allows you to curry functions or create a function with a permanent context (this).
//* Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])

function greet3(name) {
  return console.log(`my name is ${name}, I'm a ${this.role}`);
}

const person2 = { role: " developer" };

const bindFunction = greet3.bind(person2)

bindFunction("arunghosh")
//! Scope in JavaScript

//? Scope refers to the accessibility of variables and functions within different parts of our code. It determines where a variable or function can be referenced and used.

//? three main scopes :

//* Global scope : This is the outermost scope, accessible from anywhere in our code. Variables declared outside of any function belong to the global scope.

//* Function Scope(Local Scope) : Variables declared within a function are only accessible within that function and its nested functions (if any). Each function call creates a new scope, meaning variables declared within a function are not accessible outside of that function's execution context.

//* Block Scope : Introduced with ECMAScript 2015 (ES6), let and const keywords create block scope. Variables declared with let or const within a block (e.g., if statement, for loop) are only accessible within that block and not in outer blocks or the global scope.

//? Lexical Scoping

//* Lexical scoping, also known as static scoping, determines the scope chain based on where a function is defined in your code, regardless of where it's called. This means the accessibility of variables is determined by their position in the code structure, not by the call stack.

//? Scope chain

//* The scope chain is a mechanism that the JavaScript engine uses to determine where to look for a variable when it's referenced. It's a chain of nested scopes, starting from the current function's scope and working its way up to the global scope if necessary.

//! How the scope chain works
//? When a variable is referenced, the JavaScript engine first looks for it in the current function's scope (local scope).

//? If the variable is not found in the local scope, it moves up to the parent function's scope and searches there.

//? This process continues up the chain until the variable is found or the global scope is reached.

//? If the variable is not found anywhere in the scope chain, a ReferenceError is thrown.

let globalVar = "I'm global";

function outerFunction() {
  let outerVAr = "I'm outer";
  function innerFunction() {
    let innerVar = "I'm inner";
    console.log(globalVar);
    console.log(outerVAr);
    console.log(innerVar);
  }
  innerFunction()
}
outerFunction()
 
//? Temporal dead zone is the time since when this let variable was hoisted and till it is initialize some value. the time b/w that  is known as temporal dead zone
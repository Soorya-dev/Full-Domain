//! var

//* Hoisting: var declarations are hoisted to the top of their scope. This means the variable can be accessed before its declaration, though it will be undefined until the declaration is encountered.
//* Function Scope: Variables declared with var are scoped to the function in which they are declared. If declared outside any function, they are globally scoped.
//* Re-declaration: Variables declared with var can be re-declared within the same scope without causing an error.
//* Initialization: var variables are initialized to undefined when hoisted.

//! Hoisting

console.log(a);
var a = 10;
console.log(a);

//! Function scope

function test() {
  var b = 10;
  if (true) {
    var b = 20; //* same variable, not a new block scope.
    console.log(b);
  }
  console.log(b);
}
test();

//! re-declaration

var c = 10;
var c = 40; //* no error
console.log(c);

//! let

//* Block Scope: Variables declared with let are block-scoped. This means they are only accessible within the block (e.g., inside curly braces {}) in which they are declared.
//* Hoisting with TDZ: let declarations are hoisted to the top of their block scope, but they are not initialized until the code execution reaches the declaration. This results in a Temporal Dead Zone (TDZ) from the start of the block until the declaration is encountered.
//* No Re-declaration: Variables declared with let cannot be re-declared within the same scope. Attempting to do so will result in a syntax error.

{
  let x = 10;
  console.log(x);
}
//console.log(x); //* reference error: x is not defined

//! Block scope

function demo() {
  let y = 10;
  if (true) {
    let y = 20; //* different variable, block scoped
    console.log(y);
  }
  console.log(y);
}
demo();

//! Hoisted with TDZ

{
  //? TDZ start
  //console.log(z);  //* reference error: cannot access 'z' before initialization
  let z = 10; //* TDZ ends
  console.log(z);
}

//! No Re-declaration

let b = 30;
// let b = 40; //* syntax error: b has already declared
b = 40; //* reassigining is allowed
console.log(b);

//! const

//* Block Scope: Variables declared with const are block-scoped. This means they are only accessible within the block (e.g., inside curly braces {}) in which they are declared.
//* Hoisting with TDZ: const declarations are hoisted to the top of their block scope, but they are not initialized until the code execution reaches the declaration. This results in a Temporal Dead Zone (TDZ) from the start of the block until the declaration is encountered.
//* No Re-assignment: Variables declared with const cannot be reassigned. Attempting to reassign a const variable will result in a TypeError.
//* Must be Initialized: const variables must be initialized at the time of declaration. If not, it will result in a syntax error.

{
  const v = 10;
  console.log(v);
  //? v = 20   TypeError: Assignment to constant variable.
}
//? outside the scope
//console.log(v);  //* reference error: x is not defined

//! Block scope

function demo1() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x);
  }
  console.log(x);
}

demo1();

//! Hoisted with TDZ

{
  //? TDZ starts
  //console.log(a); //* ReferenceError: Cannot access 'a' before initialization
  const a = 5; //* TDZ ends
  console.log(a); 
}
//!A closure is when a function “remembers” the variables from its outer (enclosing) scope, even after that outer scope has finished executing. 
// !It’s like a function carrying a backpack of variables it can access later.

function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    return y;
}

var result = x()
//console.log(a);
result();


//! clouser a fn bind together with its lexical environment

function outer() {
  let name = "Alice";
  function inner() {
    console.log("Hello, " + name); // Accesses outer variable
  }
  return inner;
}

let greet = outer(); // outer runs, returns inner
greet(); // Hello, Alice

//! counter with  clouser
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
// Explanation:
// createCounter creates a count variable and returns an inner function.
// The inner function forms a closure, remembering count.
// Each call to counter() increments the same count, maintaining state.
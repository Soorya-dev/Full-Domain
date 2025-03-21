//! IIFEs (Immediately Invoked Function Expressions):

(function(){
    let counter = 0;
    function increment(){
        counter++;
        console.log("Count", counter);
    }
    increment();
})();

//? console.log(counter);  this line cannot be access, it will throw an error 

//? Use Case

//* Creating private variables and functions within a specific scope.
//* Implementing modules with private and public members.
//* Avoiding global variable pollution.
//* Passing arguments or data to the function during execution.


var globalVar = "Global Variable";

function outerFunction() {
  var functionScopedVar = "Function Scoped Variable";

  (function () {
    console.log(globalVar); // 'Global Variable'
    console.log(functionScopedVar); // 'Function Scoped Variable'
  })();
}

outerFunction();


//? Global Variable:

//* globalVar is declared in the global scope and is accessible from anywhere in the code.

//? Function-Scoped Variable:

//* functionScopedVar is declared inside outerFunction and is accessible within that function and any nested functions, including the IIFE.

//? IIFE Inside outerFunction:

//* The IIFE can access both globalVar and functionScopedVar because they are in scopes that are accessible to the IIFE.


//!  invoke an IIFE without any extra brackets?

(function (dt) {
  console.log(dt.toLocaleTimeString());
})(new Date());

//* Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using void operator

void (function (dt) {
  console.log(dt.toLocaleTimeString());
})(new Date());


(function(){
    console.log(a);
    var a = 10
})()
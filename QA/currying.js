//! Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each with a single argument. Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the second argument, and so on, until all arguments are provided.


//* Code Reusability: Currying promotes code reusability by allowing to create specialized functions from more general ones. Once you define a curried function, we can reuse it with different arguments to perform similar operations without duplicating code.


function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//console.log(add(3)(5)(6));

const sum = add(5)
console.log(sum(5));
console.log(sum(5));

(function () {
  function addition(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
console.log(addition(3)(4)(5));
})();


const curryingFn = a=> b => c=> a+b+c

const demo = curryingFn(3)

console.log(demo(4)(5))

console.log(curryingFn(3));
console.log(curryingFn(3)(4));
console.log(curryingFn(3)(4)(5));

function f(x) {
  x = "x-" + x;
  return function (y) {
    y = "y-" + y;
    return function (z) {
      return "z-" + z;
    };
  };
}

let g = f("a")("b")("c");
console.log(g);



//! The generator operator (*) is used to define generator functions. These functions have special behavior compared to regular functions:

//* Pausing Execution: They can pause their execution at any point using the yield keyword.
//* Yielding Values: When paused, they can "yield" a value back to the caller code.
//* Resuming Execution: The generator function can be resumed later, picking up execution where it left off.

function* generator() {
  let i = 0;
  while (i < 5) {
    yield i; //? this yield is printing
    i++;
  }
}

const genereting = generator();
console.log(genereting.next());
console.log(genereting.next());
console.log(genereting.next());
console.log(genereting.next());
console.log(genereting.next());

//? Iterating over Large Datasets or Infinite Sequences:

//* Generators can be very memory-efficient when dealing with large datasets or infinite sequences.
//* They only generate values as needed, avoiding the need to hold the entire data structure in memory at once.

function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacciGenerator = fibonacci();

console.log(fibonacciGenerator.next().value);
console.log(fibonacciGenerator.next().value);
console.log(fibonacciGenerator.next().value);
console.log(fibonacciGenerator.next().value);
console.log(fibonacciGenerator.next().value);


function* evenNumber(){
  for(let i=1; i<=10;i++){
    if(i%2===0){
      yield i
      return i
    }
  }
}

const even = evenNumber()
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
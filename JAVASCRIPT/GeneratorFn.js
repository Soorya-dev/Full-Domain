//to Start Quokka Press Ctrl + Shift + P

function* numberGenerator() {
    let number = 0;
    while (true) {
      yield number++;
    }
  }
  
  const generator = numberGenerator();
  
  console.log(generator.next().value); // 0
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  // and so on...


//   Create a generator function that generates numbers from 1 to 10.
// Create a generator that produces the Fibonacci sequence up to n terms.


// Write a generator function that yields numbers from N down to 1.
function* generate(n){
  while(n>0){
      yield n--
  }
}
let n=10
let gen=generate(n)

console.log(gen.next())
console.log(gen.next())


//! Create a generator function that yields only prime numbers.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) return false; 
  }
  return true;
}

function* generate(n){
while(n>1){
    if(isPrime(n)){
        yield n
    }
    n--
}
}
let Nn=17
let genn=generate(n)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


// Write a generator that generates even numbers infinitely
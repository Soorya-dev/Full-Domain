const { log } = require("console");

let msg = "hello world";

msg.name = "arun";

console.log(msg.name);

/*----------------------*/
let count = 10;

(function innerFn() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();

/*----------------------*/
let zero = new Number(0);

if (zero) {
  console.log("if");
} else {
  console.log("else");
}

/*----------------------*/

console.log(typeof typeof typeof true);

/*----------------------*/

console.log("🙂" === "🙂");

/*----------------------*/

const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);

/*----------------------*/
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`${this.name} vehicle started`);
  }
}
class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}
const car = new Car("BMW");

car.start();

/*----------------------*/
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
//var genObj = new myGenFunc()
//console.log(myGenFunc.next().value);

/*----------------------*/
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var genObj = yieldAndReturn();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

/*----------------------*/

const mygenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

for (const value of mygenerator) {
  console.log(value);
  break;
}
for (const value of mygenerator) {
  console.log(value);
}

/*----------------------*/

const obj = { name: "value" };
//const arr = [...obj]; //* Type error: obj is not iterable

/*----------------------*/

function myFnc(x, y, ...args) {
  console.log(args);
}
myFnc(1, 2, 3, 4, 5, 6);
myFnc(1, 2);

/*----------------------*/

function outer(f = inner()) {
  function inner() {
    return "inner";
  }
}

//console.log(outer()); //* Reference error: inner is not defined

/*----------------------*/

function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}
greet("hello", "arun");
greet("hello", "arun", "goodmorining");

/*----------------------*/

function add(item, items = []) {
  items.push(item);
  return items;
}
console.log(add("orange"));
console.log(add("apple"));

/*----------------------*/

function checkType(num = 1) {
  console.log(typeof num);
}
checkType();
checkType(undefined);
checkType("");
checkType(null);

/*----------------------*/

const props = [
  { id: 1, name: "john" },
  { id: 2, name: "jack" },
  { id: 3, name: "Tom" },
];
const [, , { name }] = props;
console.log(name);

/*----------------------*/
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);

/*----------------------*/

let myNumber = 100;
let myString = "100";
if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}
if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}

/*----------------------*/

var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
  return Object(val) !== val;
}
console.log(isPrimitive(myPrimitive));
console.log(isPrimitive(myNonPrimitive));

const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    console.log(this);
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle.diameter());
console.log(circle.perimeter());

/*----------------------*/

function averageOfOdd(arr) {
  let oddNum = arr.filter((n) => n % 2 !== 0);
  console.log(oddNum);
  let sum = oddNum.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(sum);
  let avg = sum / oddNum.length;
  return avg;
}
let arr = [2, 5, 9, 6, 8, 7, 4, 1];
console.log(averageOfOdd(arr));

function oddnum(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return { odd, even };
}

console.log(oddnum(arr));

const array = [4544, 5643, 7986, 4444, 5643, 2654];

function palindrome(arr) {
  let rept = new Set();
  let str = "";
  let reverse = "";
  for (let val of arr) {
    console.log(val);
    if (rept.has(val)) {
      str += val;
      console.log(val);
      break;
    } else {
      rept.add(val);
    }
  }
  console.log(str);
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
  return str === reverse;
}

console.log(palindrome(array));

let sam = [1, 2, 3, 4, 5, 6];

const result = sam.map((n) => {
  return n * 3;
});
console.log(result);


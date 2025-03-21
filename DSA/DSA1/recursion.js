

//* Factorial
function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

let x = 4;
let y = factorial(x);
console.log(`The factorial of ${x} is ${y}`);

//* Count Down
function countDown(num1) {
  console.log(num1);
  const newnum = num1 - 1;
  if (num1 > 0) {
    countDown(newnum);
  }
}

//countDown(3);

//* Fibonacci

function fibonacci(n) {
  if (n <= 0) {
    return "Input should be a positive integer.";
  } else if (n === 1) {
    return [0];
  } else {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}
console.log(fibonacci(5));

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(0));

let str = "arunghosh";
function reverseString(str) {
  return str === "" ? " " : reverseString(str.substr(1)) + str[0];
}

console.log(reverseString(str));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(5, 10));

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

const arr = [1, 2, 3, 4, 5];
console.log(productOfArray(arr));

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

console.log(recursiveRange(5));

function calculateTotal(x, total = 0) {
  return x === 0 ? total : calculateTotal(x - 1, (total += x));
}

console.log(calculateTotal(10));

const teamStructure = {
  name: "arunghosh",
  teams: [
    {
      name: "muneer",
      teams: [
        {
          name: "anuroop",
          teams: [],
        },
      ],
    },
    {
      name: "vishnuPriya",
      teams: [
        {
          name: "afsal",
          teams: [],
        },
      ],
    },
    {
      name: "sijumon",
      teams: [],
    },
  ],
};

function getTeamDetails(x) {
  if (x.teams.length === 0) {
    return 0;
  }
  x.teams.forEach((team) => {
    console.log(team.name);
    

    getTeamDetails(team);
  });
}

getTeamDetails(teamStructure);


let nums = [1,2,3,4,5,6,10]

function printValues(index){
  if(index>=0){

    console.log(nums[index]);
    printValues(index-1)
  }
}

printValues(nums.length-1)
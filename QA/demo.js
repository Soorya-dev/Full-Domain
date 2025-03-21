const arr = [1, 2, 3, 4];

var add = function (arr) {
  let out = 0;
  for (let i = 0; i < arr.length; i++) {
    out += arr[i];
  }
  return out;
};
console.log(add(arr));

var reverse = function (arr1) {
  let reversed = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    reversed.push(arr[i]);
  }
  return reversed;
};
const arr1 = [1, 2, 3, 4, 5];
console.log(reverse(arr1));

var removeFromIndex = function (arr1, index) {
  for (let i = 0; i < arr1.length; i++) {
    if (i === index) {
      arr1.splice(index, 1);
    }
  }
  return arr1;
};

console.log(removeFromIndex(arr1, 3));

function checkPrimeNumber(n) {
  let isPrime = true;
  if (n === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (n > 1) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${n} is a prime number`);
    } else {
      console.log(`${n} is not a prime number`);
    }
  }
}

checkPrimeNumber(53);

let z = Math.sqrt(54)
console.log(z);

let array = [['a',1], ['b',2], ['c', 3], ['d', 4]]

function arrayToObject(array){
    let obj = {}
    for(let i =0; i< array.length; i++){
        const key  = array[i][0];
        const value = array[i][1];
        obj[key] = value
    }
    return obj
}

console.log(arrayToObject(array));


const arr2 = [1,2,3,4]
const obj = {}

for (let i = 0; i < arr2.length; i++) {
    obj[i] = arr[i]
}
console.log(obj);

function printMultiplication(n){
    for(let i = 1; i<=10; i++){
        console.log(`${i} * ${n} = ${i*n}`);
    }
}

printMultiplication(5)

function checkPalindrome(str){
    let newStr = ''
    for(let i = str.length-1; i>=0; i--){
        newStr += str[i]
    }
    if(str === newStr){
        return true
    }else {
        return false
    }
}

console.log(checkPalindrome("sas"));

function sum(arr){
    let i =0;
    let sum = 0
    while(i < arr.length){
        console.log(i);
        sum += arr[i]
        i++
    }
    return sum
}

console.log(sum(arr));

function uniqueElements(arr3){
 let res =  arr3.filter((ele, index, arr)=> {
        return arr.indexOf(ele) === arr.lastIndexOf(ele)
    })
    return res
}
let arr3 = [1,2,2,3,34,4,5,5]
console.log(uniqueElements(arr3))

function uniqueArray(arr3){
    let unique = []
    let res = arr3.map(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    });
    return unique
}

console.log(uniqueArray(arr3));

function sortingArrayUsingLoop(arr3){
    for(let i = 0 ; i< arr3.length; i++){
        for (let j = 0; j < arr3.length; j++) {
            if(arr3[j] > arr3[i]){
                let temp = arr3[i];
                arr3[i] = arr3[j]
                arr3[j] = temp
            }
            
        }
    }
    return arr3
}

console.log(sortingArrayUsingLoop(arr3));


function reverseSentence(sentence){
    let words = sentence.split(" ");
    let reversed = []
    for(let i = 0; i< words.length; i++){
        console.log(words[i]);
        let reversedWord = ''
        for(let j = words[i].length-1;
             j>=0; j--){
            reversedWord += words[i][j]
        }
        reversed.push(reversedWord)
    }
    return reversed.join(" ")
}

console.log(reverseSentence("this is my car"));


function fizzBuzz(n) {
  // Write your code here
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5===0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz(15));


function secondLargest(arr){
  let largest = 0
  let secLargest = 0
  for(let i=0;i<arr.length;i++){
    if(arr[i]> largest){
      secLargest = largest;
      largest = arr[i];
    }else if(arr[i]> secLargest && arr[i] !==largest){
      secLargest = arr[i]
    }
  }
  return secLargest
}

console.log(secondLargest(arr3));
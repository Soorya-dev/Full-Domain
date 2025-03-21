const { log } = require("console");

//* Find the largest three distinct elements in an array
let arr = [10, 4, 3, 50, 23, 90];
function largestThreeElement(arr) {
  arr.sort((a, b) => b - a);
  return arr.slice(0, 3);
}
console.log("largest three distinct elements", largestThreeElement(arr));

//* Find Second largest element in an array
let arr1 = [12, 35, 1, 10, 34, 1];
function secondLargestElement(arr1) {
  arr1.sort((a, b) => b - a);
  return arr1.slice(1, 2);
}
console.log("Second largest element", secondLargestElement(arr1));

const arr12 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function uniqueElement(arr12, arr2) {
  const uncommonInArr1 = arr12.filter((element) => !arr2.includes(element));
  console.log(uncommonInArr1, "1234567");
  const uncommonInArr2 = arr2.filter((element) => !arr12.includes(element));
  console.log(uncommonInArr2, "1234567");

  const uncommonElements = uncommonInArr1.concat(uncommonInArr2);
  return uncommonElements;
}

console.log(uniqueElement(arr12, arr2));

let arr5 = [23, 56, 42, 10, 16, 89, 50];

function findMinimum(arr5) {
  let min = arr5[0];
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < min) {
      min = arr5[i];
    }
  }
  return min;
}
console.log(findMinimum(arr5), "minimum of Array");

function findMax(arr5) {
  let max = arr5[0];
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > max) {
      max = arr5[i];
    }
  }
  return max;
}
console.log(findMax(arr5), "minimum of Array");

function removeElement(arr, value) {
  return arr.filter((ele) => ele !== value);
}

console.log(removeElement(arr, 90));

function removeElements(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}

console.log(removeElements(arr, 50));

const arrr = [1, [2, 3], [4, [5, [6, 7]]]];
const flatArr = arrr.flat(2);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 7]

let word = "hello good morning";
function firstCapitalWord(word) {
  word = word.split(" ");
  console.log(word, "123456");
  for (let i = 0; i < word.length; i++) {
    console.log(word[i][0]);
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}

console.log(firstCapitalWord(word));

let word1 = "APPLE";

function rotateWord(word1, k) {
  word1 = word1.split("");
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < k; i++) {
    arr1.push(word1[i]);
  }
  for (let j = k; j <= word1.length; j++) {
    arr2.push(word1[j]);
  }
  const result = arr2.concat(arr1);
  return result.join("");
}

console.log(rotateWord(word1, 3));

let wrd = "arunfloyd";
function wordSwapping(wrd) {
  let arr = wrd.split("");
  console.log(arr);
  let temp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = temp;
  return arr.join("");
}

console.log(wordSwapping(wrd));

let array = [1, 2, 3, 4, 5, 6];

function multiplying(array) {
    let f = array.shift()
    console.log(f);
    let sum1 = f* array.shift()
    console.log(sum1);
    let e = array.pop()
    let sum2 = e * array.pop()

    return sum1 * sum2
}


console.log(multiplying(array));

let array1 = [1, 2, 3, 4, 5, 6];
function multiplyElements(array1, k){
    let sum = 1;
    let sum1 = 1
    for (let i=0; i<k ; i++){
        sum *= array1[i]
        console.log(sum,'1234567');
    }
    for(let j=array1.length-k; j< array1.length; j++){
        sum1 *= array1[j]
        console.log(sum1,'sum1');
    }
    let result = sum * sum1
 return result
}

console.log(multiplyElements(array1, 2));


function shortestToChar(s, c) {
    let n = s.length;
    console.log(n,'asdfghj');
    let answer = new Array(n).fill(Infinity);
    console.log(answer,'answer');

    // First pass: Left to Right
    let prev = -Infinity;
    console.log(prev,'prev');
    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.abs(i - prev);
        //console.log(answer,'zxcvb');
    }
    
    // Second pass: Right to Left
    prev = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.min(answer[i], Math.abs(i - prev));
    }


    return answer;
}

// Example 1
console.log(shortestToChar("loveleetcode", "e")); // Output: [3,2,1,0,1,0,0,1,2,2,1,0]

// Example 2
// console.log(shortestToChar("aaab", "b")); // Output: [3,2,1,0]

// Reverse an array using map

function reverseArray(arr){
  let lastIndex = arr.length-1
  const result = arr.map((item,i,arr)=> {
    return arr[lastIndex-i]
  })
  console.log(result); 
}
let list = [10, 4, 3, 50, 23, 90];

reverseArray(list);

// Reverse an array without using another array

function reverseWithoutExtraArray(list){
  let start = 0 
  let end = list.length-1

  while(start < end){
    let temp = list[start]
    list[start] = list[end]
    list[end] = temp

    start++
    end--
  }
  console.log(list);
}

reverseWithoutExtraArray(list)

// Find largest difference between two consecutive numbers in an array

function largestConsecutive(list){
  if(list.length < 2) return -1

  let maxdiff = 0

  for(let i =1; i<list.length; i++){
    const diff = Math.abs(list[i] - list[i-1]);
    maxdiff = Math.max(maxdiff, diff)
  }
  console.log(maxdiff);
}

largestConsecutive(list)
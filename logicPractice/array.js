const { log } = require("console");


let arr1 = [10, 20, 30, 40, 50];
let arr2 = [15, 25, 35, 45, 55];

//* we have to interchange the array elements of 2 given arrays

function arrayInterchange(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let temp = a[i];
      a[i] = b[i];
      b[i] = temp;
    }
  }

  return { a, b };
}

console.log(arrayInterchange(arr1, arr2));

let arr = [20, 10, 50, 30, 40];

function desendingOrder(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(desendingOrder(arr));

var checkPrime = function (n) {
  let isPrime = true;
  if (n < 0) {
    return null;
  } else if (n === 1) {
    return "it is a composite numner";
  } else if (n > 1) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("is a prime nummber");
    } else {
      console.log("is not a prime number");
    }
  }
};

checkPrime(7);

//* Write a code to replace all the multiples of five by 10

function replaceMultipleOfFive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      arr[i] = 10;
    }
  }
  return arr;
}

let arr5 = [5, 15, 16, 18, 28, 35];
console.log(replaceMultipleOfFive(arr5));

//* In an array replace all the multiples of three by ‘0’ and multiples of five by ‘1’.

function replaceBy(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr[i] = 0;
    } else if (arr[i] % 5 === 0) {
      arr[i] = 1;
    }
  }
  return arr;
}

let arr3 = [3, 5, 6, 7, 9, 18, 23, 41, 65];
console.log(replaceBy(arr3));

let arr4 = [7, 8, 6, 0, 7, 2, 1, 4, 9, 7, 0, 1, 5, 6];
console.log(arr4);

function repetedEle(arr) {
  let uniqSum = [];
  let isUmiq = 0;
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    flag = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isUmiq = arr[i];
        for (let k = 0; k < uniqSum.length; k++) {
          if (uniqSum[k] === isUmiq) {
            flag = 1;
          }
        }
        if (flag === 0) {
          uniqSum.push(arr[i]);
        }
      }
    }
  }
  return uniqSum;
}

console.log(repetedEle(arr4));

//*  Write a program to find the average of all unique array elements

function avgUnique(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] == arr[j]) {
        unique = false;
        break;
      }
    }
    if (unique) uniqArr.push(arr[i]);
  }
  return uniqArr;
}

console.log(avgUnique(arr4), "12345");

//* Write a program to find largest number in an unsorted array

function largestNo(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      max = arr[i + 1];
    } else {
      max = arr[i];
    }
  }
  return max;
}
let set = [40, 20, 5, 10, 65];
console.log(largestNo(set));

//* Write a program to find smallest number in an unsorted array

function smallestNo(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(smallestNo(set), "12345");

//* display the array after deleting two values next to the multiples of 5.

function deleteAfterMultiple(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      i += 2;
    } else {
      a.push(arr[i]);
    }
  }
  return a;
}
let b = [6, 8, 10, 14, 13, 17];
console.log(deleteAfterMultiple(b));

//* remove odd numbers from the array and find the sum of the existing values in the array.

function sumOfExistingvalue(arr) {
  let odd = [];
  let others = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    } else {
      others += arr[i];
    }
  }
  return { others, odd };
}

console.log(sumOfExistingvalue(b));

//* sum of unique prime numbers in an array.
let prime = [2, 6, 3, 2, 5, 18, 7, 11, 7];
function sumOfUniqePrime(arr) {
  let uniqNo = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] === arr[j]) {
        unique = false;
        break;
      }
    }
    if (unique) uniqNo.push(arr[i]);
  }
  console.log(uniqNo, "asdfgh");
  let sum = 0;
  for (let k = 0; k < uniqNo.length; k++) {
    if (isPrime(uniqNo[k])) {
      console.log(uniqNo[k], "zxcvbn");
      sum += uniqNo[k];
    }
  }
  return sum;
}

function isPrime(num) {
  if (num < 0) {
    return null;
  } else if (num === 1) {
    return "it is a composite number";
  } else if (num > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
}

console.log(sumOfUniqePrime(prime));

//* Find the sum of unique multiples of 3 in an array

function uniqueMultiple(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] == arr[j]) {
        unique = false;
        break;
      }
    }
    if (unique && arr[i] % 3 === 0) {
      res += arr[i];
    }
  }
  return res;
}

console.log(uniqueMultiple(prime), "sum of unique multiple of 3");

//* reverse the array and remove all the multiples of ‘3’from it

function reverseArrAndRemove(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      res.unshift(arr[i]);
    }
  }
  return res;
}

console.log(reverseArrAndRemove(prime));

//* sort an array and print the count of ‘1’ in the array
let ones = [5, 8, 6, 9, 7, 3, 1, 4, 1, 8, 1, 6, 1, 5, 1, 3, 1, 7, 1, 6];
function countOfOne(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++)
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
  }
  console.log(arr);
  console.log(count,'arunghosh');
}

countOfOne(ones);

//* replace elements in an odd position with * and remove prime

function replaceWithStar(arr) {
  let res = [];
  let deleteEle = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      deleteEle.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  console.log(deleteEle, "qwerty");
  for (let i = 0; i < res.length; i++) {
    if (res[i] % 2 !== 0) {
      res[i] = "*";
    }
  }
  console.log(res, "qwerty");
}

console.log(replaceWithStar(ones));

function calculateIncometax(amt) {
  let taxAmt = 0;
  if (amt > 250000 && amt < 500000) {
    taxAmt = (amt * 5) / 100;
  } else if (amt > 500000 && amt < 1000000) {
    taxAmt = (amt * 20) / 100;
  } else {
    taxAmt = (amt * 30) / 100;
  }
  return taxAmt;
}
console.log(calculateIncometax(600000));

var twoSum = function (nums, target) {
  let res = [];
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //   console.log(nums[i],'asdfghj');
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
        return res;
      }
    }
  }
  return res;
};

console.log(twoSum([3, 2, 3], 6));

var isPalindrome = function (x) {
  let a = x.toString();
  console.log(typeof a);
  let res = "";
  for (let i = a.length - 1; i >= 0; i--) {
    console.log(res, "qwert");
    res += a[i];
  }
  let num = Number(res);
  return num === x;
};

console.log(isPalindrome(121));

//* Write a program to count the total number of duplicate elements in an array

function duplicateCount(arr) {
  let count = 0;
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      let duplicateFount = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          duplicateFount = true
        }
      }
      if(duplicateFount){
        count++
        seen[arr[i]] = true
    }
}
}
console.log(seen);
  return count;
}

console.log(duplicateCount(ones));

//* Write a program to count the frequency of each element of an array

function frequency(arr){
    let fre = {}
    for(let val of arr){
        if(fre[val]){
            fre[val]++
        }else {
            fre[val] = 1
        }
    }
    return fre
}

console.log(frequency(ones));


//* Write a program to find the second largest number in an array


function secondLargest(arr){
    let largest = 0
    let secLargest = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i]> largest){
            secLargest = largest
            largest = arr[i]
        }else if(arr[i]> secLargest && arr[i] !== largest){
            secLargest = arr[i]
        }
    }
    return secLargest
}

console.log(secondLargest(ones));

//* Write a program to insert element in an array at specified position

function insertEle(arr, val, ind){
  for (let i = arr.length; i >ind; i--) {
        arr[i] = arr[i-1]
      }
      arr[ind] = val
  return arr
}

let a = [1,2,4,5]
console.log(insertEle(a, 3, 2));
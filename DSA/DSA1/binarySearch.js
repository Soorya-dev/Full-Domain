//*BinarySearch


let arr = [-1, 11, 3, 25, 9, 12];
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
  }
  return -1;
}
console.log("234567", binarySearch(arr, 12));

//*Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

//? Example usage
let arr1 = [2, 3, 4, 10, 40];
let target = 10;
let result = linearSearch(arr1, target);

console.log(result, "linear search");

function BinarySearch(arr, k) {
    arr.sort((a,b)=>a-b)
    console.log(arr,'arr');
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid,'mid');
    if (arr[mid] === k) {
      return mid;
    }
    if (arr[mid] < k) {
        start = mid +1
    }else{
        end = mid - 1;
    }
  }
  return -1
}

console.log("zxcvbnm,", BinarySearch(arr, 12));


let string = ["abi", "baz", "david", "davis", "dravid", "sachin", "xavier"];
let target1 = "dravid";

function binarySearch(string, target) {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (string[mid] === target) {
      return mid;
    }
    if (string[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(string, target1));

let arr4 = [1,2,2,2,2,4,6,7]

function  findFirstIndex(arr, target){
    let start = 0;
    let end = arr.length-1;
    console.log(end,"qwer");
    while(start<=end){
      let mid = ~~((start+end)/2);
      if(arr[mid]=== target){
        return mid
      }
    }
}

console.log(findFirstIndex(arr4, 2));


function findWord(arr, target){
  let start = 0;
  let end = arr.length -1;

  while(start <= end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid] === target){
      return mid
    }
    if(arr[mid] < target){
      start = mid +1
    }else {
      end = mid-1
    }
  }
  return -1
}

console.log(findWord(string, "sachin"), "asdfghj");
const arr = ["JavaScript", "React", "Node.js", "Node.js", "JavaScript"];

//! using Set

const uniqueSet = [...new Set(arr)];
console.log(uniqueSet);

//! using filter

const uniqueUsingFilter = arr.filter((ele, index) => {
    console.log(index);
    console.log(arr.indexOf(ele));
    return arr.indexOf(ele) === index;
});
console.log(uniqueUsingFilter);

//! using reduce

const uniqueUsingReduce = arr.reduce((unique, ele) => {
  return unique.includes(ele) ? unique : [...unique, ele];
}, []);
console.log(uniqueUsingReduce);

//! using forEach

const uniqueArr = [];
const uniqueUsingForeach = arr.forEach((ele) => {
  if (!uniqueArr.includes(ele)) {
    uniqueArr.push(ele);
  }
});

console.log(uniqueArr);

//! using for..of

const uniquearray = [];
for (const val of arr) {
  if (!uniquearray.includes(val)) {
    uniquearray.push(val);
  }
}

console.log(uniquearray);

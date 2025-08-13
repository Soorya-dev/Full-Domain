//!flatMap()
//flatMap() = map() + flat() (one level deep)
// const arr = [1, 2, 3];

// // Using map()
// const result1 = arr.map(x => [x * 2]);
// console.log(result1); // [[2], [4], [6]]

// // Using flatMap()
// const result2 = arr.flatMap(x => [x * 2]);
// console.log(result2); // [2, 4, 6]


const Ab = [
  { af: [34, 343] },
  { af: [12, 99] },
  { af: [343, 77] },
  { af: [99, 343] }
];
const abc = [
  { a: 3, p: 34, d: { p: 12 } },
  { a: 4, p: 343 },
  { a: 3, p: 234, d: { p: 343 } },
  { a: 3, p: 99 }
];

let arr=Ab.flatMap((x)=>x.af)
let obj={}
for(let num of arr){
    obj[num]=(obj[num]||0)+1
}
 console.log(obj)
 let res=[]
for(let key in obj){
    if(obj[key]>1){
        res.push(key)
    }
}
console.log(res)

//? SUM OF ALL p

let sumAllP = 0;

for (let item of abc) {
  sumAllP += item.p; // add top-level p

  if (item.d && item.d.p !== undefined) {
    sumAllP += item.d.p; // add nested p if exists
  }
}

console.log("Q1 - Sum of all p values:", sumAllP); // ➤ 1065

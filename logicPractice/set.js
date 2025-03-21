
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet); // Output: Set { 1, 2, 3, 4, 5 }


mySet.add(6);
console.log(mySet); // Set { 1, 2, 3, 4, 5, 6 }


mySet.delete(3);
console.log(mySet); // Set { 1, 2, 4, 5, 6 }


console.log(mySet.has(4)); // true


console.log(mySet.has(10)); // false


console.log(mySet.size); // Output: 5


mySet.clear();
console.log(mySet); // Output: Set {}


const newSet = new Set([1, 2, 3]);
for (let item of newSet) {
    console.log(item); // Outputs 1, 2, 3
}


newSet.forEach(item => console.log(item));

// Union: Combine two sets.
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }



// Intersection: Get elements present in both sets.
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set { 3 }


// Difference: Get elements in setA that aren’t in setB.

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set { 1, 2 }


const setOfObjects = new Set();
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };

setOfObjects.add(obj1);
setOfObjects.add(obj2);

console.log(setOfObjects.size); // 2 because obj1 and obj2 are different references



 //Remove Duplicate Even Numbers from an Array
 let aa=[3,6,7,4,5,8,6,3,4,1,2]


function removeEvenDupe(arr){
     let seen=new Set()
    return arr.filter(num=>{
        if(num % 2 ==0){
            if(seen.has(num)) return false
            seen.add(num);
        }
        return true
    })
}
console.log(removeEvenDupe(aa))
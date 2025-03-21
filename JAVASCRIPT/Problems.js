
//frequency 
let nums=[1,2,3,4,5,6,7,3,5]

let b={}
let c=[]
for(let num of nums){
    if(b[num]){
        b[num]+=1
        
    }else{
        b[num]=1
    }
}
for(let key in b){
    console.log(b[key])
    if(b[key]==1){
        c.push(key)
    }
}
console.log(b)
console.log(c)


//!-------------------------------------------------------------------------------------------------------------
function sumGreaterThan(arr, threshold) {
    return arr.reduce((sum, num) => num > threshold ? sum + num : sum, 0);
}

let arr = [10, 20, 30, 5, 15, 25, 35];
let threshold = 15;
console.log(sumGreaterThan(arr, threshold)); 
// Output: 110 (20 + 30 + 25 + 35)
//!-------------------------------------------------------------------------------------------------------------
function removeAdjacentOdds(arr) {
    return arr.filter((num, index, array) => 
        !(num % 2 !== 0 && (array[index + 1] % 2 !== 0 || array[index - 1] % 2 !== 0))
    );
}

let arrr = [1, 3, 5, 2,3, 6, 9, 11, 4, 8, 7, 13];
console.log(removeAdjacentOdds(arrr));
//!-------------------------------------------------------------------------------------------------------------
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
//!-------------------------------------------------------------------------------------------------------------
let words = ["apple", "banana", "cherry"];

function capitalizeWords(arr){
return arr.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
}

console.log(capitalizeWords(words));
//!Find Sum of Elements Greater than a Number Using Reduce Method
function sumGreaterThan(arr, num) {
    return arr.reduce((sum, value) => value > num ? sum + value : sum, 0);
}

// Example usage:
let numbers = [3, 10, 20, 5, 15];
let thresholdd = 10;
console.log(sumGreaterThan(numbers, thresholdd)); 

//!-------------------------------------------------------------------------------------------------------------
//Find Non-Repeating Elements from Two Arrays
function findUniqueElements(a1,a2){
    let spread=[...a1,...a2]
    return spread.filter((num)=>!(a1.includes(num)&&a2.includes(num)))
    }
    
    console.log(findUniqueElements(a1,a2));
    //!-------------------------------------------------------------------------------------------------------------
    //Remove Adjacent Odd Elements from an Array
    function removeAdjacentOdds(arr) {
        let result = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
            result.push(arr[i]);
          }
        }
        return result;
      }



      //* or

      function removeAdjacentOdd(arr) {
        return arr.filter((num, index) => {
            return !(num % 2 !== 0 && arr[index - 1] % 2 !== 0);
        });
    }
    
    console.log(removeAdjacentOdd([1, 3, 2, 5, 7, 8, 9]));  
    // Output: [1, 2, 5, 8, 9]

    
      //* or

      function removeAdjacentOdd(arr) {
        return arr.reduce((acc, num, index) => {
            if (!(num % 2 !== 0 && arr[index - 1] % 2 !== 0)) {
                acc.push(num);
            }
            return acc;
        }, []);
    }
    
    console.log(removeAdjacentOdd([1, 3, 2, 5, 7, 8, 9]));  
    // Output: [1, 2, 5, 8, 9]
//!-------------------------------------------------------------------------------------------------------------

let a=[7,4,7,9,3,6,8,6,2]
let s=["hello",'myself','sooryadev']
let str='the world should be communist'
let arr=[]

//!!------------------------------------------------------------------------------------------------------------



//!!------------------------------------------------------------------------------------------------------------
//? find Unique

// for(let i=0;i<a.length;i++){
//     let unique=true
//     for(let j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//             unique=false
//         }
//     }
//     if(unique){
//         arr.push(a[i])
//     }
// }
//!!------------------------------------------------------------------------------------------------------------
//?Capitalize each element in an array of strings
let a1=[]
for(let i=0;i<s.length;i++){
   a1.push(s[i].toUpperCase())
       
}
console.log(a1);
//!!------------------------------------------------------------------------------------------------------------
//?Capitalize first letter of  each element in an array of strings
let a2=[]
for(let i=0;i<s.length;i++){
   a2.push( s[i][0].toUpperCase()+s[i].slice(1))
}
console.log(a2)
//!!------------------------------------------------------------------------------------------------------------
//? Find Sum of Elements Greater than a Number Using Reduce Method
console.log(a);
function sumGreaterThan(a,num){
   let a3= a.reduce((acc,curr)=>curr>num?acc+curr:acc,0)
   console.log(a3);
   
}
sumGreaterThan(a,3)
//!!------------------------------------------------------------------------------------------------------------
// //?Sum of even numbers with a condition that for every occurrence of an even number subtract 2 from the value
let sum=0
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        sum+=a[i]-2
    }
}
console.log(sum)
console.log(a)

//!--------------------------------------------------------------------------------------------------------------
//?Filter numbers with fractions
let nums=[1,2.2,3.54,6.8,9.01,7]
let a4=nums.filter((num)=>num%1==0)
console.log(a4);

//!--------------------------------------------------------------------------------------------------------
//?Write a program to identify and return the odd numbers that appear more than once in an array
function findOdd(arr){
    let obj={}
    let res=[]
    console.log(a)
    for(let num of arr){
        if(num%2!=0){
            obj[num]=(obj[num]||0)+1
        }
    }
    console.log(obj);
    for(let key in obj){
        if(obj[key]>1){
res.push(key)
        }
    }
    console.log(res)
}
findOdd(a)

//!-----------------------------------------------------------------
//?Write a function which will move all the zeros in 
//? an array to the right,  with minimal time complexity
function moveZeros(arr){
    let pos=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[pos]=arr[i]
            pos++
        }

    }
    for(let j=pos;j<arr.length;j++){
        arr[j]=0
    }
    return arr
    
}

console.log( moveZeros([0,1,2,0,4,5,0]));

//!-----------------------------------------------
//? Find the second largest even number in an array without sorting
function secondLargestEven(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // only check even numbers
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] < largest && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

//!------------------------------------------------------------------
//?Array.reduce: Sum of positive numbers
function positiveSum(arr){
    return arr.reduce((acc,curr)=>curr>0?acc+=curr:acc,0)

}
console.log(positiveSum([-1,-5,7,8]));

//!------------------------------------------------------------------
//?Remove duplicates from an array using recursion

function removeDup(arr,idx=0,unique=[]){
    if(idx>=arr.length){
        return unique
    }
    if(!unique.includes(arr[idx])){
        unique.push(arr[idx])
    }
    return removeDup(arr,idx+1,unique)
}
console.log(removeDup([1,2,3,2,1,4]));













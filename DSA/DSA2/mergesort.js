
//! Time Complexity Analysis:

//* 1. Divide Step:
    //? At each level of recursion, the array is divided into two halves until we reach arrays of size 1.
    //? If the original array has n elements, the array will be divided log⁡ 𝑛 times (because each division reduces the size by half).
    //? Therefore, the depth of the recursion tree is logn.

//* 2. Merge Step:
    //? At each level of recursion (each level of the recursion tree), the merging process involves going through all 𝑛 elements to combine the sorted halves.
    //? Since there are logn levels and each level involves merging n elements, the total work done at each level is 𝑂(𝑛).
    //? Across all levels, this results in O(n)×logn operations.
//* Combining Both:
    //? Divide: O(logn) for the depth of the recursion tree.
    //? Merge: O(n) for merging at each level.

//* So the total time complexity is O(n log n)


function mergeSort(arr) {
    // Base case: an array with 1 or no elements is already sorted
    if (arr.length <= 1) return arr;
    
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid));   // Sort the right half
    
    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = []; // Initialize an empty array for sorted elements

    // Compare elements of left and right arrays and merge them in sorted order
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift()); // Remove the first element of left and add it to sortedArr
        } else {
            sortedArr.push(right.shift()); // Remove the first element of right and add it to sortedArr
        }
    }

    // If there are remaining elements in either left or right, add them to sortedArr
    return sortedArr.concat(left).concat(right);
}

// Example usage:
const arr = [45, 12, 34, 78, 23];
console.log(mergeSort(arr)); // Output: [12, 23, 34, 45, 78]

// Recursive Splitting:

// The mergesort function divides the array into smaller subarrays until each subarray has only one element (or no elements).
// The base case checks if the array length is less than or equal to 1, in which case it simply returns the array because it's already sorted.
// 2. Finding the Middle:

// The array is split into two halves by calculating the middle index:
// let mid = ~~(arr.length / 2).
// The ~~ operator is a shorthand for Math.floor(), which ensures that the middle index is rounded down to an integer.
// 3. Recursively Sorting Each Half:

// The array is recursively split into two halves:
// left = mergesort(arr.slice(0, mid)) returns a sorted version of the left half.
// right = mergesort(arr.slice(mid)) returns a sorted version of the right half.
// 4. Merging Sorted Halves:

// Once both left and right halves are sorted, they are merged back together using the merge function.
// The merge function compares the first element of the left and right arrays and pushes the smaller one into the sorted array (sortedArr).
// This continues until one of the arrays is empty, at which point the remaining elements of the other array are added to the sorted array.
// 5. Example Walkthrough:

// Initial array: [45, 12, 34, 78, 23]
// The array is split into two halves:
// Left: [45, 12]
// Right: [34, 78, 23]
// Each half is recursively sorted, then merged back together.


function split(arr){
    if(arr.length<2) return arr
    let mid=Math.floor(arr.length/2)
    let left=split(arr.slice(0,mid))
    let right=split(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}






















let arrr = ["arun", "siju", "muneer", "anas", "zulaikh", "dhishon"]

function mergesort(arr){
    if(arr.length<= 1) return arr
    let mid = ~~(arr.length/2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    console.log(sortedArr);
    return [...sortedArr, ...left, ...right]
}

console.log(mergesort(arr));

let arr2 = [52,64,86,42,13,15,75,64,58]

function sorting(arr){
    if(arr.length <=1) return arr
    let mid = ~~(arr.length/2)
    let left = sorting(arr.slice(0,mid))
    let right = sorting(arr.slice(mid))
    return merging(left, right)
}

function merging(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}


console.log(sorting(arr2));
//! Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order.

//* Start at the beginning of the list.
//* Compare the first two items.
//* If the first item is bigger than the second item, swap them.
//* If the first item is not bigger than the second item, do nothing.
//* Move to the next pair of items.
//* Repeat the process for each pair of items until you reach the end of the list.
//* Start again from the beginning and repeat the process.
//* Keep repeating until you can go through the whole list without needing to make any swaps.


let arr = [6,8,3,5,1,9,4]

function bubblesort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i< arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
        return arr
}

console.log(bubblesort(arr));


let str = ["zulaikh", "vishnu", "siju", "anas", "Rahul"]

function sorting(str){
    let n = str.length
    for(let i =0; i< n; i++){
        for(let j = 0; j< n-i-1; j++){
            if(str[j].toLowerCase() > str[j+1].toLowerCase()){
                let temp = str[j]
                str[j] = str[j+1]
                str[j+1] = temp
            }
        }
    }
    return str
}


console.log(sorting(str));


let nums =[56,21,42,69,89,78,23,56,42,16,18,59]

function numberSorting(nums){
    let n = nums.length
    for(let i = 0; i< n; i++){
        for(let j = 0; j< n-i-1; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

console.log(numberSorting(nums)); 



// Bubble Sort Process:
// Outer Loop:
// The outer loop runs over the entire array multiple times. With each complete pass of the array, the largest unsorted element "bubbles up" to its correct position, reducing the number of unsorted elements that need to be checked in subsequent iterations.

// Inner Loop:
// The inner loop compares adjacent elements (arr[j] and arr[j + 1]) and swaps them if they are in the wrong order (i.e., if arr[j] is greater than arr[j + 1]). This continues for each adjacent pair within the unsorted part of the array.

// Swapping Elements:
// Instead of using a temporary variable to swap elements, a destructuring assignment is used to swap arr[j] and arr[j + 1] in a single line:
// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]].

// Optimizing with a swapped Flag:
// A boolean flag swapped is used to track whether any swaps occurred during a pass. If no swaps occur, the array is already sorted, and the algorithm can break out of the loop early, improving efficiency.

// Termination:
// The outer loop runs until the array is fully sorted or until no swaps are made during an inner loop pass, indicating that the array is sorted.

// Example Walkthrough:

// Initial array: [45, 12, 34, 78, 23]
// First pass: Compares and swaps adjacent elements:
// Compare 45 and 12, swap them → [12, 45, 34, 78, 23]
// Compare 45 and 34, swap them → [12, 34, 45, 78, 23]
// Compare 45 and 78, no swap.
// Compare 78 and 23, swap them → [12, 34, 45, 23, 78]
// Second pass: Sorts the remaining part of the array.
// Compare 34 and 23, swap them → [12, 34, 23, 45, 78]
// This process continues until no more swaps are needed, and the array becomes fully sorted: [12, 23, 34, 45, 78]
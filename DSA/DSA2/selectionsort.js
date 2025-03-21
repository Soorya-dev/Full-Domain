//! a simple and efficient sorting algorithm that repeatedly selects the smallest or largest 
// element from an unsorted list and moves it to the sorted portion.

function selectionSort(arr){
    let n  = arr.length
    for (let i = 0; i < n; i++) {   //?n
        let minIndex = i
        for (let j = i+1; j < n; j++) {  //?n
             if(arr[j] < arr[minIndex]){
                minIndex = j;
             }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([30, 10, 40, 25, 5, 3, 15]));


//* Time complexity  = O(n^2)
//* Space complexity  = O(1)



// Selection Sort Process:
// Initial Setup:
// The outer loop runs from the start of the array to the second-last element, as we are finding the
//  minimum value in the remaining unsorted part of the array and placing it in its correct position.

// // Finding the Minimum:
// // // In each iteration of the outer loop, the algorithm assumes the first element of the unsorted part
// //  (starting at index i) is the minimum (minIndex). It then compares this element with all subsequent
//  elements in the unsorted part (inner loop). If it finds an element smaller than the current minimum, 
//  it updates minIndex to that element's index.

// // Swapping Elements:
// // After the inner loop completes, if the minimum element is not already in the correct position,
//  the algorithm swaps it with the element at index i.

// // Repeat for All Elements:
// // This process is repeated for all elements of the array. In each iteration,
// the smallest unsorted element is placed in its correct position in the sorted part.

// // Example Walkthrough:

// // Initial array: [30, 10, 40, 25, 5, 3, 15]
// // In the first iteration, the minimum element is 3, so it swaps 30 and 3.
//  The array becomes [3, 10, 40, 25, 5, 30, 15].
// // In the second iteration, the minimum element is 5, so it swaps 10 and 5.
//  The array becomes [3, 5, 40, 25, 10, 30, 15].
// This process continues until the entire array is sorted.


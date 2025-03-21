// let arr = [5,6,3,4,1,9,26,74,56,20]

// function quicksort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let pivot = arr[0]
//     let left = []
//     let right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else {
//             left.push(arr[i])
//         }
//     }
//     return [...quicksort(right), pivot, ...quicksort(left)]
    
// }

// console.log(quicksort(arr));

//! Time complexity

//* Average Case  - O(nlog n)
//* Best case  - O(nlog n)
//* Worst case  - (n^2)

//! Space complexity

//* Average case  - O(log n)
//* Worst case  - O(n)

function quicksort(array){
    if(array.length<=0) return array
    let piviot=array[0]
    let left=[]
    let right=[]
    for(let i=1;i<array.length;i++){
        if(array[i]>piviot){
            right.push(array[i])
        }else{
            left.push(array[i])
        }
    }
    return [...quicksort(left),piviot,...quicksort(right)]
}
array=[34,566,23,776,1,2,7,0]
console.log(quicksort(array))



// Quick Sort Process:
// Base Case:
// The function first checks if the array has 0 or 1 element, which is already sorted, so it directly returns the array.

// Choosing Pivot:
// The algorithm selects the first element of the array as the pivot. In this case, it's array[0].

// Partitioning the Array:
// The array is then split into two parts:

// Left subarray: Contains all elements smaller than or equal to the pivot.
// Right subarray: Contains all elements greater than the pivot.
// This is achieved by looping through the rest of the array (from index 1 to the end) and comparing each element with the pivot. Elements less than or equal to the pivot go into the left array, and elements greater than the pivot go into the right array.

// Recursively Sort:
// After partitioning, the algorithm recursively applies quicksort to both the left and right subarrays.

// Combine Results:
// Once both the left and right subarrays are sorted, the final result is obtained by combining the sorted left array, the pivot, and the sorted right array.

// Example Walkthrough:

// Initial array: [34, 566, 23, 776, 1, 2, 7, 0]
// Pivot: 34
// Left subarray: [23, 1, 2, 7, 0]
// Right subarray: [566, 776]
// Recursively sorting the left and right subarrays, then combining them with the pivot, gives the final sorted array.



function heapify(arr, length, parentIndex){
    let largest = parentIndex
    let left = parentIndex * 2+1
    let right = left +1
    if(left < length && arr[left] > arr[largest]){
        largest = left
    }
    if(right < length && arr[right] > arr[largest]){
        largest = right
    }
    if(largest !== parentIndex){
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]]
        heapify(arr, length, largest)
    }
    return arr
}

function heapSort(arr){
    let length = arr.length
    let lastParentNode = ~~(length/1-2)
    let lastChild = length -1

    while(lastParentNode >= 0){
        heapify(arr, length, lastParentNode)
        lastParentNode--
    }
    while(lastChild>=0){
        [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]]
        heapify(arr, lastChild, 0)
        lastChild--
    }
    return arr
}

const arr = [50,38,46,26,5,10,34,98,35,29,16]

console.log(heapSort(arr)); 



// function heapSort(arr) {
//     const n = arr.length;

//     // Step 1: Build the max-heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Step 2: Extract elements one by one from the heap
//     for (let i = n - 1; i > 0; i--) {
//         // Swap the root (largest element) with the last element in the heap
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         // Restore the max-heap property in the reduced heap
//         heapify(arr, i, 0);
//     }

//     return arr; // Return the array sorted in ascending order
// }

// // Helper function to maintain the max-heap property
// function heapify(arr, n, i) {
//     let largest = i; // Assume the root is the largest element
//     let left = 2 * i + 1;  // Left child index
//     let right = 2 * i + 2; // Right child index

//     // If the left child exists and is larger than the root
//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     // If the right child exists and is larger than the current largest
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     // If the largest is not the root, swap and continue heapifying the affected subtree
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
//         heapify(arr, n, largest);  // Recursively heapify the affected subtree
//     }
// }

// const arr = [50, 38, 46, 26, 5, 10, 34, 98, 35, 29, 16];
// console.log(heapSort(arr)); // Output: sorted array in ascending order
























// function heapSort(arr) {
//     const n = arr.length;

//     // Step 1: Build the min-heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Step 2: Extract elements one by one from the heap
//     for (let i = n - 1; i > 0; i--) {
//         // Swap the root (smallest element) with the last element in the heap
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         // Restore the min-heap property in the reduced heap
//         heapify(arr, i, 0);
//     }

//     return arr; // Return the array sorted in descending order
// }

// // Helper function to maintain the heap property
// function heapify(arr, n, i) {
//     let smallest = i; // Assume the root is the smallest element
//     let left = 2 * i + 1;  // Left child index
//     let right = 2 * i + 2; // Right child index

//     // If the left child exists and is smaller than the root
//     if (left < n && arr[left] < arr[smallest]) {
//         smallest = left;
//     }

//     // If the right child exists and is smaller than the current smallest
//     if (right < n && arr[right] < arr[smallest]) {
//         smallest = right;
//     }

//     // If the smallest is not the root, swap and continue heapifying the affected subtree
//     if (smallest !== i) {
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap
//         heapify(arr, n, smallest);  // Recursively heapify the affected subtree
//     }
// }

// const arr = [50, 38, 46, 26, 5, 10, 34, 98, 35, 29, 16];
// console.log(heapSort(arr)); // Output: sorted array in descending order

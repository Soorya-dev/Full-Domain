


let arr = [9, 2, 6, 33, 8, 41, 9, 7, 12, 34];

function insertion(arr){
    let n = arr.length
    for(let i = 1; i< n ; i++){
        let key = arr[i]
        let j = i-1
        while(j >=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertion(arr));



// Initial Setup:

// The array arr is given as input.
// We calculate the length of the array using n = arr.length.
// Starting the Loop:

// The loop starts at index 1 (i = 1) because the first element (index 0) is already considered sorted. We need to "insert" the rest of the elements into the sorted part.
// Picking the Key:

// For each iteration, the element at position i is called the "key." This is the element we will place into its correct position within the already sorted part of the array (everything before i).
// Comparing the Key:

// We compare the key to the elements that come before it (i.e., those at indices 0 to i-1).
// We use a while loop to do this. As long as the current element (arr[j]) is greater than the key and j hasn't moved out of bounds (i.e., j >= 0), we keep shifting elements to the right to make space for the key.
// Shifting Elements:

// For every comparison where arr[j] > key, we move the element arr[j] one position to the right (arr[j + 1] = arr[j]).
// We decrease j to keep moving left in the array and continue checking the rest of the elements that are already sorted.
// Inserting the Key:

// Once we find the correct position for the key (when arr[j] <= key or j goes out of bounds), we insert the key at position j + 1.
// Repeat the Process:

// The process repeats for every element in the array. Each time, the "sorted part" of the array grows by one element, and we place the next element in its correct position within that sorted subarray.
// Final Output:

// Once all elements are processed, the array is fully sorted, and we return it.
// Example Walkthrough:
// Let's break down the sorting process for the given array arr = [9, 2, 6, 33, 8, 41, 9, 7, 12, 34]:

// Step 1: Start with the second element (2), and compare it to 9. Since 2 is smaller, shift 9 to the right and insert 2 before it.
// Array: [2, 9, 6, 33, 8, 41, 9, 7, 12, 34]

// Step 2: Next, take 6. Compare it to 9 (shift 9), then compare it to 2 (leave it). Insert 6 in between.
// Array: [2, 6, 9, 33, 8, 41, 9, 7, 12, 34]

// Step 3: Take 33. It's larger than 9, so leave it in place.
// Array: [2, 6, 9, 33, 8, 41, 9, 7, 12, 34]

// Step 4: Take 8. Compare it to 33 (shift 33), then 9 (shift 9), then 6 (leave it). Insert 8 after 6.
// Array: [2, 6, 8, 9, 33, 41, 9, 7, 12, 34]

// Step 5: Continue this process for the rest of the elements. Eventually, the array becomes fully sorted.

// By the end of this process, the sorted array is: [2, 6, 7, 8, 9, 9, 12, 33, 34, 41].
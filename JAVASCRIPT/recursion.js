function sumOfDigits(nStr) {
    if (nStr.length === 0) return 0;
    return parseInt(nStr[0]) + sumOfDigits(nStr.slice(1));
  }
  
  // Example usage:
  const num = 12345;
  console.log(sumOfDigits(num.toString())); // Output: 15
  

  //! array sum--------------------------
  function sum(arr,ind=0){
    if(ind===arr.length) return 0
    return arr[ind]+sum(arr,ind+1)
}
console.log(sum([1,2,3,4]))

//! factorial----------------------------
function factorial(n){
    if(n==0) return 1
    return n*factorial(n-1)
}
console.log(factorial(4))

//!countdown-------------------------------------
function countdown(n){
    if(n<=0) return 
    console.log(n)
     countdown(n-1)
}
countdown(5)


//!fibonacci-------------------------------------
function fibonacci(n){
    if(n<2) return n 
    return fibonacci(n-1)+fibonacci(n-2)
   
}
console.log(fibonacci(6))


//!paliandrome-------------------------------------------
function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base case: crossed indices or single character
  if (start >= end) return true;

  // If first and last characters don't match
  if (str[start] !== str[end]) return false;

  // Recur for the inner substring
  return isPalindrome(str, start + 1, end - 1);
}
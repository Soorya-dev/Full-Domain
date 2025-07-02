function sumOfDigits(nStr) {
    if (nStr.length === 0) return 0;
    return parseInt(nStr[0]) + sumOfDigits(nStr.slice(1));
  }
  
  // Example usage:
  const num = 12345;
  console.log(sumOfDigits(num.toString())); // Output: 15
  
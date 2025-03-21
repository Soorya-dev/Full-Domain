

const arr = [34,21,45,67,5,89,88,96]

function secondLargestEvenNumber(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);
  let unique = Array.from(new Set(evenNumbers));
  console.log(unique);
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargestEvenNumber(arr));

function sumOfArray(arr){
    let result = arr.filter((num)=>{
        
    })
}

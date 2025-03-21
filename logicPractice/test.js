let arr = [5,3,0,4,9,8,1,7,6,2]


function printOddEven(arr){
    let odd =[]
    let even = []
    let k = 0
    for(let i = 0; i< arr.length; i++){
      
        if(arr[i] % 2 === 0 && arr[i] !==0){ 
                
            even[k] = arr[i]
            k++
            }
        if(arr[i]%2 !== 0 && arr[i] !==0){
            odd[k]=arr[i]
        }
    }
    return {odd, even}
}

console.log(printOddEven(arr));




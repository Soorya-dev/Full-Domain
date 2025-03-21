let arr = [7,8,6,0,7,1,2,4,9,7,0,1,5,6];

function ducplicate(arr){
    let dup = []
    let uniq = []
    for(let i =0; i< arr.length; i++){
        for(let j =i+1; j< arr.length; j++){
            if(arr[i] === arr[j]){
                if(!dup.includes(arr[i])){
                        dup.push(arr[i])
                }
            }
        }
    }
   
    return dup
}

console.log(ducplicate(arr));
let arr = [5, 1, 9, 0, 0, 1, 7, 6, 9, 1, 0, 5];

function repetedEle(arr) {
let res= []
let flag  = 0
for(let i = 0; i< arr.length; i++){
    let flag = 0
    for(let j = i+1; j< arr.length; j++){
        if(arr[i] === arr[j]){
            flag = 1
            break;
        }
    }
    if(flag === 0){
        res.push(arr[i])
    }
}
return res
}

console.log(repetedEle(arr));

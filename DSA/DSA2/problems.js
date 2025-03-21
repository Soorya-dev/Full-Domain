function isPal(str){
    let stack=[]
    for(let char of str){
        stack.push(char)
    }
    for(let char of str){
        if(char!==stack.pop()){
            return false
        }
    }
    return true
}
console.log(isPal("holloh"))
console.log(isPal("hello"))
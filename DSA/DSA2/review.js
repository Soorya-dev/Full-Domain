// function split(arr){
//     if(arr.length<2) return arr
//     let mid=Math.floor(arr.length/2)
//     let left=split(arr.slice(0,mid))
//     let right=split(arr.slice(mid))
//     // console.log(left)
//     return merge(left,right)
// }
// function merge(left,right){
//     let sorted=[]
//    while(left.length&&right.length){
//     if(left[0]<right[0]){
//         sorted.push(left.shift())
//     }else{
//         sorted.push(right.shift())
//     }
// }

//     return [...sorted,...left,...right]
// }
// let arr=[3,2,1,5,4,8,6]
// console.log(split(arr))



//queue using stack
//[1,2]
//[2,1]

// class queueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
  
//     enqueue(elem){
//     this.stack1.push(elem)

//     }
//     dequeue(){
//         if(this.stack2.length!==0){
//             while(this.stack1.length!==0){
//                 this.stack2.push(stack1.pop())
               
                
//             }
//         }
//         return this.stack2.pop()
        
//     }
//     print(){
//         console.log(this.stack2,this.stack1)
//     }

// }

// let stack=new queueUsingStack()
// stack.enqueue(10)
// stack.enqueue(11)
// stack.enqueue(12)
// stack.print()
// stack.dequeue(10)
// stack.print()

function hash(key,size){
    let hashed=0
    for(let i=0;i<key.length;i++){
        hashed+=key.charCodeAt(1)
    }
    return hashed%size
}
class HashTable{
    constructor(){
        this.size=10
        let bucket=new Array(this.size)
        for(let i=0;i<bucket.length;i++){
            this.bucket[i]=new Map()
        }
    }
    insert(key,value){
        let idx=hash(key,this.size)
        this.bucket[idx].set(key,value)
    }
    remove(key){
        let idx=hash(key,this.size)
        this.bucket[idx].delete(key)
    }
    search(key){
        let idx=hash(key,this.size)
        return this.bucket[idx].get(key)
    }
    print(){
        console.log(this.bucket)
    }
}
let ht=new HashTable()
ht.insert("name","sooryadev")
ht.insert("age","18")
ht.insert("batch","155")
ht.print()

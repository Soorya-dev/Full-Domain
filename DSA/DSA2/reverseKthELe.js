class Queue{
    constructor(){
        this.items = []
    }
    enqueue(x){
        this.items.push(x)
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length ===0
    }
    size(){
        return this.items.length
    }
    fornt(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.items[0]
    }
}

function reverseKthElement(queue, k){
    if(queue.isEmpty() || k> queue.size() || k<=0){
        return
    }
    let stack  = []
    for(let i = 0; i< k; i++){
        stack.push(queue.dequeue())
    }
    while(stack.length >0){
        queue.enqueue(stack.pop())
    }
    let size = queue.size()
    for(let i = 0; i< size-k; i++){
        queue.enqueue(queue.dequeue())
    }
}



class Queue{
    constructor(){
    this.item = []
    }
    enqueue(ele){
        this.item.push(ele)
    }
    dequeue(){
        if(this.isEmpty()){
            return "underflow, queue is empty"
        }
        this.item.shift()
    }
    isEmpty(){
        return this.item.length === 0
    }
    fornt(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.item[0]
    }
    size(){
        return this.item.length
    }
    print(){
        let queueList = ''
        for (let i = 0; i < this.size() ; i++) {
            queueList += this.item[i] + " "  
        }
        console.log(queueList);
    }
}


const myQueue = new Queue()


myQueue.enqueue(50)
myQueue.enqueue(100)
myQueue.enqueue(150)
myQueue.print()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.dequeue());
console.log(myQueue.fornt());
myQueue.print()
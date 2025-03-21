
// A circular queue is a type of queue data structure that overcomes the limitation of a linear queue
// by connecting the end of the queue back to the front, forming a circle.
//This allows the queue to efficiently utilize the available space and avoid the problem of wasted memory, 
// which occurs in a linear queue when elements are dequeued
//  but the space at the front remains unused.


class circularQueue{
    constructor(size){
        this.queue=[]
        this.size=size
    }
    enqueue(value){
        if(this.size===this.queue.length) return false
        this.queue.push(value)
    }
    dequeue(){
        this.queue.shift()
    }
    Front(){
        if(this.queue.length<1) return -1
        return this.queue[0]
    }
    Rear(){
        return this.queue[this.queue.length-1]

    }
    isEmpty(){
        return this.queue.length===0
    }
    isFull(){
        return this.size===this.queue.length
    }
    printQueue() {
        console.log(this.queue);
    }

}
let cq=new circularQueue(3)
cq.enqueue(10)
cq.enqueue(11)
cq.enqueue(12)
cq.enqueue(13)
cq.printQueue()




//using prototype

// const circularQueue=function(k){
//     this.queue=[]
//     this.size=k
// }
// circularQueue.prototype.enqueue=function(value){
//     if(this.size===this.queue.length) return false
//     this.queue.push(value)
//     return true
// }
// circularQueue.prototype.dequeue=function(){
//     if(this.queue.length<1) return false
//     this.queue.shift()
//     return true
// }
// circularQueue.prototype.front=function(){
//     if(this.queue.length<1) return false
//     return this.queue[0]
// }
// circularQueue.prototype.rear=function(){
//     if(this.queue.length<1) return false
//     return this.queue[this.queue.length-1]
// }
// circularQueue.prototype.isEmpty=function(){
//     return this.queue.length===0
// }
// circularQueue.prototype.isFull=function(){
//     return this.size===this.queue.length
// }
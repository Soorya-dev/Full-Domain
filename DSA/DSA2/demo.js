//! convert stack in to queue

class MyStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
}

MyStack.prototype.enqueue = function (x) {
  this.s1.push(x);
  console.log(this.s1, 'asd');
};

MyStack.prototype.dequeue = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  console.log(this.s2, '1234');
  
  return this.s2.pop();
};

MyStack.prototype.isEmpty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

MyStack.prototype.front = function () {
    if(this.s2.length ===0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length-1]
};

const queue = new MyStack();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.dequeue(),'dequeue');

console.log(queue.front())




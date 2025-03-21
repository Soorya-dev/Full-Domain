class MyQueue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
}

MyQueue.prototype.push = function (x) {
  this.q1.push(x);
  console.log(this.q1);
};

MyQueue.prototype.pop = function () {
 while(this.q1.length > 1){
    this.q2.push(this.q1.shift())
 }
 console.log(this.q2,'1234');
 
 const popped = this.q1.shift()
 console.log(popped,'popped');
 
 [this.q1, this.q2] = [this.q2, this.q1]
 return popped
};

myQueue.prototype.top = function(){

}

const stack = new MyQueue();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop(),'zxc');



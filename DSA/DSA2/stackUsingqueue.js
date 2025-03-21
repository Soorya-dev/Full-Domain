//* Implementing stack using Queues
//* Implement a last - in - first -out(LIFO) stack using only two queues.
//* The implemented stack should support all the functions of a stak(push, pop, top, and empty)


var MyStack = function(){
    this.q1 = []
    this.q2 = []
}

MyStack.prototype.push = function(x){
while(this.q1.length !==0){
    this.q2.push(this.q1.shift())
}
this.q1.push(x)
while(this.q2.length !==0){
    this.q1.push(this.q2.shift())
}
}

MyStack.prototype.pop = function(){
   return this.q1.shift()
}
MyStack.prototype.top = function(){
    return this.q1[0]
}
MyStack.prototype.empty = function(){
    return this.q1.length === 0
}
MyStack.prototype.print = function(){
    return [...this.q1]
}


const stack = new MyStack()

stack.push(2)
stack.push(3)
stack.push(5)
console.log(stack.top());
console.log(stack.print());
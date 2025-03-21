// Define a Node class to represent each element in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the Stack class
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    this.top = this.top.next;
    this.size--;
  }

  // Method to peek at the top element of the stack
  peek() {
    return this.top ? this.top.data : null;
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Method to get the size of the stack
  getSize() {
    return this.size;
  }

  // Method to print the elements of the stack
  printStack() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Stack elements:");
stack.printStack();

stack.pop();

console.log("Stack after popping:");
stack.printStack();

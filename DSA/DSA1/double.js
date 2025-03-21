const { ReadableStreamDefaultController } = require("node:stream/web");

class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class doublyList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(val) {
    let node = new Node(val);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      node.prev = curr;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      if (curr.next) {
        curr.next = curr.next.next;
        if (curr.next) {
          curr.next.prev = curr;
        }
      }
  }

  removeMiddle(){
    if(!this.head){
        return
    }
    let slow = this.head
    let fast = this.head.next
    while(false !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    let middle  = slow
    if(middle.prev){
        middle.prev.next = middle.next
    }
    if(middle.next){
        middle.next.prev = middle.prev
    }
    if(middle === this.head){
        this.head = middle.next
    }
  }

  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += ` ${curr.val}`;
      curr = curr.next;
    }
    console.log(list);
  }
}

const list = new doublyList();

list.prepend(10);
list.append(20);
list.removeMiddle()
list.print();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }
  insertAt(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }
    const node = new Node(val);
    if (index === 0) {
      this.prepend();
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }
  removeMiddle() {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.head;
    let length = 0;
    while (curr !== null) {
      length++;
      curr = curr.next;
    }

    let mid = Math.floor(length / 2);
    curr = this.head;
    for (let i = 0; i < mid - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }

  removeNthNode(k) {
    if (this.isEmpty()) {
      return;
    }
    let length = 0;
    let curr = this.head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    console.log(length);
    let removedNode = length - k;
    console.log(removedNode);
    curr = this.head;
    if (removedNode === 0) {
      return this.head.next;
    } else {
      while (removedNode > 1) {
        curr = curr.next;
        removedNode--;
      }
      curr.next = curr.next.next;
      return this.head;
    }
  }
  removeDuplicate(){
    if(!this.head){
      return
    }
    let curr = this.head
    let seen = new Set()
    let prev = null
    while(curr){
      if(seen.has(curr.val)){
        prev.next = curr.next
      }else {
        seen.add(curr.val);
        prev = curr
        
      }
      curr = curr.next;
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

const list = new linkedList();

list.append(40);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(40);
list.append(70);
list.print();
//list.removeNthNode(2);
list.removeFrom(3)
//list.removeDuplicate()
list.print();

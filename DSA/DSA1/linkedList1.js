

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class demoList {
  constructor() {
    
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }
  append(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      let curr = this.head;
      while (curr) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head.next = this.head;
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
  removeByValue(val) {
    if (!this.head) {
      return;
    }
    if (this.head.val === val) {
      this.head.next = this.head;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.val !== val) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
      }
    }
  }
  removeMiddle() {
    if (!this.head) {
      return;
    }
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast !== null && fast.next !== null) {
      prev = slow;
      
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev !== null) {
      prev.next = slow.next;
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

const list = new demoList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
list.prepend(70);
list.print();
// list.removeFromIndex(2)
list.removeMiddle();
list.print();

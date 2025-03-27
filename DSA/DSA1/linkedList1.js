

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
 //!Create two linked lists using objects, find the sum of last values of both linked lists using a function, reverse the resultant sum and find the sum of that elements in the result, convert the resultant into a linked list with each digit as a node in linkedlist


 getLastValue() {
  if (!this.head) return null;
  let current = this.head;
  while (current.next) {
      current = current.next;
  }
  return current.value;
}

static reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

static sumDigits(num) {
  return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

static createFromNumber(num) {
  const list = new LinkedList();
  num.toString().split('').forEach(digit => list.append(parseInt(digit)));
  return list;
}
//!print

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

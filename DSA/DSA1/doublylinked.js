
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
  }
 
  addFirst(val) {
    const node = new Node(val);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }
  addLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    node.prev = curr;
    curr.next = node;

  }
  size() {
    let curr = this.head;
    let length = 0;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length
  }

  insertAt(index, val) {
    if (index < 0 || index > this.size()) {
      console.log("invalid index");
      return;
    }
    const node  = new Node(val)
    if (index === 0) {
      this.addFirst(val);
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      node.prev = curr;
      node.next = curr.next;
      if (curr.next) {
        curr.next.prev = node;
      }
      curr.next = node
    }
  }

  removeAtFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
  }
  removeAtLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size()) {
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
   if(curr.next){
    curr.next = curr.next.next
    if(curr.next){
      curr.next.prev = curr
    }
   }
  }

  removeMiddle(){
    if(!this.head){
      return
    }
    let slow = this.head
    let fast  =this.head
    while(fast !== null && fast.next !== null){
      slow = slow.next
      fast = fast.next.next
    }
    let middle = slow
    if(middle.prev){
      middle.prev.next = middle.next
    }

    if(middle.next){
      middle.next.prev = middle.prev
    }
    if(middle === this.head){
      this.head = middle.next
    }
    return middle.val
  }
  reverse() {
    if (!this.head || !this.head.next) {
      return; // No need to reverse if list is empty or has only one node
    }

    let current = this.head;
    let prev = null;

    while (current !== null) {
      // Store the next node
      let nextNode = current.next;

      // Swap the prev and next pointers
      current.next = prev;
      current.prev = nextNode;

      // Move prev and current one step forward
      prev = current;
      current = nextNode;
    }

    // Update the head to the last node (which is now the first)
    this.head = prev;
  }

  

  print(){
    if(this.size() === 0){
      console.log('is empty');
    }
      let curr = this.head
      let list = ''
      while(curr) {
        list += ` ${curr.val}`
        curr = curr.next
      }
    console.log(list);
  }
}


const list = new doublyLinkedList()

list.print()
list.addFirst(20)
list.addFirst(30)
list.addFirst(40)
list.addLast(40)
list.insertAt(1,80)
//list.removeAtFirst()
//list.removeAtLast()
// list.removeFrom(6)
list.print()
list.removeMiddle()
list.print()
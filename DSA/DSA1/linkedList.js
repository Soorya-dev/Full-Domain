class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;  
    return this.size;
  }
//O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {

      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >=this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next; 
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  searchValue(value) {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while(curr) {
      if(curr.value === value){
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }
  reverse(){
    let prev = null;
    let curr = this.head;
    while(curr){
        let next  = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log("listvalues", listValues);
    }
  }
}


const list = new LinkedList();

console.log("List is empty", list.isEmpty());
console.log("List size", list.getSize());
list.print();
list.prepend(20);
list.print();
list.prepend(30);
list.print();
list.prepend(40);
list.prepend(80);
list.print();
console.log("List size", list.getSize());

console.log('12345',list.searchValue(30));

list.print();
list.reverse()
list.removeFrom(40)
list.print();


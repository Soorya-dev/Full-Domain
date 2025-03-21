class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class demoList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr !== null) {
        list += ` ${curr.val}`;
        curr = curr.next;
      }
      console.log(list, "list.........");
    }
  }

  prepend(val) {
    const node = new Node(val)
    if(this.isEmpty()){
        this.head = node;
        this.tail = node;
    }else {
        node.next = this.head
        this.head = node
    }
    this.size++
  }

  append(val){
    const node = new Node(val);
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }else {
        this.tail.next = node
        this.tail = node
    }
    this.size++
  }

  removeFromFront(){
    if(this.isEmpty()){
        return null;
    }
    const removedNode = this.head.val
    this.head = this.head.next
    this.size--
    return removedNode
  }
  removeFromEnd(){
    if(this.isEmpty()){
        return null;
    }
    const removedNode = this.tail.val
    if(this.size ===1){
        this.head = null
        this.tail = null
    }else {
        let prev = this.head
        while(prev.next !== this.tail){
            prev = prev.next;
        }
        prev.next = null
        this.tail = prev
    }
    this.size--
    return removedNode;
  }
  reverse(){
    if(!this.head){
      return
    }
    let prev = null
    let curr = this.head
    this.tail = this.head
    while(curr !== null){
      let next = curr.next
      curr.next = prev;
      prev = curr
      curr = next
    }
    this.head = prev
  }
}


const list = new demoList()

list.print()
list.prepend(10)
list.prepend(20)
list.prepend(40)
list.append(50)
list.prepend(60)
list.print()
console.log(list.removeFromFront())
console.log(list.removeFromEnd())
list.print()
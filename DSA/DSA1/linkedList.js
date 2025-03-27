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
  removeOddValues() {
    
    while (this.head !== null && this.head.value % 2 !== 0) {
        this.head = this.head.next;
    }

    let current = this.head;
    
    
    while (current !== null && current.next !== null) {
        if (current.next.value % 2 !== 0) {
            current.next = current.next.next; 
        } else {
            current = current.next; 
        }
    }
  }
  findSecondLargest() {
    if (!this.head || !this.head.next) {
        return null; 
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let current = this.head;

    while (current) {
        if (current.value > firstMax) {
            secondMax = firstMax; 
            firstMax = current.value; 
        } else if (current.value > secondMax && current.value < firstMax) {
            secondMax = current.value;
        }
        current = current.next;
    }

    return secondMax === -Infinity ? null : secondMax; 
}
removeDuplicates() {
  if (!this.head) return;

  let seen = new Set();
  let current = this.head;
  seen.add(current.value);

  while (current.next) {
      if (seen.has(current.next.value)) {
          current.next = current.next.next; // Remove duplicate node
      } else {
          seen.add(current.next.value);
          current = current.next;
      }
  }
}
 // Remove duplicates without using extra data structures
 removeDuplicates() {
  let current = this.head;

  while (current) {
      let runner = current; // Runner starts from current node
      while (runner.next) {
          if (runner.next.value === current.value) {
              runner.next = runner.next.next; // Skip duplicate
          } else {
              runner = runner.next; // Move forward
          }
      }
      current = current.next; // Move to next unique node
  }
}
//! Reverse a linked list using a stack
printReverseStack() {
  let stack = [];
  let current = this.head;
  
  while (current) {
      stack.push(current.value);
      current = current.next;
  }

  while (stack.length > 0) {
    console.log(stack.pop() + " -> ");
  }
  console.log("null");
}
//! Reverse a linked list using recursion
printReverseRecursive(node) {
  if (node === null) return;
  this.printReverseRecursive(node.next); // Go to next node
  console.log(node.value + " -> ");
 // Print during backtracking
}

printReverse() {
  this.printReverseRecursive(this.head);
  console.log("null");
}
//! Reverse a linked list using iteration 
reverseList() {
  let prev = null, current = this.head, next = null;
  
  while (current) {
      next = current.next;
      current.next = prev; // Reverse pointer
      prev = current;
      current = next;
  }

  this.head = prev; // New head
}
//! Check if a linked list is a palindrome
isPalindrome() {
  let arr = [];
  let current = this.head;

  // Store values in an array
  while (current) {
      arr.push(current.value);
      current = current.next;
  }

  // Check if array is a palindrome
  return arr.join("") === arr.reverse().join("");
}
//! Find the middle element of a linked list
findMiddle() {
  let slow = this.head, fast = this.head;

  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }

  return slow ? slow.value : null; // Return the middle element
}
//! Recursive method to find the length of the linked list
getLength(node) {
  if (!node) return 0;
  return 1 + this.getLength(node.next);
}

// Recursive method to find the middle element
findMiddleRecursiveHelper(node, count, middle) {
  if (!node) return null;
  if (count === middle) return node.value;
  return this.findMiddleRecursiveHelper(node.next, count + 1, middle);
}

// Public method to find the middle element using recursion
findMiddleRecursive() {
  let length = this.getLength(this.head);
  let middle = Math.floor(length / 2);
  return this.findMiddleRecursiveHelper(this.head, 0, middle);
}
//! Merge two sorted linked lists
static mergeSortedListsRecursive(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.value <= l2.value) {
      l1.next = this.mergeSortedListsRecursive(l1.next, l2);
      return l1;
  } else {
      l2.next = this.mergeSortedListsRecursive(l1, l2.next);
      return l2;
  }
}
//! Remove the N-th node from the end of a linked list
removeNthFromEnd(n) {
  let dummy = new Node(0);
  dummy.next = this.head;
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer N steps ahead
  for (let i = 0; i <= n; i++) {
      if (fast) fast = fast.next;
  }

  // Move fast and slow until fast reaches the end
  while (fast) {
      slow = slow.next;
      fast = fast.next;
  }

  // Remove the N-th node from the end
  slow.next = slow.next.next;

  this.head = dummy.next; // Update head in case the first node was removed
}
//! Detect a cycle in a linked list using Floyd's cycle-finding algorithm
detectCycle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
      slow = slow.next;        // Move one step
      fast = fast.next.next;   // Move two steps

      if (slow === fast) {
          return true;  // Cycle detected
      }
  }
  return false;  // No cycle
}
arrayToLinkedList(arr) {
  if (arr.length === 0) return null;

  this.head = new Node(arr[0]);  // First node
  let current = this.head;

  for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);  // Create next node
      current = current.next;  // Move to next node
  }
}
printInReverse(node = this.head) {
  if (!node) return;
  this.printInReverse(node.next);
  console.log(node.value + " <- ");
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


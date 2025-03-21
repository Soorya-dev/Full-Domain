
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9];

function uncommonElem(arr1, arr2) {
  let a = [];
  let b = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      a.push(arr1[i]);
    }
    console.log(a);
  }
 
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      b.push(arr2[i]);
    }
  }
  return a.concat(b);
}

console.log(uncommonElem(arr1, arr2));

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
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  detectCycle() {
    if (!this.head || !this.head.next) {
      return;
    }
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }
  insert(val, index){
    if(index < 0 || index > this.size){
        return null
    }
    if(index === 0){
        this.prepend(val)
    }else {
        const node = new Node(val)
        let prev = this.head;
        for(let i = 0; i< index-1; i++){
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
  }
  removeFromBegining(){
    if(!this.head){
        return null
    }
    const removedNode = this.head.val
    this.head = this.head.next
    this.size--
    return removedNode
  }
  removeFromEnd(){
    if(!this.head){
        return null
    }
   if(this.head.next === null){
    let r
    emoveValue = this.head.val
    this.head = null
    this.size--
    return removeValue
   }
   let curr = this.head
   while(curr.next.next !== null){
    curr = curr.next
   }
   const removedNode = curr.next.val
   curr.next = null
   this.size--
   return removedNode
  }
  print(){
    if(this.isEmpty()){
        console.log("is empty");
    }else {
        let curr = this.head
        let list = ''
        while(curr !== null){
            list += `-> ${curr.val}`
            curr = curr.next
        }
        console.log(list);
    }
  }
}

const list = new linkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.insert(70, 3)
list.print()
console.log(list.removeFromBegining())
console.log(list.removeFromEnd());
list.print()
console.log(list.detectCycle());

var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    
    return 1;
  }
  let set = new Set();
  let maxLen = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

//console.log(lengthOfLongestSubstring("abcabcbb"), "1234");

// Input: s = "abcabcbb"
// Output: 3

// 
class ListNode {
    constructor(val){
        this.val = val
        this.next  = null
    }
}

function arrayToLinkedList(arr){
    if(arr.length === 0){
        return null
    }
    let head = new ListNode(arr[0]);
    let currNode = head;

    for(let i = 0; i< arr.length; i++){
        currNode.next = new ListNode(arr[i]);
        currNode = currNode.next;
    }
    return head;
}
let arr = [10,20,30,40,50,60,7,8,9]
console.log(arrayToLinkedList(arr))


let str = "arunghosh";
var reverseString = function(str){
    return str.length <= 1? str: reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString(str))

let str1 = "apple"
var shuffelString = function(str, k){
    str.split('');
    let arr1 = []
    let arr2 = []
    for(let i = 0; i< k; i++){
        arr1.push(str[i])
    }
    for(let i = k ; i< str.length; i++){
        arr2.push(str[i])
    }
    let word = arr2.concat(arr1)
    return word.join('')
}

console.log(shuffelString(str1, 3));


var occurenceOfString = function(str){
    let charCount = {}

    for(let char of str){
        if(charCount[char]){
            charCount[char]++
        }else {
            charCount[char] = 1
        }
    }
    return charCount
}

console.log(occurenceOfString(str));

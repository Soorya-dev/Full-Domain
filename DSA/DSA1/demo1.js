// let string = "arunghosh";

const { validateHeaderName } = require("http");

// function reverseStr(string) {
//   if (string === "") {
//     return string;
//   } else {
//     console.log(string.substring(1));
//     return reverseStr(string.substr(1)) + string[0];
//   }
// }

// console.log(reverseStr(string));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// output = [
//   { a: 1, b: [2] },
//   { a: 3, b: [4, 5] },
//   { a: 6, b: [7, 8, 9] },
// ];

// function sample(arr) {
//     let result = [];
//     let obj = null;

//     for (let i = 0; i < arr.length; i++) {
//         if (!obj) {
//             obj = { a: arr[i], b: [] };
//         } else if (arr[i] === obj.a + 1) {
//             console.log(obj.a+1,'zxcvbnm,');
//             obj.b.push(arr[i]);
//             obj.a = arr[i];
//         } else {
//             result.push({a:obj.a, b:[obj.b] }); 
//             obj = { a: arr[i], b: [] };
//         }
//     }

//     if (obj) {
//         result.push({a:obj.a, b:[obj.b] }); 
//     }

//     return result;
// }

// console.log(sample(arr));


// function foo(){
//     let a = b =0
//     a++
//     return a
// }

// foo()
// console.log(typeof a);
// console.log(typeof b);


function factorial(n){
  if(n>1){
    return n * factorial(n-1)
  }else {
    return 1
  }
}

console.log(factorial(5));

function fibonacci(n){
  return n <=1 ? n : fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10));

function reverseStr(arr){
  if (arr.length === 0) return []
     return reverseStr(arr.slice(1)).concat(arr[0]); 
}

console.log(reverseStr([1,2,3,4,5,6]));

let str = "arunghosh"
function reverse (index){
  if(index >=0){
    console.log(str[index]);
    reverse(index-1)
  }
}

reverse(str.length-1)


class Node{
  constructor(val){
    this.val = val
    this.prev = null
    this.next = null
  }
}

class demoList{
  constructor(){
    this.head = null
    this.tail = null
  }
  append(val){
    let node = new Node(val)
    if(!this.head){
      this.head = node
      this.tail = node
    }else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }
  removeMiddle(){
    if(!this.head){
      return
    }
    let slow = this.head
    let fast = this.head.next
    while(fast !==null && fast.next !== null){
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
      this.head.next = this.head
    }
  }
  reverse(){
    let reversed = ''
    let currNode = this.tail
    while(currNode){
      reversed += ` ${currNode.val}`;
      currNode = currNode.prev
    }
    return reversed
  }

  print(){
    let curr = this.head
    let list = ''
    while(curr){
      list += ` ${curr.val}`
      curr = curr.next
    }
    console.log(list);
  }
}

const list = new demoList()

list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
list.print()
console.log(list.reverse());
list.print()
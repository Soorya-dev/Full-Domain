class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }
  pop(){
      if(this.isEmpty()){
          return "stack is empty"
      }
      return this.stack.pop()
    }
    isEmpty(){
        return this.stack.length === 0
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
    return this.stack[this.stack.length-1]
  }
  print(){
    if(this.isEmpty()){
        return "stack is empty"
    }
    return console.log([...this.stack]);
  }

}

const stack = new Stack()

stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50) 
console.log(stack.peek());
stack.print()
stack.pop()
console.log(stack.peek());
stack.print()

var reverseWord = function (s){
    let splits = s.split(" ")
    let stack = []
    for(let wrd of splits){
        stack.push(wrd)
    }
    let final = ''
    while(stack.length){
        let curr = stack.pop()
        if(curr){
            final += " " + curr
        }
    }
    return final
}

console.log(reverseWord("this is my laptop"));

//! Time complexity = O(n)
//! Space complexity = O(n)


var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(char);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (isEmpty(stack)) {
        return false;
      }
    }
    const top = stack.pop();
    if (
      (char === ")" && top !== "(") ||
      (char === "}" && top !== "}") ||
      (char === "[" && top !== "]")
    ) {
      return false;
    }
  }
  return isEmpty(stack);
};

function isEmpty(stack) {
  return stack.length === 0;
}

console.log(isValid("()[]{}"));
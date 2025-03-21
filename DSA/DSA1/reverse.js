const { log } = require("console")

function reverse(str){
    return str === "" ? str : reverse(str.substr(1)) + str[0]
}

console.log(reverse("arunghosh"));

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class demoList{
    constructor(){
        this.head = null
    }
    removeMiddle(){
        if(!this.head){
            return
        }
        let slow = this.head
        let fast = this.head
         let prev = null
         while(fast !==null && fast.next !==null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
         }
         if(prev.next){
            prev.next = prev.next.next
         }
        }
    }
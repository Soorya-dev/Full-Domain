const { log } = require("console");

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class swapingList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    swapingNthnode(k){
        let slow = this.head
        let fast = this.head
        let curr = this.head
        for(let i=1; i<k; i++){
            slow = slow.next;
        }
        curr = slow;
        while(curr.next){
            curr = curr.next;
            fast = fast.next;
        }
        let temp = fast.value;
        fast.value = slow.value;
        slow.value = temp;

        return this.head
        
    }

    print(){
        if(this.isEmpty()){
            return 'is empty'
        }else{
            let curr = this.head;
            let list = '';
            while(curr){
                list += ` ${curr.value}`;
                curr = curr.next
            }
            log(list);
        }
    }
}

const list = new swapingList()

list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.prepend(80)
list.print()
list.swapingNthnode(6)
list.print()
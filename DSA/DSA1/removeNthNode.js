class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class sampleList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.head = node
        }else {
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log('is Empty');
        }else {
            let curr = this.head;
            let list = '';
            while(curr){
                list+= ` ${curr.value}`;
                curr = curr.next;
            }
            console.log(list);
        }
    }
    removeNthFromEnd(n){
        if(this.head === null){
            return
        }
        let curr = this.head;
        let length =0;
        while(curr !== null){
            length++;
            curr = curr.next
        }
        console.log(length,'length')
        let removedNode = length-n;
        curr = this.head;
        console.log(curr,'12345678')
        if(removedNode === 0){
            console.log('1234');
            return this.head.next;
        }else {
            while(removedNode > 1){
                curr = curr.next;
                removedNode--;
            }
            curr.next = curr.next.next;
        }
    }
}

const list = new sampleList()

list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.prepend(80)
list.print()
list.removeNthFromEnd(1)
list.print()
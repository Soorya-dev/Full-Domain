
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(val){
        let node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(val){
        let node = new Node(val)
            if(this.isEmpty()){
                this.head = node;
            }else {
                let prev = this.head
                while(prev.next){
                    prev = prev.next
                }
                prev.next = node;
                this.size++
        }
    }
    insert(val, index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0 ){
            this.prepend(val)
        }else {
            let node = new Node(val)
            let prev = this.head
            for(let i=0;i< index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeValue(val){
      if(this.isEmpty()){
        return null
      }
      if(this.head.val === val){
        this.head = this.head.next
        this.size--
        return val
      }else {
        let prev= this.head
        while(prev.next && prev.next.val !== val){
            prev = prev.next
        }
        if(prev.next){
            let removedNode = prev.next
            prev.next = removedNode
            this.size--
            return val
        }
        return null
      }
    }
    removeFromIndex(index){
        if(index<0){
            return null
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next;
        }
        this.size--
    }
    removeNthNode(k){
        if(this.head === null){
            return 
        }
        let curr = this.head
        let length = 0;
        while(curr!==null){
            length++
            curr= curr.next;
        }
        let removedNode = length-k
        curr = this.head;
        if(removedNode === 0 ){
            return this.head.next;
        }else {
            while(removedNode > 1){
                curr = curr.next
                removedNode--
            }
            curr.next = curr.next.next
        }
    }

    removeDulplicates(head){
        if(head === null || this.head.next === null){
            return this.head;
        }
        let curr = this.head
        while(curr !== null && curr.next !== null){
            if(curr.val === curr.next.val){
                curr.next = curr.next.next
            }else {
                curr = curr.next
            }
        }
        return this.head
        
    }
reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

    print(){
        if(this.isEmpty()){
            console.log('is empty');
        }else {
            let curr = this.head;
            let list = [];
            while(curr){
                list.push(curr.val)
                curr = curr.next;
            }
            console.log(list);
        }
    }



}

const list = new LinkedList()

list.print()
list.prepend(20)
list.prepend(30)
list.prepend(30)
list.append(40)
list.append(40)
list.append(50)
list.print()
// list.removeFromIndex(2)
//list.removeNthNode(1)
list.removeDulplicates()
list.print()
list.reverse()
list.print()
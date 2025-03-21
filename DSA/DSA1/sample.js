class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head  = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
            this.size++
        }
    }
    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i< index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    remove(index){
        if(index<0){
            return null
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedNode =prev.next
                prev.next = removedNode
                this.size--
                return value
            }
            return null
        }
    }

    detectCycle(){
        if(this.isEmpty() || !this.head.next){
            return false
        }
        let slow  = this.head
        let fast = this.head.next
        while (fast !== null && fast.next !== null){
            if(slow === fast){
                return true
            }
            slow = slow.next
            fast = fast.next.next
        }
        return false
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

   traverse(value){
    let curr = this.head
    while(curr !== null){
        if(curr.value === value){
            return true
        }
        curr = curr.next
    }
return -1

   }

   printByMiddle(){
    let slow = this.head
    let fast =  this.head.next
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    
    let current =  this.head
    while(current !== slow){
        console.log(current.value);
        current = current.next
    }
   }
    
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else {
            let curr = this.head;
            let listValues = ''
            while(curr) {
                listValues += ` ${curr.value}`
                curr = curr.next
            }
            console.log("listvalues", listValues);
        }

    }
}

const list  = new LinkedList()

 list.prepend(20)
 list.print()
 list.append(40)
 list.append(30)
 list.append(60)
 list.append(80)
 list.print()
 list.insert(10,3)
 list.print()
 list.reverse()
 list.remove(2)
 list.print()
 list.printByMiddle()
 console.log( list.traverse(40)) 
 list.print()
 list.removeValue(60)
 list.print()
 list.head.next = list.head
 console.log(list.detectCycle())
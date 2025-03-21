class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(values) {
        const node = new Node(values);
        if(this.isEmpty()){
            this.head = node
        }else {

           node.next = this.head
           this.head = node 
        }
        this.size++
    }

    detectCycle() {
        if (this.isEmpty() || !this.head.next) {
            return false; // No cycle if list is empty or has only one node
        }

        let slow = this.head;
        let fast = this.head.next; 

        while (fast !== null && fast.next !== null) {
            if (slow === fast) {
                return true; // Cycle detected
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return false; // No cycle found
    }

    print(){
        if(this.isEmpty()){
            console.log('is empty');
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }
            console.log('Values:', listValues);

        }
    }
}

const list = new LinkedList()

list.print()
list.prepend(20)
list.prepend(90)
list.prepend(50)
list.prepend(30)
list.prepend(70)
list.print()
list.head.next.next.next = list.head;
console.log(list.detectCycle());

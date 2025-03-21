const { isNull } = require("util")
const { serialize } = require("v8")

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty (){
        return this.size === 0
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
            this.size++
        }else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            node.prev = curr
            curr.next = node
        }
        this.size++
    }
    deleteFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }
this.size--
    }
    deleteFrom(index){
        if(index<0 || index<this.size){
            return
        }
        if(index === 0){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }
        }
        let curr = this.head
        for(let i=0; i< index-1; i++){
            curr = curr.next
        }
        if(curr.next){
            curr.next = curr.next.next
            if(curr.next){
                curr.next.prev = curr
            }
        }
    }
}
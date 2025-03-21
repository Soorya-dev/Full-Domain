//! Hashing
//* Hashing is a technique used in data structures to store and retrieve data efficiently. It involves using a hash function to map data items to a fixed-size array which is called a hash table.

//! What is a Hash Collision?
//* A hash collision occurs when two different keys map to the same index in a hash table. This can happen even with a good hash function, especially if the hash table is full or the keys are similar.

//* Collision Resolution Techniques
//?There are two types of collision resolution techniques:

//! Open Addressing:
//* Linear Probing: Search for an empty slot sequentially
//* Quadratic Probing: Search for an empty slot using a quadratic function
//! Closed Addressing:
//* Chaining: Store colliding keys in a linked list or binary search tree at each index
//* Cuckoo Hashing: Use multiple hash functions to distribute keys

//! Load Factor
//? the load factor of a HashMap is a threshold that determines when the HashMap's capacity increases. The default load factor is 0.75, which means that the HashMap will resize its internal array when the number of elements exceeds 75% of its current capacity. 

function hash(key,size){
    let hashed=0
    for(let i=0;i<key.length;i++){
        hashed+=key.charCodeAt(i)
    }
    return hashed%size
}

class HashTable{
    constructor(){
            this.size=10
    this.bucket=new Array(this.size)
  for(let i=0;i<this.bucket.length;i++){
        this.bucket[i]=new Map()
    }
    }
 
    insert(key,value){
    let idx=hash(key,this.size)
    this.bucket[idx].set(key,value)
    }
    remove(key){
        let idx=hash(key,this.size)
        this.bucket[idx].delete(key)
    }
    search(key){
        let idx=hash(key,this.size)
        return this.bucket[idx].get(key)
    }
  print(){
 console.log(this.bucket)
    
    }
}  
const hasht= new HashTable()
hasht.insert("name","sooryadev")
hasht.insert("age","18")
hasht.insert("class","tfgfhgut")
hasht.insert("jygtj","1234")
hasht.insert("name","sooryadev")
hasht.print()



//  const hash = (key, size)=>{
//     let hashedKey = 0
//     for(let i = 0; i< key.length; i++){
//         hashedKey += key.charCodeAt(i)
//     }
//     return hashedKey % size;
//  }

//  //console.log(hash("2", "sooryadev"));

//  class hashTable{
//     constructor(){
//         this.size = 20
//         this.bucket = Array(this.size)
        
//         for(let i = 0; i< this.bucket.length; i++){
//             this.bucket[i] = new Map()
//         }
//     }
//     insert(key, value){
//         let idx = hash(key, this.size)
//         this.bucket[idx].set(key, value)
//     }
//     remove(key){
//         let idx = hash(key, this.size)
//         let deleted = this.bucket[idx].get(key)
//         this.bucket[idx].delete(key)
//         return deleted
//     }
//     search(key){
//         let idx = hash(key, this.size)
//         return this.bucket[idx].get(key)
//     }
//     print(){
//         for(let i = 0; i<this.bucket.length ; i++){
//             if(this.bucket[i] && this.bucket[i].size >0){
//                 for(let [key, value] of this.bucket[i].entries()){
//                     console.log(` ${key}: ${value}`);
//                 }
//                 console.log(' [empty]');
//             }
//         }
//     }
//  } 

//  const hashtable = new hashTable

//  hashtable.insert(155, "arunghosh")
//  hashtable.insert(156, "anas")
//  hashtable.insert(152, "muneer")
//  hashtable.insert(162, "sijumon")

//  console.log(hashtable.search(155));
//  //hashtable.print()
//  hashtable.remove(152)   
//  hashtable.print()


 //! Double hashing

 //* Double hashing is a collision resolution technique used in hash tables. It works by using two hash functions to compute two different hash values for a given key. The first hash function is used to compute the initial hash value, and the second hash function is used to compute the step size for the probing sequence.

 //! Advantages of Double hashing

//* The advantage of Double hashing is that it is one of the best forms of probing, producing a uniform distribution of records throughout a hash table.
//* This technique does not yield any clusters.
//* It is one of the effective methods for resolving collisions.

//! Load factor and rehashing reference : https://www.geeksforgeeks.org/load-factor-and-rehashing/
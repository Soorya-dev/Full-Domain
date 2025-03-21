let weakSet = new WeakSet()

let obj1 = {}
let obj2 = {}

weakSet.add(obj1)
weakSet.add(obj2)

console.log(weakSet.has(obj1));

obj1 = null
console.log(weakSet.has(obj1));

weakSet.delete(obj2)
console.log(weakSet.has(obj2));



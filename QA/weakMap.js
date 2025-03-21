//* Keys must be objects: Unlike a regular Map, where keys can be any type of value (objects, strings, numbers, etc.), keys in a WeakMap must be objects.

//* Garbage Collection: If there are no other references to an object used as a key in a WeakMap, the object (and its corresponding value) can be garbage-collected.

//* No enumeration: WeakMap does not provide methods to iterate over its elements (like keys(), values(), or entries()). There is no way to list the keys or values stored in a WeakMap.

//* Use cases: WeakMap is useful for associating data with objects without interfering with garbage collection, making it ideal for use in scenarios like caching or storing private data for objects.



let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "value1");
weakMap.set(obj2, "value2");

console.log(weakMap.get(obj1));

obj1 = null  //! The object is dereferenced, and the WeakMap no longer holds a strong reference
console.log(weakMap.has(obj1));
console.log(weakMap.get(obj1));


console.log(weakMap.has(obj2));

weakMap.delete(obj2)
console.log(weakMap.has(obj2));


//! Garbage collection

let weakmap = new WeakMap()

let obj = {};
(function(){
    weakmap.set(obj, "sample vallue")
})();

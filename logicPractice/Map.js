//ctrl + Shift + p
// A Map is a collection of key-value pairs where both keys and values can be of any data type. 
// This is different from a plain JavaScript object, where keys are always converted to strings.

let myMap= new Map()
 //or
 myMap=new Map([["name","alice"],["age",25]])

 console.log(myMap);



 //To add a new key-value pair to a Map, use the .set() method.
 myMap.set("city", "London");
myMap.set(1, "one"); // Key can be a number
myMap.set(true, "isAdmin"); // Key can be a boolean
myMap.set({ country: "UK" }, "United Kingdom"); // Key can be an object


// To access a value from a Map, use the .get() method, providing the key as an argument:
console.log( myMap.get(true));



// To check if a key exists in a Map, use the .has() method:
console.log(myMap.has("name"))


// To remove a key-value pair from a Map, use the .delete() method:
myMap.delete(1)
console.log(myMap);

 

// You can get the number of key-value pairs in a Map using the .size property:
console.log(myMap.size)


// To remove all key-value pairs from a Map, use the .clear() method:
myMap.clear()
console.log(myMap);


// You can iterate over the key-value pairs of a Map using different methods:

let newMap= new Map([["name","sooryadev"],["age",18]]);
for (let [key, value] in newMap) {
    console.log(`${key}: ${value}`);
}

for(let key of newMap.keys()){
    console.log(key);
    
}
for(let values of newMap.values()){
    console.log(values);
    
}

// Iterating over entries (key-value pairs):
for(let [key, value] of newMap.entries()) {
    console.log(`${key}: ${value}`);
}
// same as this
for (let [key, value] of newMap) {
    console.log(`${key}: ${value}`);
}



// WeakMap is a special version of Map where keys must be objects (primitive values cannot be used as keys),
//  and these objects are weakly referenced. This means that if there are no other references to the key object, 
//  it can be garbage collected.






// You can convert a Map to a plain object using Object.fromEntries(), 
// which turns key-value pairs into object properties

let map = new Map([
    ["name", "Alice"],
    ["age", 25]
  ]);shopSyncUser
  
  let obj = Object.fromEntries(map);
  console.log(obj);
  
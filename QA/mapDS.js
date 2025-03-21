//! Map is another data structure in JavaScript which is similar to Object but the key can be of any type.
//! It is a collection of elements where each element is stored as a Key, value pair.
//! It is also known as a Hash table or a dictionary.

//* The key can be of any type but the value can be of any type.
//* The key is unique and immutable, whereas the value can be mutable or immutable.


const lang = new Map();

lang.set("name", "Javascript");
lang.set("type", "dynamic");
lang.set("year", 1995);

console.log(lang);
console.log(lang.get('name'));

lang.delete('year');
console.log(lang.has('year'));
console.log(lang.size);

lang.clear()
console.log(lang.size);

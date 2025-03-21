//! Set is another data structure in JavaScript which is similar to Array but the values are unique.
//! It is a collection of elements where each element is stored as a value without any keys.

const lang = new Set();

lang.add("javascript")
lang.add("javascript")
lang.add("dynamic");
lang.add(1995)

console.log(lang);
console.log(lang.has('javascript'));

lang.delete("javascript")
console.log(lang.has('javascript'));
console.log(lang.size);
lang.clear()
console.log(lang.size);
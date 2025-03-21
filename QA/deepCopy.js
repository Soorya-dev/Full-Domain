//? Deep Copy: Copies all levels of the object, including nested objects. The copied nested objects are independent of the original.

const person = {
  name: "arunghosh",
  age: 27,
  address: {
    street: "kakkancerry",
    place: "asdfbg",
  },
};

const dup = JSON.parse(JSON.stringify(person));

//* JSON.stringify(person) converts the person object into a JSON string.
//* JSON.parse(...) then converts that JSON string back into a new JavaScript object, effectively creating a deep copy.

//? This creates a new object with all nested objects deeply copied. Changes to dup will not affect person.


dup.name = "ghosh"
dup.address.place = "thenkurissi";
console.log(dup);

console.log(person);


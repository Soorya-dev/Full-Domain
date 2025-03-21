
//* Shallow Copy: Copies only the top-level properties. Nested objects remain as references to the original objects. Changes to nested objects in the copy will affect the original.

const person = {
  name: "arunghosh",
  age: 27,
  address: {
    street: "kakkancerry",
    place: "asdfbg",
  },
};

const dup = {...person}

console.log(person,"before change");
dup.name = "ahalya"
dup.address.place = "thenkurssi"
console.log(dup,"duplicate");
console.log(person,"after change");


//* dup.name is a copy of person.name ("arunghosh")
//* dup.age is a copy of person.age (27)
//* dup.address is a reference to the same address object as person.address


//? dup.name is changed to "ahalya" – this does not affect person.name because it is a separate primitive value.
//? dup.address.place is changed to "thenkurssi" – this affects person.address.place because dup.address and person.address reference the same object.


const arr = ['arun', 'ahalya', 'ghosh', 'siju'];

const copy = [...arr]

copy[1] = 'ghosh'

console.log(arr);
console.log(copy);


const arr1 = [['arun'], ['ghosh'], ['ahalya'], ['muneer']]

const copy1 =[...arr1]

copy1[1][1] = "0000"

console.log(arr1);
console.log(copy1);
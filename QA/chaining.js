//! Refers to the act of accessing nested properties or calling methods on an object in a sequential manner using the dot (.) operator.

const person  = {
    name: "Arunghosh",
    age: "27",
    address: {
        houseName: "puthan House",
        village: "Thenkurissi"
    }
}

console.log(person.address.village); //? this is chanining


//! Optional chaining

//* Provides a safer way to access properties on potentially null or undefined objects, avoiding errors.
//* Uses the optional chaining operator (?.) before the property name.
//* The expression short-circuits (stops evaluation) if any property in the chain is null or undefined, returning undefined instead of an error.

//? Optional chaining only checks for null or undefined values, not for the existence of the property itself.
//? It can be used with both object properties and function calls.

const users = {
 
}

console.log(users?.profile?.name); //? this is optional chaining


//! without optional chaining:

if(users && users.profile){
    console.log(users.profile.name);
}else {
    //? handle null and undefined cases
}

//? Benefits of Optional Chaining

//* Improves code readability by eliminating explicit null checks.
//* Prevents errors from accessing properties on non-existent objects.

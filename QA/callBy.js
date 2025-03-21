//! Call by value

//*  When we pass a variable to a function by value, you are passing a copy of the variable's value. Any changes made to the parameter inside the function do not affect the original variable.

function changeValue(x){
    x = 10;
}
let a = 5;
changeValue(a)
console.log(a);

//! Call by reference

//* When we pass a variable to a function by reference, you are passing the actual variable itself, not a copy. Any changes made to the parameter inside the function will affect the original variable.

function changeObj(obj){
    obj.value = 10
}

let object = {value: 5}
changeObj(object)
console.log(object);

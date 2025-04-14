function getname(){
    console.log(this.name)
        console.log(this.age)
    }
var person1={
    name:"soorya",
    age:17,
}
getname.call(person1)

//cfhcf

function getname(a,b,c){
    console.log(a,b,c)
console.log(this.name)
    console.log(this.age)
}
var person1 ={
name:"soorya",
age:17,
}
getname.apply(person1,["1","2","3"]);


function getname(){
    console.log(this.name)
        console.log(this.age)
    }
var person1 ={
    name:"soorya",
    age:17,
}
const newGreet=getname.bind(person1)
newGreet()

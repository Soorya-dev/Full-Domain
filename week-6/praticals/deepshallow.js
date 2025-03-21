let a=[1,2,3,4,5,6]

let s=a.slice()
s.push(7)
console.log(s)
console.log(a)

//deep copy



let b=[1,2,3,4,5,6]

let c=b
c.push(7)
console.log(c)
console.log(b)


//shallow copy
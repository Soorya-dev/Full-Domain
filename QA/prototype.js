//* The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. 
//* When a property or method is accessed on an object, JavaScript first checks the object itself.
//* If it doesn't find it there, it looks up the property or method in the object's prototype.
//* This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is null). 
//* The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects.

const leetcode = {
    getLeetcodeUrl(){
        console.log(`https://leetcode.com/${this.slug}`);
    }
}

const profile = {
    name: "Arunghosh K",
    stack: "MERN stack developer",
    slug: "arunghosh-k",
    greet(){
        console.log(`${this.name} - ${this.stack}`);
    },
};

Object.setPrototypeOf(profile, leetcode);  //* or
//profile.__proto__ = leetcode

profile.getLeetcodeUrl()
profile.greet()


let str="hello my name is sooryadev anikkat"
let word="microscope"




//!----------------------------------------------------------------------

//?How to Remove a Character from String
function removeChar(word,char){
    let idx=word.indexOf(char)      
    return word.slice(0,idx)+word.slice(idx+1)    
}
//!or
function removeChar2(str,char){
    return str.split(char).join('')
}
console.log(removeChar(word,"o"))
console.log(removeChar2("hello world","o"))

//!----------------------------------------------------------------------

//? how are you to woh era uoy
let a="how are you"
let b=a.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
console.log(b)

//!----------------------------------------------------------------------

//?check anagrams(use same letters like cat and act)?
function checkAnagram(str1,str2){
    let a=str1.split('').sort().join('')
    let b=str2.split('').sort().join('')
    return a===b
}
console.log(checkAnagram("silent","listen"));
 
//!----------------------------------------------------------------------

//?Reverse a string without using Set
function reverseStr(str){
    let reversed=''
    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i]
    }
    return reversed
}
console.log(reverseStr("hello"));


//!----------------------------------------------------------------------

//? Remove vowels from a string
function removeVowels(str){
    let vowels='aeiouAEIOU'
    let res=''
    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i])){
            res+=str[i]
        }
    }
    return res
}
console.log(removeVowels("hello"));





//!----------------------------------------------------------------------
//second longest word in string
// let s="hello my degar brooro"
// let a=s.split(" ")
// let l=''
// let sL=''
// for(let i=0;i<a.length;i++){
//     if(a[i].length>l.length){
//         sl=l
//         l=a[i]
//     }else if(a[i].length>sL.length&&a[i]!==l){
//         sL=a[i]
//     }
// }
// console.log(l)
// console.log(sL)


//!----------------------------------------------------------------------



//!----------------------------------------------------------------------



//!----------------------------------------------------------------------



//!----------------------------------------------------------------------
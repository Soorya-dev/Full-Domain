let str = 'HelloWorld'
function deleteString(str) {
    return str.slice(2,4)
}
console.log('slice',deleteString(str));

let str1 = 'HelloWorld'
function deleteString1(str1) {
   let arr = Array.from(str1);
   arr.splice(3)
   return arr.join('')
}
console.log('splice',deleteString1(str1));


function reversrString(str){
    if(str.length <=1){
        return str
    }
    return reversrString(str.substr(1)) + str.charAt(0)
}

console.log(reversrString(str));

function deleteElement (str, index) {
    let newString = '';
    for(let i = 0; i< str.length; i++) {
        if(i !== index) {
            newString += str[i]
            console.log(newString,'12345');
        }
    }
    return newString
}

console.log(deleteElement(str, 5),'deletestring');

function reverseString(str) {
    let reversed = ''
    for(let i=str.length - 1; i>=0; i--) {
        reversed += str[i]
    }
    return reversed;
}

console.log(reverseString(str));

// Find the longest word in the sentence

function longestWord(sentence){
    const words = sentence.split(' ')
    console.log(words);
    let longestWord = ''
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

console.log(longestWord("my name is arunghosh"))


// Reverse a sentence

function reverseSentence(sentence){
    const words = sentence.split(' ')
    console.log(words);
    let reversed = words.reverse()

    console.log(reversed);
}

reverseSentence("my name is arunghosh")

function titleCase(sentence){
    const words = sentence.split(" ")
    console.log(words);
    const result = words.map((word)=>{
        return word[0].toUpperCase() + word.slice(1)
        })
    console.log(result.join(" "));
}

titleCase("my name is arunghosh")

// Count the number of vowels

function countVowels(sentence){
    const vowels = 'aeiouAEIOU'

    let vowelsCount = 0

    for(let char of sentence){
        console.log(vowels.indexOf(char));
        if(vowels.indexOf(char) !== -1){
            vowelsCount++
        }
    }
    console.log(vowelsCount);
}

countVowels("my name is arunghosh")

console.log(Number(15).toString(2));

// Swap the case of each charachter in a string

function swapChar(sentence){
    let swappedString = ''
    for(let char of sentence){
        if(char === char.toUpperCase()){
           swappedString +=  char.toLowerCase()
        }else {
            swappedString += char.toUpperCase()
        }
    }
    console.log(swappedString);
}

swapChar("My Name Is Arunghosh")


// Remove special characters

function removeSpecialChar(sentence){
    let newString = ''
    for(let char of sentence){
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' '){
            newString += char
        }
    }
    console.log(newString);
}

removeSpecialChar('arunghosh@gmail.com')
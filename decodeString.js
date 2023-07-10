// Write your code below this line

// Decode String
// Loops

// In this challenge, you’ll write a decoder.
// Write a function that takes in a string and returns a string. 

//A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm  --------look for the first character and see if its a number

// The number in the string represents how many characters each letter should shift.  --- if the first character is a number, see what number is, and shift the letter that number of times in the abc
//I need and abc

//For example:
// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function decoder (str) {

    if(String && !isNaN(parseInt(str.charAt(0))) ) { 
        let numberInString = parseInt(str.charAt(0));
        let letters = str.slice(1);
        let code = ''; 
            
        for(let i = 0; i < letters.length;i++) {
           let stringCode = letters.charAt(i);
           code += abc[(abc.indexOf(stringCode) + numberInString) % abc.length];
        }
    return code;    
    }
}

console.log(decoder('2fcjjm'))
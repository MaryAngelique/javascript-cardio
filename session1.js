// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // one line solution
  // return str.split("").reverse().join("");

  // for loop solution
  // let strRev = "";
  // for (let i = str.length - 1; i >= 0; i--) { // decreasing string length
  //   strRev = strRev + str[i];
  // }

  // return strRev;


  // ES6
  // let strRev = "";
  // for (let i = 1; i <= str.length; i++) {
  //   strRev = strRev + str[i];
  // }

  // return strRev;


  // For of Loop
  // let strRev = "";
  // for (let char of str) {
  //   strRev = strRev + str[char];
  // }

  // return strRev;


  // ForEach
  // let strRev = "";
  // str.split("").forEach(function(char) {
  //   strRev = char + strRev;
  // });

  // return strRev


  // ForEach Arrow Function
  // let strRev = "";
  // str.split("").forEach(char => {
  //   strRev = char + strRev});

  // return strRev; 


  // Reduce
  // return str.split("").reduce(function(strRev, char) {
  //   return char + strRev;
  // }, "");


  // Reduce -- Arrow Function
  return str.split("").reduce((strRev, char) => char + strRev, "");
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const strRev = str.split("").reverse().join("");

    return strRev === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const strRev = int.toString().split("").reverse().join("");

    return parseInt(strRev);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    //  For Loop
    // const strArr = str.toLowerCase().split(" ");

    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(" ");


    // return str.toLowerCase().split(" ").map(function(word) {
    //     return word[0].toUpperCase() + word.substr(1)
    // }).join(" ");


    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    }); // g - global || i - case sensitive

}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    // ForEach
    const chars = {};
    let max = 0;
    let maxChar = "";

    str.split("").forEach(function(char) {
        
        if (chars[char]) {
            chars[char]++;

        } else {
            chars[char] = 1;
        }
    });

    for (let char in chars) {
        //debugger; // node js debugger
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;


}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = maxCharacter('javascript');

console.log(output);
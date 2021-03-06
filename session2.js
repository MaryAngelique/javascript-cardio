// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    const word = sen.toLowerCase().match(/[a-z0-9]+/g);

    // SOLUTION 1 - Return a single longest word
    // const sorted = word.sort(function(a, b) {
    //     return b.length - a.length;
    // });

    // Arrow Function
    const sorted = word.sort((a, b) => b.length - a.length);

    console.log(sorted)

    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // const longestWord = sorted.filter(function(word) {
    //    return word.length === sorted[0].length;  
    // });

    // Arrow Function
    const longestWord = sorted.filter((word) => word.length === sorted[0].length);
 
    console.log(longestWord);

    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    if (longestWord.length === 1) {
        return longestWord[0];

    } else {
        return longestWord;
    }
}
  
// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
function chunkArray(arr, len) {
    // SOLUTION 1
    // // Init chunked Array
    // const chunkedArr = [];

    // // Set index
    // let i = 0;

    // // While loop -- loop while index is less than the array length
    // while (i < arr.length) {
    //     // Slice out from from the index to the index + chunk length and push on to the chunked array
    //     chunkedArr.push(arr.slice(i, i + len));

    //     // Increment by chunk length
    //     i += len;
    // }

    // return chunkArray;


    // SOLUTION 2
    // Init chunk array
    const chunkArr = [];

    // Loop through arr
    arr.forEach(function(val) {
        // Get last element of the array
        const last = chunkArr[chunkArr.length - 1];

        // Check if last and if last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkArr.push([val]);

        } else {
            last.push(val);
        }
    });

    return chunkArr;
}
  
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
function flattenArray(arrays) {
    // SOLUTION 1
    // Reduce
    // return arrays.reduce(function(a, b) {
    //     return a.concat(b);
    // });

    // SOLUTION 2
    // return [].concat.apply([], arrays);

    // // SOLUTION 3
    // function add(a, b, c) {
    //     return a + b + c;
    // }

    // const arr = [1, 2, 3];
    // console.log(add(...arr));

    // return [].concat(...arrays);
}
  
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
  
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
  
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
  
function letterChanges(str) {}
  
// Call Function
const output = isAnagram("Dormitory", "Dirty Room");
  
 console.log(output);
  
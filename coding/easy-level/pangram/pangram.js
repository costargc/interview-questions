// Write a function that takes in a string and returns true if it's a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.

// Ex:
// Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
// Output: true

// Input: "Five hexing wizard bots jump quickly"
// Output: true

// Input: "JavaScript is the best"
// Output: false

console.log(checkPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
console.log(checkPangram("Five hexing wizard bots jump quickly"));
console.log(checkPangram("JavaScript is the best"));


function checkPangram(str) {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    count = 0;
    letter = "";

    array=alphabet.split("")

    for (i = 0; i < str.length; i++) {
        letter = str[i].toLowerCase();

        if (array.indexOf(letter) > -1) {
            index = array.indexOf(letter);
            array.splice(index, 1);
        }
        // console.log(array.length);
        if(array.length==0){
            return true
        }

    }

    return false
}


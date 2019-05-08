// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

function palindrome_check(word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == word[word.length - i - 1]) {
        }
        else {
            console.log('false');
            return false;
        }
        console.log('true');
        return true;
    }
}

palindrome_check("noon"); //true
palindrome_check("horse"); //false
palindrome_check("racecar"); //true
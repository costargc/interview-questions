// Ex:
// Input: '1'
// Output: -1

// Input: '4'
// Output: -4

// Input: 'cow'
// Error

function negative_strtonum(str) {

    if (isNaN(-str * 1)) {
        return "Error"
    }

    else {
        return -str * 1
    }

}

console.log(negative_strtonum('1')); //-1
console.log(negative_strtonum('4')); //-4
console.log(negative_strtonum('cow')); //-1
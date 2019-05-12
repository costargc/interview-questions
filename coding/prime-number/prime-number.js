// write a function to isPrime() that checks if a number is prime.

// input: 14
// output: false

// input: 73
// output: true

//using reminder %
function isPrime(num) {
    for (i = 2; i < Math.sqrt(num); i++) { //we just need to test until sqrt(num) as n=a*b >> a=b=sqrt(n)

        if (num%i == 0) {
            return false;
        }
    }
    return true;
}

// //not using reminder %
// function isPrime_noRem(num) {
//     for (i = 2; i < Math.sqrt(num); i++) { //we just need to test until sqrt(num) as n=a*b >> a=b=sqrt(n)

//         res = num;
//         while (res >= i) {
//             res = res - i;
//         }

//         if (res == 0) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(isPrime(14)); //false
console.log(isPrime(73)); //true
console.log(isPrime(67280421310721)); //Thomas Clausen's prime
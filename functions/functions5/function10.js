"use strict";

// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function primeNumber(num) {
    if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
            return true;
    } else {
        return false;
    }
}
    console.log(primeNumber(18));

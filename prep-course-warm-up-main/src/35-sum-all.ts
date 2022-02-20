export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(x,y) {
    
    var sum = 0;
    for (let i = Math.abs(x),j = Math.abs(y);i<=j;i++){
        sum +=i;
    }
    return sum;
};

console.log(sumAll(1, 4)); // Expected output: 10

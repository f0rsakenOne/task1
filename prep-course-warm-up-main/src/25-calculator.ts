export { };

function add(x, y) { return x + y }

function subtract(x, y) { return x - y }

function sum(arr) {
    return arr.reduce((acc, num) => acc + num);

}

function multiply(arr) {
    return arr.reduce((acc, num) => acc * num, 1);

}

function power(x, y) { return Math.pow(x, y) }

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8

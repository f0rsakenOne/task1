/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
   var count = 0
    var vowels = 'aAeEiIoOuU'
   for (let char of s){
       if (vowels.includes(char)) count++
   }
   return count
}

export { vowels };

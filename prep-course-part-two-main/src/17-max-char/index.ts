/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let  maxChar ='';
    str.split('').forEach(char=>{
        if (str.split(char).length>0){
            maxChar = char;
        }
    })
    return maxChar;
}

export { maxChar };

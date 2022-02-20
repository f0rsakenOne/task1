/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    let line ="";
    for (let i = 1; i <= n;i++){
        for(let j = 1; j<=n-i;j++){
            line+=" ";
        }
        for (let k = 0; k<2*i-1;k++){
            line+="#"
        }
        for (var b = 1; b < n*2-1; b++) {
            if (line.length < n*2-1) {
                line += " "
            }
        }
        console.log(line)
        line='';
    }
    
}

export { pyramid };

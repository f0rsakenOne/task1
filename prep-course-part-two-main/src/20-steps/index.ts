/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    var line = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            line += '#';

        }
        for (var b = 1; b < n; b++) {
            if (line.length < n) {
                line += " "
            }
        }
        console.log(line);
        line = '';
    }
}

export { steps };

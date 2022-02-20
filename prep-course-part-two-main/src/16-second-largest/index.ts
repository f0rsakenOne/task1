/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    var newArr = [...array];
    var max = Math.max(...newArr);
    newArr.splice(newArr.indexOf(max),1)
    return Math.max(...newArr)
}

export { secondLargest };

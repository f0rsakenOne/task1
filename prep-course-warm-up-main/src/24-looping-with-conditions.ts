export {};

function onlyTheAces(arr) {
    //var sort_arr = arr.sort();
    
    var newArr = arr.filter(word=>word=='Ace')
    return newArr;
}
console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']

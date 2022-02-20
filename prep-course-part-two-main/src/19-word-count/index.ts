/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */
interface Counts {
  [key: string]: number;
}
class Words {

  count(str: string):Counts {
    return str.trim().toLocaleLowerCase().split(/\s+/g).reduce((map,word)=>{
      map[word] = (map[word] || 0)+ 1
      return  map
    },{} as Counts)
    // let result: Counts = {}
    // let words = str.trim().replace(/\s+/, " ").toLocaleLowerCase().split(' ')
    // words.forEach(word => {
    //   if (result[word]) {
    //     result[word]++;
    //   }
    //   else {
    //     result[word] = 1;
    //   }
    // })
    // return result;
  }
}

export { Words };


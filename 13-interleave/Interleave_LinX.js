//uses nested forLoop

function interleave() {
    let arguArr = [...arguments]; //array of string words [ , ]
    let wordArr = []; //store array of word-array of string letters
    let result = []
    arguArr.map(el => {
        wordArr.push(el.split(""))
    }); //makes each letter an element of an array[[,,,],[,,]]
    let longest = 0; //longest word
    wordArr.map(word => {
      if(word.length > longest) {
        longest = word.length
      }
    } ) //find longest word
    //for the duration of the longest word
    for(let i = 0; i < longest; i++) {
        //we'll loop thru the amount of words we have
      for(let j = 0; j < arguArr.length; j++)
      //and push the 1st letter of each word & remove it too
        result.push(wordArr[j].shift())
    }
    //turn array into string
    return result.join("")
}

/* eslint-disable no-unused-vars */

const pigify = str => {
    //checks if the letter is a vowel
    const isVowel = char => {
        const vowels = 'aeiouAEIOU';
        if (vowels.includes(char)) return true;
    }
    //finds which index at which to begin splicing - aka, until it hits a vowel
    const frontSpliceLength = () => {
        for (let i = 0; i < strArr.length; i++) {
            //to deal with the 'qu' case
            if (strArr[i] === 'q' && strArr[i+1] === 'u') return i+2;
            if (isVowel(strArr[i])) return i;
        }
    }

    //using recursion to translate multiple words - pigify will run on each word, which by nature have no spaces in them
    if (str.includes(' ')) {
        let wordArr = str.toLowerCase().split(' ');
        return wordArr.map(pigify).join(' ');
    }

    //moves the splice from earlier to the end of the word
    let strArr = str.toLowerCase().split('');
    let moveToEnd = strArr.splice(0, frontSpliceLength()).join('');
    strArr.push(moveToEnd, 'ay');
    return strArr.join('');
}

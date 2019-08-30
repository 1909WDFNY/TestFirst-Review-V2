/* eslint-disable no-unused-vars */

const pigify = str => {
    const isVowel = char => {
        const vowels = 'aeiouAEIOU';
        if (vowels.includes(char)) return true;
    }
    const frontSpliceLength = () => {
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === 'q' && strArr[i+1] === 'u') return i+2;
            if (isVowel(strArr[i])) return i;
        }
    }

    //using recursion to translate multiple words
    if (str.includes(' ')) {
        let wordArr = str.toLowerCase().split(' ');
        return wordArr.map(pigify).join(' ');
    }

    let strArr = str.toLowerCase().split('');
    let moveToEnd = strArr.splice(0, frontSpliceLength()).join('');
    strArr.push(moveToEnd, 'ay');
    return strArr.join('');
}

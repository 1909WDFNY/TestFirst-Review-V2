/* eslint-disable no-unused-vars */

const vowelsCount = str => {
    const isVowel = char => {
        const vowels = 'aeiou';
        if (vowels.includes(char)) return true;
        false;
    }
    const vowelObj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0
    }
    return str.toLowerCase().split('').reduce((vowelObj, currLetter) => {
        if (isVowel(currLetter)) {
            vowelObj[currLetter]++;
            vowelObj.total++;
            return vowelObj;
        }
        return vowelObj;
    }, vowelObj);
}

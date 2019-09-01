const interleave = function() {
    let wordObj = {};
    let nextIdx = 1;
    //make an object where the values are the words to be interlaced - each one an array where each index is one letter
    for (let i = 0; i < arguments.length; i++) {
        wordObj[i] = arguments[i].split('')
    }

    const interleaveLetters = function() {
        if (Object.keys(wordObj).length === 1) return wordObj[0].join('');

        wordObj[0].forEach((letter, idx, arr) => {
            let nextLetterToAdd = wordObj[nextIdx][idx];
            if (nextLetterToAdd) arr[idx] = letter + nextLetterToAdd;
        });
        //if word[0] is longer
        if (wordObj[nextIdx].length > wordObj[0].length) {
            let remainingLetters = wordObj[nextIdx].splice(wordObj[0].length);
            wordObj[0] = [...wordObj[0], ...remainingLetters];
        }
        delete wordObj[nextIdx];
        nextIdx++;
        return interleaveLetters();
    }
    return interleaveLetters();
}

const pigify = (string) => {
    let stringArray = string.split(" ");
    //helper func to test if char is vowel
    const isVowel = (char) => {
        const vowels = "aeiouAEIOU";
        return (vowels.includes(char));
    }
    //helper func to cut off the consonants at the beginning
    const cutConsonants = (word) => {
        for (let i = 0; i < word.length; i++) {
            if (isVowel(word[i]) && word[i - 1] !== "q") return i;
        }
    }

    return stringArray.map(function(word) {
         //check where the first vowel is
         let sliceHere = cutConsonants(word);

         //return middle slice + beginning slice + ay
         return word.slice(sliceHere) + word.slice(0, sliceHere) + "ay"

    })
        .join(" ");
}

/* eslint-disable no-unused-vars */
const pigify = (string) => {
    //vowel list
    const vowels = ["a", "e", "i", "o", "u"];

    //split string into words and loop
    const arrayedString = string.split(" ");
    let dogWord = "";
    let doggedArray = [];
    arrayedString.forEach(function(word) {
        //var to store first vowel index
        let firstVowelIdx = 0;
        //loop through word. if current letter is not a vowel, loop on. 
        for (let i = 0; i < word.length; i++) {
            //If current letter is a vowel, store and return its idx
            let currentChar = word[i].toLowerCase();
            if (vowels.includes(currentChar)) {
                if (currentChar === "u" && word[i - 1] === "q") {
                    //was the previous char q?
                    continue;
                }
                firstVowelIdx = i;
                break;
            } 
        }
        
        dogWord = word;

        if (firstVowelIdx > 0) {
            //slice word from idx to end and store in beginning array
            let dogWordBegin = word.slice(firstVowelIdx);
            
            //slice from beginning to idx and store in ending array
            let dogWordEnd = word.slice(0, firstVowelIdx);

            dogWord = dogWordBegin.concat(dogWordEnd);
        }
        if (dogWord === dogWord.toUpperCase()) {
            
            dogWord += "AY";
        } else {
            
            dogWord += "ay";
        }
        doggedArray.push(dogWord); 
    });

    //join dogarrayed string and return
    return doggedArray.join(" ");
}

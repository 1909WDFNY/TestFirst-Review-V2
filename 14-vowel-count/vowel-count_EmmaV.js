const vowelsCount = (word) => {
    const countInstance = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0
    }
    word = word.toLowerCase();
    //loop through word once, for each character if countinstance has own property of it, increment it
    for (let i = 0; i < word.length; i++) {
        if (countInstance.hasOwnProperty(word.charAt(i))) {
            countInstance[word.charAt(i)] += 1;
        }
    }

    //put all the values in an array and reduce it
    countInstance.total = Object.values(countInstance).reduce(function(accum, currentVal) {
        return accum + currentVal;
    })

    return countInstance;
}


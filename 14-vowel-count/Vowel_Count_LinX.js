function vowelsCount(str) {
    let fixed = str.toLowerCase();
    let vowelObj = {a: 0, e: 0, i: 0, o: 0, u: 0, total: 0};
    let charArr = fixed.split("");

    if(str.length === 0) {return vowelObj};

    charArr.reduce((acc, curVal) => {
        if(vowels.includes(curVal)) {
            vowelObj[curVal]++;
            acc++;
        }
        return vowelObj.total = acc
    },0)

    return vowelObj;
}

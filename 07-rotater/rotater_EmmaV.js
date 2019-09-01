const rotater = (outerString) => {
    let reversalFlag = false;

    return function (num) {

        let arrayedString = outerString.split("");
        if (reversalFlag === false) {
            for (let i = 0; i < num; i++) {
                arrayedString.push(arrayedString.shift());
            }
        }

        if (num === arrayedString.length) {
            reversalFlag = !reversalFlag;
        }

        if (reversalFlag === true) {
            for (let i = 0; i < num; i++) {
                arrayedString.unshift(arrayedString.pop());
            }
        }


        return arrayedString.join("");
    }
}

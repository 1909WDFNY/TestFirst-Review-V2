const sometimes = (func) => {
    let callCounter = 1;

    return function () {

        if (callCounter >= 4 && callCounter % 2 === 0) {
            callCounter++;
            return "I do not know!";
        } else if (callCounter >= 4 && callCounter % 2 !== 0) {
            callCounter++;
            return func.apply(func, [...arguments]);
        } else {
            callCounter++;
            return func.apply(func, [...arguments]);
        } 
    };
}

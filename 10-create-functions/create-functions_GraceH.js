/* eslint-disable no-unused-vars */

const createFunctions = num => {
    var newFunc = function(idx) {
        return function() {
            return idx;
        }
    }
    var funcArr = [];
    for (var i = 0; i < num; i++) {
        funcArr.push(newFunc(i));
    }
    return funcArr;
}

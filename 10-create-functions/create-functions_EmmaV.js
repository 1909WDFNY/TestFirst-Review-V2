function createFunctions (num) {
    var callbackArray = [];
    for (var i = 0; i < num; i++) {
        callbackArray.push(createScope(i));
    }
    return callbackArray;

}

function createScope (idx) {
    return function () {
        return idx;
    }
}

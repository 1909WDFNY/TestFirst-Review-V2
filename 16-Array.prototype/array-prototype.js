/* eslint-disable no-unused-vars */

Array.prototype.map = function(func) {
    let arr = [];
    this.forEach(e => arr.push(`${func(e)}!!`))
    return arr;
}

Array.prototype.filter = function(func) {
    let arr = [];
    this.forEach(e => {
        if (func(e)) arr.push('#' + e);
    })
    return arr;
}

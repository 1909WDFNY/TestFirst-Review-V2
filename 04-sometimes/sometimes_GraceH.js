/* eslint-disable no-unused-vars */

const sometimes = func => {
    let count = 0;
    return function() {
        count++;
        if (count > 3 && !(count % 2)) return 'I do not know!';
        return func.apply(this, arguments);
    }
}

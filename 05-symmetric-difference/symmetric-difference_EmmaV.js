function difference(array, arrayTwo) {
    return array.filter((element) => !arrayTwo.includes(element));
}

function symmetricDiff (array, arrayTwo) {
    //use the previous func, run twice
    const diffArrayOne = difference (array, arrayTwo);
    const diffArrayTwo = difference (arrayTwo, array);
    return [...diffArrayOne, ...diffArrayTwo];
}

function difference(array, arrayTwo) {
    return array.filter(e => !arrayTwo.includes(e))
}

const symmetricDiff = (arrOne, arrTwo) => {
    return difference(arrOne, arrTwo).concat(difference(arrTwo, arrOne));
    // return [...difference(arrOne, arrTwo), ...difference(arrTwo, arrOne)];
}

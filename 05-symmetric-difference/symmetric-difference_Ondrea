function difference(array, arrayTwo) {
    delta = array.filter(element => !arrayTwo.includes(element))
    return delta
}

function symmetricDiff (arr, arrTwo){
    let delta1 = difference (arr, arrTwo)
    let delta2 = difference (arrTwo, arr)
    return delta1.concat(delta2)
}

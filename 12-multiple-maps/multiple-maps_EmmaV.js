const multipleMaps = (keysArray, objArray) => {
    const finalArray = keysArray.map(function(keyFromArray) {
        for (let i = 0; i < objArray.length; i++) {
            let currentObj = objArray[i];
            if (currentObj.hasOwnProperty(keyFromArray)) {
                return currentObj[keyFromArray];
            }
        }
    });
    return finalArray;

}

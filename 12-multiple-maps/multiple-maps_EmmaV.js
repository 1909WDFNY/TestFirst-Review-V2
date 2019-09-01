const multipleMaps = (keysArray, objArray) => {
    let finalArray = keysArray.map(function(keyFromArray) {
        for (const obj of objArray) {
            if (obj.hasOwnProperty(keyFromArray)) {
                return obj[keyFromArray];
            }
        }
    });
    return finalArray;

}


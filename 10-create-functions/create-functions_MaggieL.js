function createFunctions(numberOfFunctions){
    // returns an array of functions 
    // each function returns their index in the array :0
    let funcArray = [];

    function createIndexFunc(i){
        return function(){
            let index = i;
            return index;
        }
    }

    //create function that returns the current index and push to array
    for (let i = 0; i < numberOfFunctions; i++){
        funcArray.push(createIndexFunc(i))
    }

    return funcArray;
}

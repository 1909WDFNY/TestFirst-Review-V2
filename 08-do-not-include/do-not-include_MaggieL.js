/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function(value){
    let numList = value;
    if (!Array.isArray(value)) numList = [value];

    let thisArr = this;
    
    //push number into new array if index value is not matching
    // don't push if index value is matching

    function notInNumList(currElem, index){
        if (numList.includes(index)) return false;
        return true;
    }
    
    const notIncluded = thisArr.filter(notInNumList);
    return notIncluded;
}



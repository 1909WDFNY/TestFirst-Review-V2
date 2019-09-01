Array.prototype.doNotInclude = function (excludeIdx){
    let returnArray = [];
    if (!Array.isArray(excludeIdx)) {
        excludeIdx = [excludeIdx];
    }
    return this.filter(function(element, idx){
        return !excludeIdx.includes(idx);
    });


};

const accessor = (obj) => {
    return function (key, newVal) {
        if (!newVal) {
            return obj[key];
        }
        else {
            obj[key] = newVal;
        }
        
    }
}

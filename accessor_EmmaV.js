const accessor = (object) => {
    //return function
    return function(property, value) {
        if (property && value) {
            object[property] = value;
        } else {
            return object[property];
        }
    }
}

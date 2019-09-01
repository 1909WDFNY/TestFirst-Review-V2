const callAll = (object, arrayOfFuncs) => {
    return arrayOfFuncs.map(func=> {
        return func.call(object);
    });
}

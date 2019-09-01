class MyEventEmitter {
    constructor(){
        this.events = {};
    }
    
    addListener(event, callback){
        //push callback into array if key exists, 
        //else create new key w/ value as [callback] array
        if (this.events[event]) {
            this.events[event].push(callback);
        } else {
            this.events[event] = [callback];
        }
    }
    
    emit(event){
        const arrayOfFuncs = this.events[event]
        let getArgs = [...arguments]
        getArgs = getArgs.slice(1)
        arrayOfFuncs.forEach(function(currFunc){
            currFunc.apply({}, getArgs)
        })
    }
}

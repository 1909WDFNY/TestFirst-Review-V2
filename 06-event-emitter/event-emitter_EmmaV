class  MyEventEmitter {
    constructor () {
        this.events = {};
    }
    addListener (event, callback) {
        (this.events[event]) ? this.events[event].push(callback) : this.events[event] = [callback];
    }

    emit (event, ...theArgs) {
        this.events[event].forEach(callback => {
            callback.apply(null, theArgs);
        });
    }
}

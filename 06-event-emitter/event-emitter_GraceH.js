/* eslint-disable no-unused-vars */

class MyEventEmitter {
    constructor() {
        this.events = {};
    }
    addListener(funcName, func) {
        (!this.events[funcName]) ? this.events[funcName] = [func] : this.events[funcName].push(func);
    }
    emit(callback, ...args) {
        this.events[callback].forEach(func => func.apply(null, [...args]));
    }
}

/* eslint-disable no-unused-vars */
 class MyEventEmitter {
     constructor() {
         this.events = {};
     }
     addListener(eventKey, callbackFunc) {
         //create condition if key & array-value doesnt exist
         if(!this.events[eventKey]){
             this.events[eventKey] = [callbackFunc];
         } else {
             //push the value into the existing key
        this.events[eventKey].push(callbackFunc);
         }
     }
     //can take any num of names --- unknown amount of parameters
     emit() {
         //use spread operator to support any num of names
         //argumentsArr needs to be an array to use apply's 2nd parameter & to also use .forEach
         let argumentsArr = [...arguments];
         //first arg is the KEYEVENT name
         //afterward each el is the callback values
         //INVOKE the callbacks onto each el
        return this.events[argumentsArr[0]]
        .forEach(function(el){
            el.apply(null, argumentsArr.slice(1))
        })
     }
 }

 /*
 class MyEventEmitter {
     constructor() {
         this.events = {}
     }
     //rmmbr "methods on its prototype" means its outside of the constructor(){}
     addListener(name, callback) {
         if(this.events[name]) {
             this.events[name].push(callback)
         } else {
             this.events[name] = [callback]
         }
     }
     //`...` is the "REST" operator & that is being used to 'hold' all of the possible para
     emit(name, ...args) {
         this.events[name].forEach(cb => cb.apply(null, args))
     }
 }
*/

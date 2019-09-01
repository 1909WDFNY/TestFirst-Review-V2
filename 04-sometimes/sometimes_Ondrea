
/* eslint-disable no-unused-vars */
function sometimes (func){
   let count = 1

    return function () {

        if (count > 3 && count % 2 === 0){
            // result = func.apply(null,'I do not know')
            count++
            console.log('count: ', count)
            return `I do not know!`
           
        } else {
            count++
            return func.apply(null,arguments)
        }   
    }
     
}

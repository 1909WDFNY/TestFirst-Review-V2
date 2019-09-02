
/* eslint-disable no-unused-vars */
function accessor (obj){
    return (key, value)=>{
        if(value){
            obj[key] = value
        }
      return  obj[key]
    }

}

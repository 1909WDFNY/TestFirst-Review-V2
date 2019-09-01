function rotater (string){
    let strLength = string.length
    let  strRotate = ''
    let maxVal = false
    return function rotateTimes(num){
        if(num === strLength){
            maxVal = !maxVal
            strRotate = string
        }

        if(maxVal === false){
            strRotate = string.substring(num, string.length) + string.slice(0, num) 
        } else if (maxVal === true){
            strRotate = string.slice(strLength- num, strLength) + string.substring(0, strLength- num)
        }
        

        return strRotate
    }

}

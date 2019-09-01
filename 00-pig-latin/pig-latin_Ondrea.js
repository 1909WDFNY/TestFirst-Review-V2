const vowelArr = ['a', 'e', 'i', 'o','u']
function changeStr (str){
    let piggyArr = str.split('')
    let count = 0
    for (let i = 0; i < piggyArr.length; i++){
        if(vowelArr.includes(piggyArr[i]) && piggyArr[i-1] !== 'q'){
            let front = piggyArr.slice(0,count).join('')+'ay'
            piggyArr.splice(0,count)
            return piggyArr.join('') + front
        } else {
            count ++
        }
    }
}

function pigify (str){
    strArr = str.split(' ')
    return strArr.map(element => changeStr (element)).join(' ')
       
}

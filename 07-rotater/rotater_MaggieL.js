/* eslint-disable no-unused-vars */
function rotater(word){
    let reversal = false;

    return function(numRotation){
        let charList = word.split('');
        
        function pushAtFront(){
            let lastChar = charList.pop();
            charList.unshift(lastChar);
        }

        function pushAtEnd(){
            let firstLetter = charList.shift();
            charList.push(firstLetter);
        }

        if (numRotation >= word.length) reversal = !reversal;
        
        while (numRotation > 0){
            numRotation--; 
            if (reversal === false){
                pushAtEnd();
            } else {
                pushAtFront();
            }
        }

        return charList.join('');
    }    
}

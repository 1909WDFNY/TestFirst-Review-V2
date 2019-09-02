/* eslint-disable no-unused-vars */

const mapQuest = arr => {
    let dupPair = {
        N: 'S',
        S: 'N',
        E: 'W',
        W: 'E'
    };
    return arr.reduce((acc, currDir) => {
        (dupPair[acc[acc.length-1]] === currDir) ? acc.pop() : acc.push(currDir);
        return acc;
    }, []);
}

// with an array and recursion:

// const mapQuest = arr => {
//     let count = 0;
//     let dupPair = ['NS', 'SN', 'EW', 'WE'];
//     let resultArr = arr.reduce((acc, currDir, idx, thisArr) => {
//         if (dupPair.includes(thisArr[idx-1] + currDir)) {
//             count ++;
//             acc.pop();
//         }
//         else acc.push(currDir);
//         return acc;
//     }, []);

//     //keep running mapQuest on itself until there are no more redundant direction pairs
//     if (count !== 0) return mapQuest(resultArr);
//     return resultArr;
// }

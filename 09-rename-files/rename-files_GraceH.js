/* eslint-disable no-unused-vars */

const renameFiles = arr => {
    //create an arr that will hold objects representing each file
    const resultArr = [];
    resultArr.push({[arr[0]]: 1})
    for (let i = 1; i < arr.length; i++) {
        const file = arr[i];
        const existingNames = resultArr.map(fileObj => Object.keys(fileObj)[0]);
        let count = 1;

        //check if filename(count) already exists
        const checkForDupes = () => {
            if (!existingNames.includes(file)) resultArr.push({[file]: 1});
            else if (!existingNames.includes(`${file}(${count})`)) resultArr.push({[`${file}(${count})`]: 1});
            else {
                count++;
                return checkForDupes();
            }
        }
        checkForDupes();
    }
    return resultArr.map(fileObj => Object.keys(fileObj).join(''));
}

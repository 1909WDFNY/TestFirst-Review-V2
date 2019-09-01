/* eslint-disable no-unused-vars */
function renameFiles(fileList){
    //file names will have the addition of (n) where n is the number
    // use dictionary with currkey + 1
    const fileDict = {}
    let updatedFiles = [];
    fileList.forEach(function(currFile){
        
        if (!(currFile in fileDict)){ //if file doesn't exist in dict
            //create the file and initialize at 0
            fileDict[currFile] = 0;
            updatedFiles.push(currFile)
            
        } else {
            fileDict[currFile] += 1;
            let fileNumber = fileDict[currFile]
            let newFileName = `${currFile}(${fileNumber})`
            while (updatedFiles.includes(newFileName)){
                fileDict[currFile] += 1;
                fileNumber = fileDict[currFile]
                newFileName = `${currFile}(${fileNumber})`;
            }
            updatedFiles.push(`${currFile}(${fileNumber})`)
        }
    })
    return updatedFiles;
}

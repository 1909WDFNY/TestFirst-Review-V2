const renameFiles = (arrayOfFileNames) => {
    const newNames = [];
    arrayOfFileNames.forEach(filename => {
        let newFilename = filename;
        let n = 0;
        //for each name, if it exists in the name dictionary - while loop: as long as name exists - increment n, rename file with new n
        while (newNames.includes(newFilename)) {
            n++;
            newFilename = `${filename}(${n})`
        }
        //as soon as name doesn't exist, put it in the аrray
        newNames.push(newFilename);
    });
    return newNames;
}

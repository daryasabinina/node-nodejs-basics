import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const rename = async () => {
    fs.readFile('files/properFilename.md')
        .then(() => {
            console.error(customError);
        })
        .catch(err => {
            if (err.code = 'ENOENT') {
                fs.rename('files/wrongFilename.txt', 'files/properFilename.md');
            } else {
                console.error(err)
            }
        })
};

rename();

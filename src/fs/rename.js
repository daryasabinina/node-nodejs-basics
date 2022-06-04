import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const rename = async () => {
    const fileWrong = new URL('files/wrongFilename.txt', import.meta.url);
    const fileProper = new URL('files/properFilename.md', import.meta.url);
    fs.readFile(fileProper)
        .then(() => {
            console.error(customError);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                fs.rename(fileWrong, fileProper);
            } else {
                console.error(err)
            }
        })
};

rename();

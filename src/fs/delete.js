import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const remove = async () => {
    const file = new URL('files/fileToRemove.txt', import.meta.url);
    fs.readFile(file)
        .then(() => {
            fs.rm(file);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                console.error(customError);
            } else {
                console.error(err);
            }
        })
};

remove();

import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const remove = async () => {
    fs.readFile('files/fileToRemove.txt')
        .then(() => {
            fs.rm('files/fileToRemove.txt');
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

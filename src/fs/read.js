import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const read = async () => {
    const file = new URL('files/fileToRead.txt', import.meta.url);
    fs.readFile(file, 'utf8')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                console.error(customError);
            } else {
                console.error(err);
            }
        })
};

read();

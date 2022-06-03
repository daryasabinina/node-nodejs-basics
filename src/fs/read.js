import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const read = async () => {
    fs.readFile('files/fileToRead.txt', 'utf8')
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

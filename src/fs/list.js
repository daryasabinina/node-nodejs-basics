import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const list = async () => {
    fs.readdir('files')
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

list();

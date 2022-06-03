import * as fs from 'fs/promises';

export const create = async () => {
    fs.open('files/fresh.txt')
        .then(() => {
            const err = new Error('FS operation failed');
            console.error(err);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                fs.writeFile('files/fresh.txt', 'I am fresh and young');
            } else {
                console.error(err);
            }
        })
};

create();

import * as fs from 'fs/promises';

export const create = async () => {
    const file = new URL('files/fresh.txt', import.meta.url);
    fs.open(file)
        .then(() => {
            const err = new Error('FS operation failed');
            console.error(err);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                fs.writeFile(file, 'I am fresh and young');
            } else {
                console.error(err);
            }
        })
};

create();

import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const copy = async () => {
    fs.opendir('files_copy')
        .then(() => {
            console.error(customError);
        })
        .catch(err => {
            if (err.code === 'ENOENT') {
                fs.cp('files', 'files_copy', { recursive: true })
                    .catch(err => {
                        if (err.code === 'ENOENT') {
                            console.error(customError);
                        } else {
                            console.error(new Error(err))
                        }
                    })
            } else {
                console.error(err)
            }
        })
};

copy();

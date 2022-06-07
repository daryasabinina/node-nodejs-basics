import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const list = async () => {
    const files = new URL('files/', import.meta.url);

    try {
        const listOfFiles = await fs.readdir(files);
        console.log(listOfFiles);
    } catch {
        throw customError;
    }
};

list();

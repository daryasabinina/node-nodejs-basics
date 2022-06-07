import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const remove = async () => {
    const file = new URL('files/fileToRemove.txt', import.meta.url);

    try {
        await fs.rm(file);
    } catch {
        throw customError;
    }
};

remove();

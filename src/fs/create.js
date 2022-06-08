import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const create = async () => {
    const file = new URL('files/fresh.txt', import.meta.url);
    try {
        await fs.writeFile(file, 'I am fresh and young', { flag: 'wx' });
    } catch {
        throw customError;
    }
};

create();

import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const read = async () => {
    const file = new URL('files/fileToRead.txt', import.meta.url);

    try {
        const fileContent = await fs.readFile(file, 'utf8');
        console.log(fileContent);
    } catch {
        throw customError;
    }
};

read();

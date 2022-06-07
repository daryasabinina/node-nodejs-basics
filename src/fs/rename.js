import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const rename = async () => {
    const fileWrong = new URL('files/wrongFilename.txt', import.meta.url);
    const fileProper = new URL('files/properFilename.md', import.meta.url);

    try {
        await fs.rename(fileWrong, fileProper);
    } catch {
        throw customError;
    }
};

rename();

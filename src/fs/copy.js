import * as fs from 'fs/promises';

const customError = new Error('FS operation failed');

export const copy = async () => {
    const files = new URL('files', import.meta.url);
    const files_copy = new URL('files_copy', import.meta.url);

    try {
        await fs.mkdir(files_copy, { recursive: false });
        await fs.cp(files, files_copy, { recursive: true })
    } catch {
        throw customError;
    }
};

copy();

import fs from 'fs/promises';
import Stream from 'stream';
import { stdout } from 'process';

export const read = async () => {
    const file = new URL('files/fileToRead.txt', import.meta.url);
    const readableStream = new Stream.Readable();
    readableStream._read = () => {};

    try {
        const content = await fs.readFile(file);
        readableStream.push(content);
        readableStream.pipe(stdout);
    } catch (err) {
        throw err;
    }
};

read();

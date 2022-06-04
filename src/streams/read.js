import fs from 'fs';
import { stdout } from 'process';

export const read = async () => {
    const file = new URL('files/fileToRead.txt', import.meta.url);

    const stream = fs.createReadStream(file);
    stream.pipe(stdout);
};

read();

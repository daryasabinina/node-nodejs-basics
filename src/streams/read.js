import fs from 'fs';
import { stdout } from 'process';

export const read = async () => {
    const stream = fs.createReadStream('files/fileToRead.txt');
    stream.pipe(stdout);
};

read();

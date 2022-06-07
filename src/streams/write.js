import fs from 'fs';
import { stdin } from 'process';

export const write = async () => {
    const file = new URL('files/fileToWrite.txt', import.meta.url);
    const stream = fs.createWriteStream(file);
    stdin.on('data', data => {
        stream.write(data.toString());
    });
};

write();

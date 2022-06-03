import fs from 'fs';
import { stdin, exit } from 'process';

export const write = async () => {
    const stream = fs.createWriteStream(`files/fileToWrite.txt`);
    stdin.on('data', data => {
        stream.write(data.toString());
        exit();
    });
};

write();

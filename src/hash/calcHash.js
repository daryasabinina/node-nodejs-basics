import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const file = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
    const hash = crypto.createHash('sha256');

    fs.readFile(file)
        .then(res => {
            hash.update(res);
            console.log(hash.digest('hex'));
        })
};

calculateHash();

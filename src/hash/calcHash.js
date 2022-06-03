import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const hash = crypto.createHash('sha256');

    fs.readFile('files/fileToCalculateHashFor.txt')
        .then(res => {
            hash.update(res);
            console.log(hash.digest('hex'));
        })
};

calculateHash();

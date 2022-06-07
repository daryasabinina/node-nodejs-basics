import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const file = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
    const hash = crypto.createHash('sha256');

    try {
        const content = await fs.readFile(file);
        console.log(hash.update(content).digest('hex'));
    } catch (err) {
        throw err;
    }
};

calculateHash();

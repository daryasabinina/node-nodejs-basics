import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream
} from 'fs';

export const decompress = async () => {
    const gunzip = createGunzip();
    const source = createReadStream('files/archive.gz');
    const destination = createWriteStream('files/fileToCompress.txt');

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

decompress();

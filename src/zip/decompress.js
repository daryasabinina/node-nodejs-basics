import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream
} from 'fs';

export const decompress = async () => {
    const file = new URL('files/fileToCompress.txt', import.meta.url);
    const archive = new URL('files/archive.gz', import.meta.url);
    const gunzip = createGunzip();
    const source = createReadStream(archive);
    const destination = createWriteStream(file);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

decompress();

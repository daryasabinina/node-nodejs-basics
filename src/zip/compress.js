import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream
} from 'fs';

export const compress = async () => {
    const file = new URL('files/fileToCompress.txt', import.meta.url);
    const archive = new URL('files/archive.gz', import.meta.url);
    const gzip = createGzip();
    const source = createReadStream(file);
    const destination = createWriteStream(archive);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throw err;
        }
    });
};

compress();

import { stdout, stdin } from 'process';
import { Transform, pipeline } from 'stream';

export const transform = async () => {
    class ReverseTransform extends Transform {
        constructor(options) {
            super(options);
        }

        _transform(chunk, e, callback) {
            callback(null, Buffer.from([...chunk].reverse()).toString());
        }
    }
    const reverse = new ReverseTransform();

    pipeline(
        stdin,
        reverse,
        stdout,
        (err) => { throw err; }
    )
};

transform();

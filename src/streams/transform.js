import { stdout, stdin } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
    class UppercaseTransform extends Transform {
        constructor(options) {
            super(options);
        }

        _transform(chunk) {
            this.push(Buffer.from([...chunk].reverse()).toString());
        }
    }
    stdin.pipe(new UppercaseTransform()).pipe(stdout);
};

transform();

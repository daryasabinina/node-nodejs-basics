import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const file = new URL('files/script.js', import.meta.url).pathname;
    const ls = spawn('node', [file, ...args]);
    process.stdin.pipe(ls.stdin);

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

};

spawnChildProcess(process.argv.slice(2))

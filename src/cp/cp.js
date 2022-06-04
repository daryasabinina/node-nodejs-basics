import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const ls = spawn('node', ['files/script.js', ...args]);
    process.stdin.pipe(ls.stdin);

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

};

spawnChildProcess(process.argv.slice(2))

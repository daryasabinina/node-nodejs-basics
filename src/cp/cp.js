import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// windows case just in case
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    const scriptProcess = spawn('node', [`${__dirname}/files/script.js`, ...args]);

    process.stdin.on('data', (data) => {
        scriptProcess.stdin.write('Master stdin: ' + data)
    });

    scriptProcess.stdout.on('data', (data) => {
        console.log(`Master stdout: Child stdout: ${data}`);
    });

};

spawnChildProcess(process.argv.slice(2))

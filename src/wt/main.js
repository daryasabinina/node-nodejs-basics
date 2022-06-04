import os from 'os';
import { Worker } from 'worker_threads';

const creator = (i) => new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
        workerData: 10 + i
    });
    worker.on('message', (res) => resolve(res));
    worker.on('error', reject);
});

export const performCalculations = async () => {
    const cpuData = os.cpus();
    const arrResults = [];

    for (let i = 0; i < cpuData.length; i++) {
        try {
            const data = await creator(i);
            arrResults.push(
                {
                    status: 'resolved',
                    data: data
                }
            );

        } catch {
            arrResults.push(
                {
                    status: 'error',
                    data: null
                }
            );
        }
    }

    return arrResults;
};

performCalculations();

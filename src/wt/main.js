import os from 'os';
import { Worker } from 'worker_threads';

const workerCreator = (i) => new Promise((resolve, reject) => {
    const file = new URL('./worker.js', import.meta.url);
    const worker = new Worker(file, {
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
            const data = await workerCreator(i);
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

    console.log(arrResults);
    return arrResults;
};

performCalculations();


import type { Test, LighthouseReport, TrendData } from '../types';

// In-memory store to simulate asynchronous test states
const runningTests = new Map<string, number>();

const createRandomReport = (): LighthouseReport => {
    const clsScore = Math.random() * 0.3; // 0 to 0.3
    const fcpScore = Math.random() * 2.5 + 0.5; // 0.5s to 3.0s
    const lcpScore = Math.random() * 3.0 + 1.0; // 1.0s to 4.0s

    return {
        cls: { score: clsScore, displayValue: clsScore.toFixed(3) },
        fcp: { score: fcpScore, displayValue: `${fcpScore.toFixed(1)} s` },
        lcp: { score: lcpScore, displayValue: `${lcpScore.toFixed(1)} s` },
    };
};

const regions = [
    { value: 'us-central1', label: 'Iowa, USA' },
    { value: 'europe-west1', label: 'Belgium' },
    { value: 'asia-east1', label: 'Taiwan' },
    { value: 'australia-southeast1', label: 'Sydney, Australia' }
];

const getRandomRegion = () => regions[Math.floor(Math.random() * regions.length)];

export const startTest = (url: string): Promise<Pick<Test, 'id' | 'status'>> => {
    return new Promise((resolve) => {
        const testId = `test_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        runningTests.set(testId, 0); // Store test with 0 polls
        setTimeout(() => {
            resolve({ id: testId, status: 'running' });
        }, 500);
    });
};

export const getTestResult = (url: string, testId: string): Promise<Test> => {
    return new Promise((resolve, reject) => {
        if (!runningTests.has(testId)) {
            return reject(new Error('Test not found. It might have expired.'));
        }

        const pollCount = runningTests.get(testId)!;
        runningTests.set(testId, pollCount + 1);

        // Simulate test completion after 2-3 polls
        if (pollCount >= 2) {
            runningTests.delete(testId);
            setTimeout(() => {
                 resolve({
                    id: testId,
                    date: new Date().toISOString(),
                    url: url,
                    status: 'complete',
                    region: getRandomRegion(),
                    desktopReport: createRandomReport(),
                    mobileReport: createRandomReport(),
                });
            }, 1000);
        } else {
             setTimeout(() => {
                 resolve({
                    id: testId,
                    date: new Date().toISOString(),
                    url: url,
                    status: 'running',
                    region: getRandomRegion(),
                    desktopReport: null!,
                    mobileReport: null!,
                });
            }, 1000);
        }
    });
};

export const getTestHistory = (url: string): Promise<Test[]> => {
    return new Promise((resolve) => {
        const history: Test[] = [];
        for (let i = 0; i < 5; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i * 2);
            history.push({
                id: `hist_${i}_${Math.random().toString(36).substring(2, 9)}`,
                date: date.toISOString(),
                url: url,
                status: 'complete',
                region: getRandomRegion(),
                desktopReport: createRandomReport(),
                mobileReport: createRandomReport(),
            });
        }
        setTimeout(() => {
            resolve(history);
        }, 300);
    });
};

export const getTrendData = (url: string): Promise<TrendData[]> => {
    return new Promise((resolve) => {
        const trend: TrendData[] = [];
        for (let i = 10; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            trend.push({
                date: date.toLocaleDateString('en-CA'), // YYYY-MM-DD
                cls: Math.random() * 0.2,
                fcp: Math.random() * 2000 + 500, // in ms
                lcp: Math.random() * 3000 + 1000, // in ms
            });
        }
        setTimeout(() => {
            resolve(trend);
        }, 500);
    });
};

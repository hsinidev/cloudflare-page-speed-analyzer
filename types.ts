
export interface LabeledRegion {
    value: string;
    label: string;
}

export interface LighthouseReport {
    cls: {
        score: number;
        displayValue: string;
    };
    fcp: {
        score: number;
        displayValue: string;
    };
    lcp: {
        score: number;
        displayValue: string;
    };
}

export interface Test {
    id: string;
    date: string;
    url: string;
    status: 'running' | 'complete' | 'failed';
    region: LabeledRegion;
    desktopReport: LighthouseReport;
    mobileReport: LighthouseReport;
}

export interface TrendData {
    date: string;
    cls: number;
    fcp: number;
    lcp: number;
}

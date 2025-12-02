
import React, { useState } from 'react';
import type { Test } from '../types';
import { MetricCard } from './MetricCard';

interface ResultsDashboardProps {
    result: Test;
    onViewTrend: () => void;
    isTrendVisible: boolean;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ result, onViewTrend, isTrendVisible }) => {
    const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
    const report = view === 'desktop' ? result.desktopReport : result.mobileReport;

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Performance Results</h2>
                    <p className="text-sm text-gray-400">
                        Test from <span className="font-semibold text-cyan-400">{result.region.label}</span> on {new Date(result.date).toLocaleString()}
                    </p>
                </div>
                <div className="flex space-x-2 bg-gray-700 p-1 rounded-lg">
                    <button onClick={() => setView('desktop')} className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${view === 'desktop' ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-600'}`}>Desktop</button>
                    <button onClick={() => setView('mobile')} className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${view === 'mobile' ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-600'}`}>Mobile</button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard 
                    title="Largest Contentful Paint (LCP)" 
                    value={report.lcp.displayValue} 
                    score={report.lcp.score} 
                    type="lcp"
                    tooltip="Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading."
                />
                <MetricCard 
                    title="First Contentful Paint (FCP)" 
                    value={report.fcp.displayValue} 
                    score={report.fcp.score} 
                    type="fcp"
                    tooltip="Marks the first point in time that the browser renders any part of the page. For a good user experience, FCP should be 1.8 seconds or less."
                />
                <MetricCard 
                    title="Cumulative Layout Shift (CLS)" 
                    value={report.cls.displayValue} 
                    score={report.cls.score} 
                    type="cls"
                    tooltip="Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1 or less."
                />
            </div>

             <div className="mt-6 text-center">
                <button 
                    onClick={onViewTrend}
                    disabled={isTrendVisible}
                    className="bg-gray-700 hover:bg-gray-600 text-cyan-400 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isTrendVisible ? 'Trend Data Loaded' : 'View Trend'}
                </button>
            </div>
        </div>
    );
};

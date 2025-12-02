
import React from 'react';
import type { Test } from '../types';

interface HistoryPanelProps {
    history: Test[];
}

const getStatusIndicator = (score: number, type: 'lcp' | 'fcp' | 'cls') => {
    let colorClass = 'bg-gray-500';
    switch (type) {
        case 'lcp':
            if (score <= 2.5) colorClass = 'bg-green-500';
            else if (score <= 4.0) colorClass = 'bg-yellow-500';
            else colorClass = 'bg-red-500';
            break;
        case 'fcp':
            if (score <= 1.8) colorClass = 'bg-green-500';
            else if (score <= 3.0) colorClass = 'bg-yellow-500';
            else colorClass = 'bg-red-500';
            break;
        case 'cls':
            if (score <= 0.1) colorClass = 'bg-green-500';
            else if (score <= 0.25) colorClass = 'bg-yellow-500';
            else colorClass = 'bg-red-500';
            break;
    }
    return <div className={`w-2.5 h-2.5 rounded-full ${colorClass}`} title={`${type.toUpperCase()}: ${score.toFixed(3)}`}></div>;
};

export const HistoryPanel: React.FC<HistoryPanelProps> = ({ history }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-full">
            <h2 className="text-xl font-bold text-white mb-4">Test History</h2>
            <ul className="space-y-3">
                {history.map(test => (
                    <li key={test.id} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-200">{new Date(test.date).toLocaleDateString()}</p>
                            <p className="text-xs text-gray-400">{new Date(test.date).toLocaleTimeString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-xs text-gray-400 mr-1">D:</span>
                            {getStatusIndicator(test.desktopReport.lcp.score, 'lcp')}
                            {getStatusIndicator(test.desktopReport.fcp.score, 'fcp')}
                            {getStatusIndicator(test.desktopReport.cls.score, 'cls')}
                        </div>
                         <div className="flex items-center space-x-2">
                           <span className="text-xs text-gray-400 mr-1">M:</span>
                            {getStatusIndicator(test.mobileReport.lcp.score, 'lcp')}
                            {getStatusIndicator(test.mobileReport.fcp.score, 'fcp')}
                            {getStatusIndicator(test.mobileReport.cls.score, 'cls')}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

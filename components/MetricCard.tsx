
import React from 'react';
import { InfoIcon } from './icons/InfoIcon';

type MetricType = 'lcp' | 'fcp' | 'cls';

interface MetricCardProps {
    title: string;
    value: string;
    score: number;
    type: MetricType;
    tooltip: string;
}

const getScoreColor = (score: number, type: MetricType): string => {
    switch (type) {
        case 'lcp':
            if (score <= 2.5) return 'text-green-400';
            if (score <= 4.0) return 'text-yellow-400';
            return 'text-red-400';
        case 'fcp':
            if (score <= 1.8) return 'text-green-400';
            if (score <= 3.0) return 'text-yellow-400';
            return 'text-red-400';
        case 'cls':
            if (score <= 0.1) return 'text-green-400';
            if (score <= 0.25) return 'text-yellow-400';
            return 'text-red-400';
        default:
            return 'text-gray-300';
    }
};

const getBackgroundColor = (score: number, type: MetricType): string => {
    switch (type) {
        case 'lcp':
            if (score <= 2.5) return 'bg-green-500/10 border-green-500/30';
            if (score <= 4.0) return 'bg-yellow-500/10 border-yellow-500/30';
            return 'bg-red-500/10 border-red-500/30';
        case 'fcp':
            if (score <= 1.8) return 'bg-green-500/10 border-green-500/30';
            if (score <= 3.0) return 'bg-yellow-500/10 border-yellow-500/30';
            return 'bg-red-500/10 border-red-500/30';
        case 'cls':
            if (score <= 0.1) return 'bg-green-500/10 border-green-500/30';
            if (score <= 0.25) return 'bg-yellow-500/10 border-yellow-500/30';
            return 'bg-red-500/10 border-red-500/30';
        default:
            return 'bg-gray-700 border-gray-600';
    }
};

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, score, type, tooltip }) => {
    const colorClass = getScoreColor(score, type);
    const bgClass = getBackgroundColor(score, type);

    return (
        <div className={`p-4 rounded-lg border ${bgClass} flex flex-col justify-between`}>
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-medium text-gray-300">{title}</h3>
                    <div className="group relative">
                        <InfoIcon className="w-4 h-4 text-gray-500" />
                        <div className="absolute bottom-full mb-2 w-64 -translate-x-1/2 left-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-lg">
                            {tooltip}
                        </div>
                    </div>
                </div>
                <p className={`text-4xl font-bold ${colorClass}`}>{value}</p>
            </div>
            <div className="text-right text-xs text-gray-400 mt-2">
                Raw Score: {score.toFixed(3)}
            </div>
        </div>
    );
};

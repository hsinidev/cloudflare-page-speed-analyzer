
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { TrendData } from '../types';

interface TrendChartProps {
    data: TrendData[];
}

export const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Core Web Vitals Trend (ms)</h2>
            <div style={{ width: '100%', height: 300 }}>
                 <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="date" stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1A202C',
                                border: '1px solid #2D3748',
                                borderRadius: '0.5rem'
                            }}
                            labelStyle={{ color: '#E2E8F0' }}
                        />
                        <Legend wrapperStyle={{fontSize: "14px"}} />
                        <Line type="monotone" dataKey="lcp" stroke="#4FD1C5" strokeWidth={2} name="LCP (ms)" dot={{r: 3}} activeDot={{r: 6}} />
                        <Line type="monotone" dataKey="fcp" stroke="#F6E05E" strokeWidth={2} name="FCP (ms)" dot={{r: 3}} activeDot={{r: 6}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

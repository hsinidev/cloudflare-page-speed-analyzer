
import React, { useState } from 'react';

interface UrlInputFormProps {
    onAnalyze: (url: string) => void;
    initialUrl: string;
    isLoading: boolean;
}

export const UrlInputForm: React.FC<UrlInputFormProps> = ({ onAnalyze, initialUrl, isLoading }) => {
    const [url, setUrl] = useState(initialUrl);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple URL validation
        if (url.startsWith('http://') || url.startsWith('https://')) {
            onAnalyze(url);
        } else {
            alert('Please enter a valid URL including http:// or https://');
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://www.example.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow duration-200"
                    disabled={isLoading}
                    required
                />
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isLoading}
                >
                    Analyze Page Speed
                </button>
            </form>
        </div>
    );
};

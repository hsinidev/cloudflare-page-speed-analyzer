import React, { useState, useCallback, useEffect } from 'react';
import { UrlInputForm } from './components/UrlInputForm';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ResultsDashboard } from './components/ResultsDashboard';
import { HistoryPanel } from './components/HistoryPanel';
import { TrendChart } from './components/TrendChart';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';
import { SeoArticle } from './components/SeoArticle';
import { getModalData } from './components/modalContent';
import { startTest, getTestResult, getTestHistory, getTrendData } from './services/cloudflareService';
import type { Test, TrendData } from './types';

const App: React.FC = () => {
    const [url, setUrl] = useState<string>('https://doodax.com');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentTestId, setCurrentTestId] = useState<string | null>(null);
    const [testResult, setTestResult] = useState<Test | null>(null);
    const [testHistory, setTestHistory] = useState<Test[] | null>(null);
    const [trendData, setTrendData] = useState<TrendData[] | null>(null);
    const [showTrend, setShowTrend] = useState<boolean>(false);
    const [modalData, setModalData] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const resetState = () => {
        setIsLoading(false);
        setError(null);
        setCurrentTestId(null);
        setTestResult(null);
        setTestHistory(null);
        setTrendData(null);
        setShowTrend(false);
    };

    const handleAnalyze = useCallback(async (newUrl: string) => {
        resetState();
        setUrl(newUrl);
        setIsLoading(true);

        try {
            const initialTest = await startTest(newUrl);
            setCurrentTestId(initialTest.id);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            setIsLoading(false);
        }
    }, []);

    const fetchTrend = useCallback(async () => {
        if (!url || trendData) return;
        try {
            const data = await getTrendData(url);
            setTrendData(data);
            setShowTrend(true);
        } catch (err) {
            setError('Failed to fetch trend data.');
        }
    }, [url, trendData]);

    const handleOpenModal = (page: string) => {
        const data = getModalData(page);
        if (data) {
            setModalData(data);
        }
    };

    const handleCloseModal = () => {
        setModalData(null);
    };


    useEffect(() => {
        if (!currentTestId || !isLoading) return;

        const poll = async () => {
            try {
                const result = await getTestResult(url, currentTestId);
                if (result.status === 'complete') {
                    setTestResult(result);
                    setIsLoading(false);
                    setCurrentTestId(null);
                    const history = await getTestHistory(url);
                    setTestHistory(history);
                } else {
                    setTimeout(poll, 2000);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to retrieve test results.');
                setIsLoading(false);
                setCurrentTestId(null);
            }
        };

        const timeoutId = setTimeout(poll, 1000);

        return () => clearTimeout(timeoutId);
    }, [currentTestId, url, isLoading]);

    return (
        <div className="relative min-h-screen flex flex-col font-sans text-slate-100">
            <div className="flex-grow p-4 sm:p-6 lg:p-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    
                    {/* Header */}
                    <header className="text-center py-12">
                        <div className="inline-block p-2 px-4 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-4 backdrop-blur-md">
                            🚀 V2.0 Now Available with Detailed Metrics
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight drop-shadow-sm">
                            Page Speed <span className="text-white">Analyzer</span>
                        </h1>
                        <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Professional grade insights for Core Web Vitals. Optimize your user experience and boost your SEO ranking with real-time data.
                        </p>
                    </header>

                    {/* Main Tool Area */}
                    <main className="space-y-12">
                        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-10 rounded-2xl shadow-2xl">
                            <UrlInputForm onAnalyze={handleAnalyze} initialUrl={url} isLoading={isLoading} />
                            
                            {isLoading && <LoadingIndicator />}
                            {error && (
                                <div className="mt-8 text-center text-red-200 bg-red-900/40 border border-red-500/30 p-4 rounded-xl animate-pulse">
                                    {error}
                                </div>
                            )}

                            {(testResult || trendData || testHistory) && (
                                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in-up">
                                    <div className="lg:col-span-2 space-y-8">
                                        {testResult && (
                                            <ResultsDashboard 
                                                result={testResult} 
                                                onViewTrend={fetchTrend} 
                                                isTrendVisible={showTrend} 
                                            />
                                        )}
                                        {showTrend && trendData && (
                                            <TrendChart data={trendData} />
                                        )}
                                    </div>
                                    <div className="lg:col-span-1">
                                        {testHistory && <HistoryPanel history={testHistory} />}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SEO Article Section */}
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl">
                            <SeoArticle />
                        </div>
                    </main>
                </div>
            </div>

            <Footer onLinkClick={handleOpenModal} />
            
            {modalData && (
                <InfoModal title={modalData.title} onClose={handleCloseModal}>
                    {modalData.content}
                </InfoModal>
            )}
        </div>
    );
};

export default App;
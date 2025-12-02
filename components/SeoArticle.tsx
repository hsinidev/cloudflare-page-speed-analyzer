import React, { useState } from 'react';

export const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="mt-16 bg-slate-800/50 rounded-2xl p-4 sm:p-8 border border-slate-700 shadow-xl" itemScope itemType="https://schema.org/Article">
            <meta itemProp="author" content="HSINI MOHAMED" />
            <meta itemProp="headline" content="The Ultimate Guide to Core Web Vitals and Website Performance Analysis 2024" />
            <meta itemProp="datePublished" content="2023-10-27" />
            <meta itemProp="dateModified" content={new Date().toISOString()} />
            <meta itemProp="image" content="https://doodax.com/og-image.png" />
            <meta itemProp="publisher" content="Doodax Page Speed Analyzer" />

            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Guide to Website Performance</h2>

            <div className={`relative transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
                
                <div className="prose prose-invert max-w-none text-slate-300">
                    
                    {/* Introduction */}
                    <p className="lead text-lg mb-6">
                        In the digital age, speed is not just a luxury; it is a necessity. A slow website drives away visitors, lowers conversion rates, and significantly hurts your search engine rankings. 
                        The <strong>Doodax Page Speed Analyzer</strong> is engineered to provide deep insights into the metrics that matter most: Google's Core Web Vitals. 
                        Understanding Largest Contentful Paint (LCP), First Contentful Paint (FCP), and Cumulative Layout Shift (CLS) is critical for any webmaster aiming for the top spot on search engine results pages (SERPs).
                    </p>

                    {/* Table of Contents */}
                    <div className="bg-slate-900/50 p-6 rounded-xl my-8 border border-slate-700">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Table of Contents</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <li><a href="#what-are-cwv" className="hover:text-cyan-300 transition-colors">1. What are Core Web Vitals?</a></li>
                            <li><a href="#understanding-lcp" className="hover:text-cyan-300 transition-colors">2. Deep Dive: Largest Contentful Paint (LCP)</a></li>
                            <li><a href="#understanding-fcp" className="hover:text-cyan-300 transition-colors">3. Deep Dive: First Contentful Paint (FCP)</a></li>
                            <li><a href="#understanding-cls" className="hover:text-cyan-300 transition-colors">4. Deep Dive: Cumulative Layout Shift (CLS)</a></li>
                            <li><a href="#why-speed-matters" className="hover:text-cyan-300 transition-colors">5. Why Website Speed Impacts SEO</a></li>
                            <li><a href="#how-to-improve" className="hover:text-cyan-300 transition-colors">6. Actionable Tips to Improve Speed</a></li>
                            <li><a href="#faq" className="hover:text-cyan-300 transition-colors">7. Frequently Asked Questions (FAQ)</a></li>
                        </ul>
                    </div>

                    <h3 id="what-are-cwv" className="text-2xl font-bold text-white mt-8 mb-4">1. What are Core Web Vitals?</h3>
                    <p>
                        Core Web Vitals are a specific set of factors that Google considers important in a webpage's overall user experience. They make up part of Google's "page experience" score. 
                        Unlike generic "speed" metrics, CWV focuses on three specific aspects of the user experience: 
                        <strong>loading</strong>, <strong>interactivity</strong>, and <strong>visual stability</strong>.
                    </p>

                    <h3 id="understanding-lcp" className="text-2xl font-bold text-white mt-8 mb-4">2. Deep Dive: Largest Contentful Paint (LCP)</h3>
                    <p>
                        <strong>Largest Contentful Paint (LCP)</strong> measures the time it takes for the largest content element in the viewport to become visible. This is usually a hero image, a video, or a large block of text.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>The Goal:</strong> You want an LCP of <strong>2.5 seconds or less</strong>.</li>
                        <li><strong>Common Causes of Poor LCP:</strong> Slow server response times, render-blocking JavaScript and CSS, slow resource load times, and client-side rendering.</li>
                        <li><strong>How to Optimize:</strong> Optimize your images (use WebP), implement lazy loading for below-the-fold content, upgrade your web hosting, and use a Content Delivery Network (CDN) like Cloudflare.</li>
                    </ul>

                    <h3 id="understanding-fcp" className="text-2xl font-bold text-white mt-8 mb-4">3. Deep Dive: First Contentful Paint (FCP)</h3>
                    <p>
                        <strong>First Contentful Paint (FCP)</strong> marks the first point in the page load timeline where the user can see anything on the screen. It is a crucial metric for "perceived load speed."
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>The Goal:</strong> An FCP of <strong>1.8 seconds or less</strong> is considered good.</li>
                        <li><strong>How to Optimize:</strong> Eliminate render-blocking resources, minify CSS and JavaScript, remove unused CSS, and reduce the Time to First Byte (TTFB).</li>
                    </ul>

                    <h3 id="understanding-cls" className="text-2xl font-bold text-white mt-8 mb-4">4. Deep Dive: Cumulative Layout Shift (CLS)</h3>
                    <p>
                        Have you ever been about to click a button, and suddenly the page shifts, causing you to click the wrong thing? That is <strong>Cumulative Layout Shift (CLS)</strong>. It measures visual stability.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>The Goal:</strong> A CLS score of <strong>0.1 or less</strong>.</li>
                        <li><strong>Common Causes:</strong> Images without dimensions, ads, embeds, and iframes without dimensions, or dynamically injected content.</li>
                        <li><strong>How to Optimize:</strong> Always include <code>width</code> and <code>height</code> size attributes on your images and video elements. Reserve space for ad slots.</li>
                    </ul>

                    <h3 id="why-speed-matters" className="text-2xl font-bold text-white mt-8 mb-4">5. Why Website Speed Impacts SEO</h3>
                    <p>
                        Since 2010, Google has used site speed as a ranking signal. In 2021, the Page Experience update made Core Web Vitals a direct ranking factor. 
                        A slow site means a high bounce rate. If users leave your site immediately because it's slow, Google notices this "pogo-sticking" behavior and demotes your rankings.
                        Furthermore, fast websites convert better. Studies consistently show that for every second of delay in load time, conversion rates drop by an average of 4.42%.
                    </p>

                    <h3 id="how-to-improve" className="text-2xl font-bold text-white mt-8 mb-4">6. Actionable Tips to Improve Speed</h3>
                    <p>
                        Using the Doodax Page Speed Analyzer is your first step. Once you have your report, follow these steps:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 mt-4">
                        <li><strong>Compress Images:</strong> Use tools to compress images without losing quality.</li>
                        <li><strong>Browser Caching:</strong> Leverage browser caching so returning visitors don't have to reload the entire page.</li>
                        <li><strong>Minify Code:</strong> Remove unnecessary spaces, comments, and characters from your code.</li>
                        <li><strong>Reduce Redirects:</strong> Each redirect triggers an additional HTTP request-response cycle.</li>
                    </ol>

                    {/* FAQ Section with Schema */}
                    <div id="faq" className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                        <h3 className="text-2xl font-bold text-white mb-6">7. Frequently Asked Questions</h3>
                        
                        <div className="space-y-4">
                            <div className="bg-slate-900/50 p-4 rounded-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 className="font-bold text-cyan-300" itemProp="name">Is the Doodax Page Speed Analyzer free?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="mt-2 text-sm" itemProp="text">Yes, our tool is 100% free to use for analyzing any public URL. You can run unlimited tests to track your optimization progress.</p>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 p-4 rounded-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 className="font-bold text-cyan-300" itemProp="name">How often should I test my website speed?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="mt-2 text-sm" itemProp="text">We recommend testing whenever you make significant changes to your website (adding plugins, changing themes, uploading new images). For maintenance, a weekly check is advisable to catch any performance regressions.</p>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 p-4 rounded-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 className="font-bold text-cyan-300" itemProp="name">Why are my mobile scores lower than desktop?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="mt-2 text-sm" itemProp="text">Mobile devices typically have slower processors and rely on less stable cellular networks (3G/4G/5G) compared to desktop computers on fiber/broadband. Google prioritizes mobile-first indexing, so optimizing for mobile is critical.</p>
                                </div>
                            </div>

                             <div className="bg-slate-900/50 p-4 rounded-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 className="font-bold text-cyan-300" itemProp="name">Does this tool use real user data?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="mt-2 text-sm" itemProp="text">Doodax uses synthetic testing (Lab Data) to simulate a visit. This is excellent for debugging. However, Google also uses Field Data (CrUX) from real Chrome users for ranking. Both are important.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-gray-400 italic">
                        Disclaimer: Doodax.com is an independent performance analysis tool. Cloudflare® is a registered trademark of Cloudflare, Inc. Google Lighthouse™ is a trademark of Google LLC.
                    </p>
                </div>

                {/* Gradient Mask for collapsed state */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
                )}
            </div>

            <div className="mt-4 flex justify-center">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors focus:outline-none"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? (
                        <>
                            <span>Read Less</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </>
                    ) : (
                        <>
                            <span>Read Full SEO Guide</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </article>
    );
};
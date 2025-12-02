import React from 'react';

// Styling helper for modal content
const Section = ({ title, children }: { title: string, children?: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
        <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
    </div>
);

const AboutContent = () => (
  <>
    <Section title="Our Mission">
        <p>At Doodax.com, we are driven by a singular mission: to democratize web performance optimization. We believe that a faster internet is a more inclusive internet. The Page Speed Analyzer was built to provide developers, SEO specialists, business owners, and marketers with accessible, professional-grade tools to understand the complex metrics that drive user experience and search engine rankings.</p>
    </Section>
    <Section title="The Technology">
        <p>Our platform leverages advanced simulation technologies that mimic the behavior of the Cloudflare Speed API and Google Lighthouse. By conducting synthetic tests from multiple global regions—including North America, Europe, Asia, and Oceania—we offer a comprehensive view of how your website performs for users around the world.</p>
        <p>We focus heavily on <strong>Core Web Vitals</strong> (CWV), the set of metrics Google uses to evaluate real-world user experience. By prioritizing Largest Contentful Paint (LCP), First Contentful Paint (FCP), and Cumulative Layout Shift (CLS), we give you the data that actually matters for your SEO strategy.</p>
    </Section>
    <Section title="Why Choose Us?">
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Accuracy:</strong> Our simulation algorithms are tuned to reflect real-world network conditions.</li>
            <li><strong>Simplicity:</strong> We translate complex technical data into clear, actionable insights.</li>
            <li><strong>History Tracking:</strong> Unlike many free tools, we allow you to track performance trends over time to validate your optimization efforts.</li>
            <li><strong>Privacy First:</strong> We do not store your site's content, only the performance metrics required to generate your report.</li>
        </ul>
    </Section>
  </>
);

const ContactContent = () => (
  <>
    <Section title="Get in Touch">
        <p>We value open communication with our users. Whether you are experiencing a technical issue, have a suggestion for a new feature, or are interested in enterprise solutions, our team is ready to assist you.</p>
    </Section>
    <Section title="Contact Information">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="mb-4"><strong className="text-white">Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a></p>
            <p className="mb-4"><strong className="text-white">Website:</strong> <a href="https://doodax.com" className="text-cyan-400 hover:underline">doodax.com</a></p>
            <p className="mb-4"><strong className="text-white">Developer:</strong> Hsini Mohamed</p>
            <p className="text-sm text-gray-500">Response time: Typically within 24-48 hours during business days.</p>
        </div>
    </Section>
    <Section title="Feedback & Bug Reports">
        <p>Found a bug? We appreciate detailed reports. Please include the URL you were testing, the device you are using, and the time the error occurred when emailing us. Your feedback helps make Doodax better for everyone.</p>
    </Section>
  </>
);

const GuideContent = () => (
    <>
        <Section title="Getting Started">
            <p>Welcome to the Doodax Page Speed Analyzer. This guide will walk you through interpreting your results and taking action to improve your website.</p>
        </Section>
        
        <Section title="Step-by-Step Analysis">
            <ol className="list-decimal pl-5 space-y-3">
                <li><strong>Enter your URL:</strong> Ensure you include the protocol (http:// or https://). Example: <code>https://doodax.com</code>.</li>
                <li><strong>Initiate Test:</strong> Click the "Analyze" button. Our servers will simulate a visit to your site from a random global location to test effective load speeds.</li>
                <li><strong>Wait for Data:</strong> Real-time analysis takes 5-10 seconds. Do not refresh the page while the spinner is active.</li>
                <li><strong>Review Core Web Vitals:</strong> The dashboard will populate with LCP, FCP, and CLS scores.</li>
            </ol>
        </Section>

        <Section title="Interpreting Your Score">
            <div className="space-y-4">
                <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <h4 className="font-bold text-green-400">Largest Contentful Paint (LCP)</h4>
                    <p className="text-sm mt-1">Measures loading performance. This is the time it takes for the main content of the page to load.</p>
                    <ul className="text-sm mt-2 list-disc pl-4 text-gray-400">
                        <li><strong>Good:</strong> ≤ 2.5s</li>
                        <li><strong>Needs Improvement:</strong> ≤ 4.0s</li>
                        <li><strong>Poor:</strong> > 4.0s</li>
                    </ul>
                </div>
                <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                    <h4 className="font-bold text-blue-400">First Contentful Paint (FCP)</h4>
                    <p className="text-sm mt-1">Measures the time from when the page starts loading to when any part of the page's content is rendered.</p>
                    <ul className="text-sm mt-2 list-disc pl-4 text-gray-400">
                        <li><strong>Good:</strong> ≤ 1.8s</li>
                        <li><strong>Needs Improvement:</strong> ≤ 3.0s</li>
                        <li><strong>Poor:</strong> > 3.0s</li>
                    </ul>
                </div>
                <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                    <h4 className="font-bold text-purple-400">Cumulative Layout Shift (CLS)</h4>
                    <p className="text-sm mt-1">Measures visual stability. This quantifies how much elements move around while loading.</p>
                    <ul className="text-sm mt-2 list-disc pl-4 text-gray-400">
                        <li><strong>Good:</strong> ≤ 0.1</li>
                        <li><strong>Needs Improvement:</strong> ≤ 0.25</li>
                        <li><strong>Poor:</strong> > 0.25</li>
                    </ul>
                </div>
            </div>
        </Section>
    </>
);

const PrivacyContent = () => (
    <>
        <Section title="Privacy Policy">
            <p className="text-sm text-gray-500 mb-4">Last Updated: October 27, 2023</p>
            <p>At doodax.com ("we", "us", "our"), protecting your privacy is a top priority. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Page Speed Analyzer service.</p>
        </Section>

        <Section title="Information Collection">
            <p><strong>Personal Data:</strong> We do NOT collect personally identifiable information (PII) such as names, addresses, or phone numbers from users of the public analyzer tool.</p>
            <p><strong>Usage Data:</strong> We collect the URLs you submit for analysis. We also collect anonymous technical data, including your IP address (masked), browser type, and timestamp, solely for the purpose of preventing abuse (rate limiting) and improving service stability.</p>
            <p><strong>Cookies:</strong> We use essential local storage to remember your recent test history on your device. We do not use third-party tracking cookies for advertising purposes.</p>
        </Section>

        <Section title="How We Use Your Data">
            <p>The URLs submitted are processed to generate performance reports. Aggregated, anonymized performance data (e.g., "Average LCP score for e-commerce sites") may be used for statistical analysis and to improve our testing algorithms.</p>
        </Section>

        <Section title="Data Security">
            <p>We implement industry-standard security measures to protect the integrity of our service. All data transmission occurs over SSL/TLS encrypted connections.</p>
        </Section>

        <Section title="Contact Us">
            <p>For privacy-related inquiries, please contact: <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a>.</p>
        </Section>
    </>
);

const TermsContent = () => (
    <>
        <Section title="Terms of Service">
            <p className="text-sm text-gray-500 mb-4">Effective Date: October 27, 2023</p>
            <p>Please read these Terms of Service ("Terms") carefully before using the doodax.com website and the Page Speed Analyzer tool.</p>
        </Section>

        <Section title="1. Acceptance of Terms">
            <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>
        </Section>

        <Section title="2. Use of Service">
            <p>You agree to use this Service only for lawful purposes. You represent that you have the authority to test the performance of the URLs you submit, or that the URLs are publicly accessible. You agree not to use the Service to launch Denial of Service (DoS) attacks or to burden our infrastructure unreasonably.</p>
        </Section>

        <Section title="3. Intellectual Property">
            <p>The Service and its original content (excluding user-submitted URLs), features, and functionality are and will remain the exclusive property of doodax.com and its licensors.</p>
        </Section>

        <Section title="4. Disclaimer">
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Doodax.com makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the performance data. Performance scores are simulations and may differ from real-world user data collected by Google Chrome User Experience Report (CrUX).</p>
        </Section>

        <Section title="5. Limitation of Liability">
            <p>In no event shall doodax.com, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.</p>
        </Section>
    </>
);

const DmcaContent = () => (
    <>
        <Section title="DMCA Copyright Policy">
            <p>Doodax.com respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement ("Infringement") of any person.</p>
        </Section>

        <Section title="Reporting Infringement">
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Agent" via email to <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a>.</p>
        </Section>

        <Section title="Notice Requirements">
            <p>Your DMCA Notice must include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                <li>A description of the copyrighted work that you claim has been infringed.</li>
                <li>A description of where the material that you claim is infringing is located on the Service (URL).</li>
                <li>Your address, telephone number, and email address.</li>
                <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
            </ul>
        </Section>
    </>
);


const pages: Record<string, { title: string; content: React.ReactNode }> = {
    'about': { title: 'About Page Speed Analyzer', content: <AboutContent /> },
    'contact': { title: 'Contact Us', content: <ContactContent /> },
    'guide': { title: 'User Guide', content: <GuideContent /> },
    'privacy-policy': { title: 'Privacy Policy', content: <PrivacyContent /> },
    'terms-of-service': { title: 'Terms of Service', content: <TermsContent /> },
    'dmca': { title: 'DMCA Policy', content: <DmcaContent /> },
};

export const getModalData = (page: string) => pages[page] || null;
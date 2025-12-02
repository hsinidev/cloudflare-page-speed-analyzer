import React from 'react';

interface FooterProps {
    onLinkClick: (page: string) => void;
}

const footerLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
    return (
        <footer className="w-full text-center py-12 bg-slate-950/80 backdrop-blur-md border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-8">
                    {footerLinks.map(link => (
                        <button 
                            key={link} 
                            onClick={() => onLinkClick(link.toLowerCase().replace(/\s+/g, '-'))}
                            className="text-sm font-medium text-slate-400 hover:text-cyan-400 hover:underline decoration-cyan-500/30 underline-offset-4 transition-all"
                        >
                            {link}
                        </button>
                    ))}
                </div>
                
                <div className="flex flex-col items-center gap-4">
                    <p className="text-slate-400">
                        Powered by{' '}
                        <a 
                            href="https://github.com/hsinidev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all"
                        >
                            HSINI MOHAMED
                        </a>
                    </p>
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} doodax.com. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
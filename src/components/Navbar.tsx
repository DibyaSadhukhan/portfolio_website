"use client";

import Link from 'next/link';
import { icons } from '@/data/content';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('home');

    // NEW: Mobile menu open state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (pathname === '/experience') {
            setActiveSection('about');
            return;
        }

        const handleScroll = () => {
            if (window.scrollY < 200) {
                setActiveSection('home');
                return;
            }

            const sections = ['projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#080806]/90 backdrop-blur-md border-b border-gray-800/60 transition-all">
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* The Template Brand Logo */}
                <Link href="/" className="font-mono font-bold text-lg md:text-xl flex items-center gap-1">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-white tracking-wider">Dibya Sadhukhan</span>
                    <span className="text-gray-500">&gt;</span>
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-gray-400 hover:text-white transition"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        {isMobileMenuOpen ? (
                            // X icon
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        ) : (
                            // Hamburger Menu icon
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        )}
                    </svg>
                </button>

                {/* Desktop Links (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/#home" className={`flex items-center gap-2 transition ${activeSection === 'home' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <div className={`w-4 h-4 ${activeSection === 'home' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`, WebkitMaskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Home
                    </Link>

                    <Link href="/experience" className={`flex items-center gap-2 transition ${activeSection === 'about' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <div className={`w-4 h-4 ${activeSection === 'about' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`, WebkitMaskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Experience
                    </Link>

                    <Link href="/#projects" className={`flex items-center gap-2 transition ${activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={activeSection === 'projects' ? "text-blue-400" : "text-gray-400"} viewBox="0 0 16 16">
                            <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                            <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                            <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                        </svg> Projects
                    </Link>

                    <Link href="/#contact" className={`flex items-center gap-2 transition ${activeSection === 'contact' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <div className={`w-4 h-4 ${activeSection === 'contact' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'contact' ? icons.contact_active : icons.contact_inactive})`, WebkitMaskImage: `url(${activeSection === 'contact' ? icons.contact_active : icons.contact_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#080806]/95 backdrop-blur-3xl border-b border-gray-800/80 p-6 flex flex-col gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                    <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 text-lg transition ${activeSection === 'home' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <div className={`w-6 h-6 ${activeSection === 'home' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`, WebkitMaskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Home
                    </Link>

                    <Link href="/experience" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 text-lg transition ${activeSection === 'about' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <div className={`w-6 h-6 ${activeSection === 'about' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`, WebkitMaskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Experience
                    </Link>

                    <Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 text-lg transition ${activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={activeSection === 'projects' ? "text-blue-400" : "text-gray-400"} viewBox="0 0 16 16">
                            <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                            <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                            <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                        </svg> Projects
                    </Link>

                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 text-lg transition ${activeSection === 'contact' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <div className={`w-6 h-6 ${activeSection === 'contact' ? 'bg-blue-400' : 'bg-gray-400'}`} style={{ maskImage: `url(${activeSection === 'contact' ? icons.contact_active : icons.contact_inactive})`, WebkitMaskImage: `url(${activeSection === 'contact' ? icons.contact_active : icons.contact_inactive})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

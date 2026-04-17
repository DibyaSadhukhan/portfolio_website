"use client";

import Link from 'next/link';
import { icons } from '@/data/content';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    // This hook checks which section of the page is currently in the viewport
    useEffect(() => {
        const handleScroll = () => {
            // If we are at the very top, we are definitely home
            if (window.scrollY < 200) {
                setActiveSection('home');
                return;
            }

            // You can add more IDs to this array as you build them out (like 'skills')
            const sections = ['about', 'projects', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the middle of the screen
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on mount to get the initial active section
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#080806]/90 backdrop-blur-md border-b border-gray-800/60 transition-all">
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* The Template Brand Logo */}
                <Link href="/" className="font-mono font-bold text-lg md:text-xl flex items-center gap-1">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-white tracking-wider">Dibya Sadhukhan</span>
                    <span className="text-gray-500">&gt;</span>
                </Link>

                {/* The Links (Top Right) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {/* HOME LINK: Automatically swaps the SVG mask based on activeSection */}
                    <Link href="#home" className={`flex items-center gap-2 transition ${activeSection === 'home' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <div
                            className={`w-4 h-4 ${activeSection === 'home' ? 'bg-blue-400' : 'bg-gray-400'}`}
                            style={{
                                maskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`,
                                WebkitMaskImage: `url(${activeSection === 'home' ? icons.home_active : icons.home_inactive})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                        Home
                    </Link>

                    {/* EXPERIENCE LINK: Swaps the gear SVGs */}
                    <Link href="#about" className={`flex items-center gap-2 transition ${activeSection === 'about' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <div
                            className={`w-4 h-4 ${activeSection === 'about' ? 'bg-blue-400' : 'bg-gray-400'}`}
                            style={{
                                maskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`,
                                WebkitMaskImage: `url(${activeSection === 'about' ? icons.gear_active : icons.gear_inactive})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                        Experience
                    </Link>

                    {/* PROJECTS LINK */}
                    <Link href="#projects" className={`flex items-center gap-2 transition ${activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={activeSection === 'projects' ? "text-blue-400" : "text-gray-400"} viewBox="0 0 16 16">
                            <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                            <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                            <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                        </svg> Projects
                    </Link>

                    {/* CONTACT LINK */}
                    <Link href="#contact" className={`flex items-center gap-2 transition ${activeSection === 'contact' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={activeSection === 'contact' ? "text-blue-400" : "text-gray-400"} viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg> Contact
                    </Link>

                </div>

            </div>
        </nav>
    );
}

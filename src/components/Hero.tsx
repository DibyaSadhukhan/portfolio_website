"use client";

import Link from 'next/link';
import { portfolioData } from '@/data/content';
import { useState, useEffect } from 'react';

export default function Hero() {
    // This state controls the terminal typing animation
    const [linesVisible, setLinesVisible] = useState(0);

    useEffect(() => {
        // Simulates the time.sleep(0.4) terminal loop
        const timer1 = setTimeout(() => setLinesVisible(1), 800);
        const timer2 = setTimeout(() => setLinesVisible(2), 1600);
        const timer3 = setTimeout(() => setLinesVisible(3), 2400); // 0.8s gap = 0.4s compile + 0.4s sleep!
        const timer4 = setTimeout(() => setLinesVisible(4), 3200);

        return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); clearTimeout(timer4); };
    }, []);

    return (
        // We force a dark theme (#080806) like the template
        <section className="bg-[#080806] min-h-screen text-gray-300 pt-32 px-6 relative overflow-hidden flex flex-col justify-center">

            {/* Background Glowing Orbs */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full z-10 flex flex-col">

                {/* TOP HALF: Terminal (Left) & Bento Grid (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT SIDE: Animated Python Terminal */}
                    <div className="bg-[#0f111a] w-full rounded-xl p-5 md:p-6 border border-gray-800 font-mono text-sm md:text-base text-gray-300 leading-relaxed shadow-2xl relative">
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mt-6 pt-2 overflow-x-auto whitespace-nowrap">
                            <p><span className="text-purple-400">import</span> <span className="text-blue-200">profile</span> <span className="text-purple-400">as</span> <span className="text-blue-200">pf</span></p><br />
                            <p><span className="text-blue-400">x</span> <span className="text-pink-500">=</span> <span className="text-green-400">"{portfolioData.role}"</span></p><br />
                            <p><span className="text-purple-400">def</span> <span className="text-blue-200">myfunc</span>():</p>
                            <p className="pl-6"><span className="text-purple-400">global</span> x; x <span className="text-pink-500">=</span> <span className="text-green-400">"{portfolioData.name}"</span></p>
                            <p className="pl-6"><span className="text-purple-4000">print</span>(<span className="text-green-400">"Hello, I'm "</span> <span className="text-pink-500">+</span> x)</p>
                            <br />
                            <p>myfunc()</p>
                            <p>pf.tell_them_my_role()</p>
                            <p>pf.tell_them_my_speciality()</p>
                        </div>

                        {/* The Animated Console Output */}
                        <div className="mt-6 pt-4 border-t border-gray-800 text-gray-400 flex flex-col gap-2 font-mono">
                            {linesVisible >= 1 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">❯</span>
                                    <span className="text-white font-semibold">Hello, I'm {portfolioData.name}</span>
                                </div>
                            )}
                            {linesVisible >= 2 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">❯</span>
                                    <span className="text-white font-semibold">{portfolioData.role}</span>
                                </div>
                            )}
                            {linesVisible >= 3 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">❯</span>
                                    <span className="text-white font-semibold">{portfolioData.speciality}</span>
                                </div>
                            )}
                            {linesVisible >= 4 && (
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-blue-400 font-bold">→</span>
                                    <span className="text-blue-300 font-semibold">{portfolioData.tagline}</span>
                                </div>
                            )}

                            {/* Blinking Cursor waiting for execution to finish */}
                            {linesVisible < 4 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">❯</span>
                                    <span className="w-2.5 h-4 bg-gray-400 animate-pulse"></span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Bento Grid & Buttons */}
                    <div className="w-full flex flex-col gap-4 h-full">

                        {/* Top Main Bento */}
                        <div className="col-span-2 bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[160px] hover:border-gray-600 transition duration-500">
                            <div className="text-6xl mb-6 font-mono text-purple-400 font-bold">{'</>'}</div>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="bg-black/50 border border-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">Python</span>
                                <span className="bg-black/50 border border-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">Javascript</span>
                                <span className="bg-black/50 border border-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">PHP</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Database Bento */}
                            <div className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-gray-600 transition duration-500 text-center min-h-[140px]">
                                <div className="mb-4 text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                                    </svg>
                                </div>
                                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 items-center">
                                    <span className="text-sm text-gray-300">PostgreSQL</span>
                                    <span className="text-sm text-gray-300">MySQL</span>
                                </div>
                            </div>

                            {/* AI / Automation Bento */}
                            <div className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-gray-600 transition duration-500 text-center min-h-[140px]">
                                <div className="mb-4 text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                                    </svg>
                                </div>
                                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 items-center">
                                    <span className="text-sm text-gray-300">N8N</span>
                                    <span className="text-sm text-gray-300">Airflow</span>
                                    <span className="text-sm text-gray-300">Make</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons encapsulated in completely matching box */}
                        {/* Stats & Buttons encapsulated in completely matching box */}
                        <div className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-6 flex flex-col gap-6 hover:border-gray-600 transition duration-500">

                            {/* The Stats Row */}
                            <div className="flex justify-between items-center px-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">{portfolioData.projects}+</div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Projects</div>
                                </div>
                                <div className="w-px h-10 bg-gray-700"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">{portfolioData.experience}+</div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Years</div>
                                </div>
                                <div className="w-px h-10 bg-gray-700"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">{portfolioData.clients}+</div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Clients</div>
                                </div>
                            </div>

                            {/* The Buttons Row */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link href="#projects" className="flex-1 min-w-[120px] bg-white text-black px-6 py-3.5 rounded-xl hover:bg-gray-200 transition font-bold text-sm text-center">
                                    Projects
                                </Link>
                                <Link href="#contact" className="flex-1 min-w-[120px] bg-[#1a1d27] border border-gray-700 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition font-bold text-sm text-center">
                                    Contact Me
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

                {/* BOTTOM HALF: Centered Description */}
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                        {portfolioData.description}
                    </p>
                </div>
            </div>

        </section>
    );
}


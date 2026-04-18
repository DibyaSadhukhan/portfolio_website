"use client";

import { experience_data } from "@/data/content";
import { useState, useEffect } from "react";

export default function ExperiencePage() {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedJob !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedJob]);

    const leftCol = experience_data.filter((_, i) => i % 2 === 0);
    const rightCol = experience_data.filter((_, i) => i % 2 !== 0);

    const activeJob = experience_data.find(j => j.id === selectedJob);

    const renderCard = (job: typeof experience_data[0], isLeft: boolean) => {
        return (
            <div key={job.id} onClick={() => setSelectedJob(job.id)} className="relative w-full cursor-pointer group flex">
                
                {/* Connecting Line to Center */}
                <div className={`hidden lg:block absolute top-[50%] -translate-y-1/2 h-0.5 border-t-2 border-dashed border-gray-800 transition duration-500 group-hover:border-blue-500/50 z-0 ${isLeft ? 'w-12 -right-12' : 'w-12 -left-12'}`}></div>

                {/* The Dot on the Axis */}
                <div className={`hidden lg:block absolute top-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-[#080806] border-2 border-gray-600 transition-all duration-500 group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] z-10 ${isLeft ? '-right-12 translate-x-1/2' : '-left-12 -translate-x-1/2'}`}></div>

                {/* Job Card */}
                <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-6 md:p-8 transition-all duration-500 shadow-lg group-hover:border-gray-500 group-hover:-translate-y-2 relative z-20 flex flex-col w-full h-full overflow-hidden">
                    
                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none"></div>

                    <div className="relative z-10 pointer-events-none flex flex-col h-full">
                        <div className="flex flex-col gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-white font-mono tracking-tight group-hover:text-blue-300 transition duration-300">{job.role}</h3>
                            <h4 className="text-lg text-blue-400 font-medium">{job.company}</h4>
                        </div>
                        
                        <div className="inline-block bg-black/50 border border-gray-800 rounded-xl px-4 py-2 text-sm font-mono text-gray-400 shadow-inner w-max mb-6">
                            {job.duration}
                        </div>

                        <div className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                            {job.description[0]} {/* Snippet preview */}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800/80 items-center justify-between">
                            <div className="flex gap-2 truncate flex-1 opacity-60">
                                <span className="text-xs font-mono px-2 py-1 bg-gray-800 rounded-md">
                                    {job.tools.length} Core Skills
                                </span>
                            </div>
                            <span className="text-sm font-mono text-blue-400 transition-opacity whitespace-nowrap ml-2">
                                View Details ↗
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-[#080806] pt-32 pb-24 px-6 text-gray-300">
            <div className="max-w-6xl mx-auto">

                {/* Header styled like a code array! */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tight cursor-default relative inline-block z-10">
                        <span className="text-blue-400">career</span> = <span className="text-gray-400">[</span>
                    </h2>
                    <p className="text-gray-400 text-lg relative z-10">My professional journey and technical experience.</p>
                </div>

                {/* 2-Column Center Spine Grid */}
                <div className="relative max-w-5xl mx-auto mt-16">
                    {/* The Center Dotted vertical Line */}
                    <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0 border-l-2 border-dashed border-gray-800 -translate-x-[1px] z-0"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 lg:gap-16 lg:pr-12">
                            {leftCol.map(job => renderCard(job, true))}
                        </div>
                        {/* Right Column with staggered effect */}
                        <div className="flex flex-col gap-8 lg:gap-16 lg:pt-32 lg:pl-12 mt-8 lg:mt-0">
                            {rightCol.map(job => renderCard(job, false))}
                        </div>
                    </div>
                </div>

                {/* Array Closer */}
                <div className="text-center mt-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 font-mono tracking-tight cursor-default">
                        <span className="text-gray-400">]</span>
                    </h2>
                </div>
            </div>

            {/* FULL SCREEN MODAL */}
            {selectedJob !== null && activeJob && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setSelectedJob(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-[#080806]/80 backdrop-blur-sm"></div>

                    {/* Modal Content */}
                    <div 
                        className="relative bg-[#0f111a] border border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Stop clicks inside modal from closing it
                    >
                        {/* Sticky Close button wrapper */}
                        <div className="sticky top-0 z-50 w-full h-0 flex justify-end pointer-events-none">
                            <button 
                                onClick={() => setSelectedJob(null)}
                                className="pointer-events-auto -mt-2 -mr-2 md:-mt-6 md:-mr-6 text-gray-500 hover:text-white transition p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="text-blue-400 font-mono text-lg mb-2 font-semibold tracking-wide pr-10">{activeJob.company}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pr-10">{activeJob.role}</h2>
                        
                        <div className="inline-block bg-black/50 border border-gray-800 rounded-xl px-4 py-2 text-sm font-mono text-gray-400 shadow-inner w-max mb-8">
                            {activeJob.duration}
                        </div>

                        {/* Description List */}
                        <div className="text-gray-300 space-y-4 mb-10 leading-relaxed md:text-lg">
                            <ul className="list-none space-y-5">
                                {activeJob.description.map((desc, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="text-purple-500 mt-1 select-none">▹</span>
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800 items-center">
                            <span className="text-sm font-mono text-gray-500 mr-2">Technologies Used: </span>
                            {activeJob.tools.map(tool => (
                                <span key={tool} className="text-xs font-mono px-4 py-2 bg-gray-800/80 text-gray-300 border border-gray-700 rounded-lg">
                                    {tool}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </main>
    );
}


"use client";

import { experience_data } from "@/data/content";
import { useState } from "react";

export default function ExperiencePage() {
    // Only open the very first job entry by default!
    const [expandedJobs, setExpandedJobs] = useState<number[]>([experience_data[0].id]);

    const toggleJob = (id: number) => {
        setExpandedJobs(prev =>
            prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
        );
    };

    return (
        <main className="min-h-screen bg-[#080806] pt-32 pb-24 px-6 text-gray-300">
            <div className="max-w-4xl mx-auto">

                {/* Header styled like a code array! */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tight cursor-default">
                        <span className="text-blue-400">career</span> = <span className="text-gray-400">[</span>
                    </h2>
                    <p className="text-gray-400 text-lg">My professional journey and technical experience.</p>
                </div>

                {/* The Timeline Line */}
                <div className="relative border-l-2 border-gray-800/80 ml-4 md:ml-8 mt-10">
                    {experience_data.map((job) => {
                        const isExpanded = expandedJobs.includes(job.id);

                        return (
                            <div key={job.id} className="mb-14 ml-8 md:ml-14 relative group">

                                {/* Glowing Timeline Node */}
                                <span className="absolute -left-[43px] md:-left-[67px] top-7 w-5 h-5 rounded-full bg-gray-800 border-4 border-[#080806] transition duration-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]"></span>

                                {/* Job Card */}
                                <div className={`bg-gray-900/30 backdrop-blur border rounded-3xl p-6 md:p-8 transition-all duration-500 shadow-lg ${isExpanded ? 'border-gray-500' : 'border-gray-800 hover:border-gray-600'}`}>

                                    {/* Clickable Header Area */}
                                    <div
                                        onClick={() => toggleJob(job.id)}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group/header"
                                    >
                                        <div>
                                            <h3 className="text-2xl font-bold text-white font-mono tracking-tight group-hover/header:text-blue-300 transition">{job.role}</h3>
                                            <h4 className="text-lg text-blue-400 font-medium mt-1">{job.company}</h4>
                                        </div>
                                        <div className="flex items-center gap-4 self-start md:self-center">
                                            <div className="inline-block bg-black/50 border border-gray-800 rounded-xl px-4 py-2 text-sm font-mono text-gray-400 shadow-inner group-hover/header:border-gray-600 transition">
                                                {job.duration}
                                            </div>

                                            {/* Expand/Collapse Chevron Icon */}
                                            <div className={`text-gray-500 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180 text-blue-400' : 'rotate-0 group-hover/header:translate-y-1'}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Collapsible Content using the CSS Grid animation hack */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <ul className="list-none space-y-4 mb-8">
                                                {job.description.map((desc, i) => (
                                                    <li key={i} className="flex gap-4 text-gray-400">
                                                        <span className="text-purple-500 mt-0.5">▹</span>
                                                        <span className="leading-relaxed">{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2">
                                                {job.tools.map(tool => (
                                                    <span key={tool} className="text-xs font-mono px-3 py-1.5 bg-blue-900/10 text-blue-300 border border-blue-900/30 rounded-lg transition cursor-default hover:bg-blue-900/20 hover:border-blue-500/50">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Array Closer */}
                <div className="text-center mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 font-mono tracking-tight cursor-default">
                        <span className="text-gray-400">]</span>
                    </h2>
                </div>
            </div>
        </main>
    );
}


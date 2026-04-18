"use client";

import { projects_data } from "@/data/content";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProject]);

    const project = projects_data.find(p => p.id === selectedProject);

    return (
        <main className="min-h-screen bg-[#080806] pt-32 pb-24 px-6 text-gray-300">
            <div className="max-w-6xl mx-auto">

                {/* Fetch styling Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tight cursor-default">
                        <span className="text-purple-500">requests.get</span>(<span className="text-green-400">"{`./projects`}"</span>)
                    </h2>
                    <p className="text-gray-400 text-lg">A selection of my recent technical builds and experiments.</p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects_data.map(p => (
                        <div
                            key={p.id}
                            onClick={() => setSelectedProject(p.id)}
                            className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-gray-500 hover:-translate-y-2 transition-all duration-500 shadow-lg flex flex-col group relative overflow-hidden cursor-pointer"
                        >

                            {/* Ambient Glow behind card */}
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none"></div>

                            <div className="relative z-10 flex-grow pointer-events-none">
                                <div className="text-blue-400 font-mono text-sm mb-3 font-semibold tracking-wide">{p.category}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-purple-300 transition duration-300">{p.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {p.tools.map(tool => (
                                        <span key={tool} className="text-xs font-mono px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded-lg whitespace-nowrap">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer Links */}
                            <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-4 pt-5 border-t border-gray-800 items-center pointer-events-auto">
                                {(p.github === "NDA" || p.live === "NDA") && (
                                    <div className="flex flex-col w-full pointer-events-none">
                                        <span className="flex items-center gap-2 text-sm font-bold font-mono text-gray-500">
                                            🔒 Confidential Work
                                        </span>
                                        <span className="text-xs font-mono text-gray-600 mt-1">
                                            Details limited to protect client systems
                                        </span>
                                    </div>
                                )}

                                {p.github !== "NDA" && p.github !== "#" && (
                                    <Link onClick={(e) => e.stopPropagation()} href={p.github} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition group/link border border-transparent px-3 py-1 hover:bg-gray-800/50 rounded-full w-max -ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover/link:text-purple-400 transition" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        Code
                                    </Link>
                                )}

                                {p.live !== "NDA" && p.live !== "#" && (
                                    <Link onClick={(e) => e.stopPropagation()} href={p.live} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition group/link border border-transparent px-3 py-1 hover:bg-gray-800/50 rounded-full w-max -ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover/link:text-blue-400 transition" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.207V5a.5.5 0 0 0 1 0v-4.5z" />
                                        </svg>
                                        Live
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* FULL SCREEN MODAL */}
            {selectedProject !== null && project && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setSelectedProject(null)}
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
                                onClick={() => setSelectedProject(null)}
                                className="pointer-events-auto -mt-2 -mr-2 md:-mt-6 md:-mr-6 text-gray-500 hover:text-white transition p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>
                        </div>

                        <div className="text-blue-400 font-mono text-sm mb-3 font-semibold tracking-wide pr-10">{project.category}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pr-10">{project.title}</h2>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tools.map(tool => (
                                <span key={tool} className="text-xs font-mono px-4 py-2 bg-gray-800/80 text-gray-300 border border-gray-700 rounded-lg">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        {/* Long Description (fallback to normal description) */}
                        <div className="text-gray-300 space-y-4 mb-10 leading-relaxed md:text-lg whitespace-pre-wrap">
                            {/* @ts-ignore */}
                            {(project as any).long_description?.length > 0 ? (project as any).long_description.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            )) : (
                                <p>{project.description}</p>
                            )}
                        </div>

                        {/* Additional images mapped dynamically */}
                        {/* @ts-ignore */}
                        {(project as any).images?.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {/* @ts-ignore */}
                                {(project as any).images.map((img: string, i: number) => (
                                    <div key={i} className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg relative group/img">
                                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/img:opacity-100 transition duration-500"></div>
                                        <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Modal Footer Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-4 pt-6 border-t border-gray-800 items-center">
                            {(project.github === "NDA" || project.live === "NDA") && (
                                <div className="flex flex-col w-full">
                                    <span className="flex items-center gap-2 text-sm font-bold font-mono text-gray-500 cursor-not-allowed">
                                        🔒 Confidential Work
                                    </span>
                                </div>
                            )}

                            {project.github !== "NDA" && project.github !== "#" && (
                                <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-white transition px-5 py-2.5 bg-gray-800 rounded-full hover:bg-gray-700 border border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    View Code
                                </Link>
                            )}

                            {project.live !== "NDA" && project.live !== "#" && (
                                <Link href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-white transition px-5 py-2.5 bg-blue-900/30 text-blue-400 hover:bg-blue-900/50 rounded-full border border-blue-900/50 shadow-[0_0_15px_rgba(96,165,250,0.15)] hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.207V5a.5.5 0 0 0 1 0v-4.5z" />
                                    </svg>
                                    Open Live App
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </main>
    );
}


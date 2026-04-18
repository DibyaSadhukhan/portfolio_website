import { projects_data } from "@/data/content";
import Link from 'next/link';

export default function ProjectsPage() {
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
                    {projects_data.map(project => (
                        <div key={project.id} className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-gray-500 hover:-translate-y-2 transition-all duration-500 shadow-lg flex flex-col group relative overflow-hidden">

                            {/* Ambient Glow behind card */}
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

                            <div className="relative z-10 flex-grow">
                                <div className="text-blue-400 font-mono text-sm mb-3 font-semibold tracking-wide">{project.category}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-purple-300 transition duration-300">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tools.map(tool => (
                                        <span key={tool} className="text-xs font-mono px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded-lg whitespace-nowrap cursor-default hover:bg-gray-700 transition">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer Links */}
                            <div className="relative z-10 flex gap-6 pt-5 border-t border-gray-800">
                                {project.github !== "#" && (
                                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition group/link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover/link:text-purple-400 transition" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        Code
                                    </Link>
                                )}
                                {project.live !== "#" && (
                                    <Link href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition group/link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover/link:text-blue-400 transition" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.207V5a.5.5 0 0 0 1 0v-4.5z" />
                                        </svg>
                                        Live App
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}

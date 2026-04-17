import { experience_data } from "@/data/content";

export default function ExperiencePage() {
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
                    {experience_data.map((job) => (
                        <div key={job.id} className="mb-14 ml-8 md:ml-14 relative group">

                            {/* Glowing Timeline Node */}
                            <span className="absolute -left-[43px] md:-left-[67px] top-7 w-5 h-5 rounded-full bg-gray-800 border-4 border-[#080806] group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)] transition duration-500"></span>

                            {/* Job Card */}
                            <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition duration-500 shadow-lg">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white font-mono tracking-tight">{job.role}</h3>
                                        <h4 className="text-lg text-blue-400 font-medium mt-1">{job.company}</h4>
                                    </div>
                                    <div className="inline-block bg-black/50 border border-gray-800 rounded-xl px-4 py-2 text-sm font-mono text-gray-400 self-start shadow-inner">
                                        {job.duration}
                                    </div>
                                </div>
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
                                        <span key={tool} className="text-xs font-mono px-3 py-1.5 bg-blue-900/10 text-blue-300 border border-blue-900/30 rounded-lg hover:border-blue-500/50 hover:bg-blue-900/20 transition cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
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

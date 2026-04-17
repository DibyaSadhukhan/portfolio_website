import { core_skills, capsule_skills, icons } from '@/data/content';

export default function Skills() {
    return (
        <section id="skills" className="bg-[#080806] py-24 px-6 text-gray-300 relative border-t border-gray-900/50">
            <div className="max-w-6xl mx-auto z-10 relative">

                {/* Header built like a variable assignment! */}
                <div className="mb-16 text-center text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">
                    <span className="text-blue-400">skills</span> = {'{'}
                </div>

                {/* The 4 Box Layout for percentages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {core_skills.map((block) => (
                        <div key={block.id} className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition duration-500 group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-4xl group-hover:scale-110 transition duration-300 transform origin-left text-blue-400">
                                    {/* Using CSS Masking to color external SVGs! */}
                                    <div
                                        className="w-10 h-10 bg-blue-400"
                                        style={{
                                            maskImage: `url(${block.icon})`,
                                            WebkitMaskImage: `url(${block.icon})`,
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                            WebkitMaskPosition: 'center'
                                        }}
                                        title={block.category}
                                    />
                                </div>

                                <h4 className="text-xl font-bold text-white font-mono">{block.category}</h4>
                            </div>
                            <div className="flex flex-col gap-6">
                                {block.items.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between text-sm mb-2 text-gray-300">
                                            <span>{item.name}</span>
                                            <span className="text-gray-500 font-mono">{item.value}%</span>
                                        </div>
                                        {/* Progress Bar! */}
                                        <div className="w-full bg-black/50 rounded-full h-1.5 border border-gray-800">
                                            <div className="bg-purple-500 h-1.5 rounded-full relative" style={{ width: `${item.value}%` }}>
                                                {/* Glow effect on the tip of the progress bar */}
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.8)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* The 5th Box - Centered at the bottom for capsules */}
                {/* The 5th Box - Centered at the bottom for capsules */}
                <div className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-gray-600 transition duration-500 max-w-4xl mx-auto mt-6 text-center">

                    {/* Flexbox forces the Icon and Text to sit perfectly matched vertically! */}
                    <h4 className="text-xl font-bold text-white mb-8 font-mono flex items-center justify-center gap-3">
                        <div
                            className="w-8 h-8 bg-blue-400"
                            style={{
                                maskImage: `url(${icons.skills})`,
                                WebkitMaskImage: `url(${icons.skills})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                            title="Broad Expertise"
                        />
                        Broad Expertise
                    </h4>

                    <div className="flex flex-wrap justify-center gap-3">
                        {capsule_skills.map((skill) => (
                            <span key={skill} className="bg-black/50 border border-gray-800 text-sm px-5 py-2.5 rounded-xl text-gray-300 hover:text-white hover:border-gray-500 hover:scale-105 transition transform cursor-default shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>


                {/* Closes the object array bracket! */}
                <div className="mt-16 text-center text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">
                    {'}'}
                </div>

            </div>
        </section>
    );
}

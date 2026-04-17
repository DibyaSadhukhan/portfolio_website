"use client";

import { useState } from 'react';
import { portfolioData } from '@/data/content';
import Link from 'next/link';

export default function Contact() {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    // Status State to handle the button UI
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://hook.eu1.make.com/pddwh9jcsc20t54vttcp8i4q5gh352tu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                // Clear the form
                setFormData({ name: '', email: '', phone: '', company: '' });
                // Reset button text after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error("Webhook Error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="bg-[#080806] py-24 px-6 text-gray-300 relative border-t border-gray-900/50">
            <div className="max-w-6xl mx-auto z-10 relative">

                {/* Header built like a terminal command */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tight">
                        <span className="text-purple-500">await</span> <span className="text-blue-400">connect</span>()
                    </h2>
                    <p className="text-gray-400 text-lg">
                        I'm currently available for freelance work and full-time opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT COLUMN: The Webhook Form */}
                    <div className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 md:p-10 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-8 font-mono border-b border-gray-800 pb-4">
                            <span className="text-green-400">POST</span> /api/contact
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0f111a] border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0f111a] border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#0f111a] border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#0f111a] border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold py-4 rounded-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/50 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                            >
                                {status === 'idle' && 'execute_payload()'}
                                {status === 'submitting' && 'transmitting...'}
                                {status === 'success' && 'system.exit(0) // Success!'}
                                {status === 'error' && 'exception_caught // Try Again'}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Direct Contact Cards */}
                    <div className="flex flex-col gap-6 justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Email Box */}
                            <a href={`mailto:${portfolioData.email}`} className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-gray-600 hover:scale-[1.02] transition duration-500 group shadow-lg">
                                <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                                <p className="text-gray-400 font-mono text-xs md:text-sm">{portfolioData.email}</p>
                            </a>

                            {/* Phone Box */}
                            <a href={`tel:${portfolioData.phone}`} className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-gray-600 hover:scale-[1.02] transition duration-500 group shadow-lg">
                                <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Phone</h4>
                                <p className="text-gray-400 font-mono text-sm">{portfolioData.phone}</p>
                            </a>
                        </div>

                        {/* LinkedIn Box */}
                        <Link href={portfolioData.linkedin} target="_blank" className="bg-[#0f111a] border border-gray-800 rounded-3xl p-8 flex items-center justify-between hover:border-gray-600 hover:scale-[1.01] transition duration-500 group shadow-xl">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0A66C2]/20 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">LinkedIn</h4>
                                    <p className="text-gray-400 text-sm">Let's connect professionally</p>
                                </div>
                            </div>
                            <div className="text-gray-600 group-hover:text-white transition transform group-hover:translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </div>
                        </Link>
                        {/* Upwork Box */}
                        <Link href={portfolioData.upwork} target="_blank" className="bg-[#0f111a] border border-gray-800 rounded-3xl p-8 flex items-center justify-between hover:border-gray-600 hover:scale-[1.01] transition duration-500 group shadow-xl">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-[#14A800]/10 text-[#14A800] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#14A800]/20 transition duration-300">
                                    {/* Exact Upwork Logo! */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.51 5.378c-1.442 0-2.825.4-3.88 1.13l-1.649-4.27H9.281v7.6c0 1.258-1 2.278-2.235 2.278s-2.235-1.02-2.235-2.278V2.238H2.108v7.6c0 2.753 2.215 4.992 4.938 4.992 2.724 0 4.94-2.239 4.94-4.992V6.442c.983 1.341 2.378 3.513 3.324 5.922l-1.43 4.887h2.724l.951-3.245c1.1.332 2.368.514 3.737.514 2.871 0 4.862-2.07 4.862-5.57.001-3.5-1.99-5.572-4.864-5.572zm0 8.425c-1.127 0-2.143-.227-3.031-.61l.93-3.181c.642-.236 1.353-.362 2.101-.362 1.488 0 2.214.838 2.214 2.077 0 1.238-.726 2.076-2.214 2.076z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Upwork</h4>
                                    <p className="text-gray-400 text-sm">Hire me for a standalone project</p>
                                </div>
                            </div>
                            <div className="text-gray-600 group-hover:text-white transition transform group-hover:translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    );
}

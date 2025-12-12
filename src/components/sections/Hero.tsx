"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center md:justify-start"
                >
                    {/* Glow behind avatar */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] -z-10" />

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 shadow-2xl overflow-hidden glass ring-1 ring-white/20"
                    >
                        <img
                            src="https://github.com/MenaceG.png"
                            alt="Ayush Gupta"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 bg-black/50 border border-green-500/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transition-transform cursor-default"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-400 text-sm font-medium">Open for Work</span>
                    </motion.div>
                </motion.div>

                {/* Right Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-center md:text-left space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 font-medium mb-2 backdrop-blur-sm">
                        Based in India 🇮🇳
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
                            Ayush Gupta
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-blue-200/80 font-light tracking-wide">
                        Software Engineer
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        I have been deeply interested in computers since childhood, spending countless hours exploring and experimenting with technology. This passion led me to pursue a Bachelor of Computer Applications (BCA), where I honed my technical skills. I specialize in troubleshooting and fixing code and systems, and I take pride in solving complex problems. I continuously explore new technologies and development stacks, driven by a desire to improve and expand my skillset.
                    </p>

                    {/* Socials */}
                    <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
                        <SocialLink href="https://github.com/MenaceG" icon={<Github size={20} />} />
                        <SocialLink href="https://linkedin.com/in/ayushguptadev" icon={<Linkedin size={20} />} />
                        <SocialLink href="https://x.com/MenaceAyush" icon={<Twitter size={20} />} />
                        <SocialLink href="mailto:ayush.me1204@gmail.com" icon={<Mail size={20} />} />
                    </div>

                    <div className="pt-6 flex justify-center md:justify-start">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:border-white/30 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

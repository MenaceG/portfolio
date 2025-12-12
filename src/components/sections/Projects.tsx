"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
    const projects = [
        {
            name: "MindCheck",
            description:
                "A full-stack mental health assessment platform featuring AI-powered chat support, self-assessment tests, and doctor recommendations.",
            link: "https://github.com/MenaceG/mindCheck", // Placeholder link
            github: "https://github.com/MenaceG/mindCheck",
            tech: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
            status: "Live",
        },
        {
            name: "Disaster Awareness Tool",
            description:
                "Real-time disaster monitoring dashboard integrating weather APIs and geolocation to provide live alerts for earthquakes, floods, and wildfires.",
            link: "https://github.com/MenaceG/disaster-tool",
            github: "https://github.com/MenaceG/disaster-tool",
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query", "Vite"],
            status: "Building",
        },
        {
            name: "VehicleOGraph",
            description:
                "Android application for tracking vehicle mileage (tank-to-tank), fuel expenses, and maintenance schedules with visual analytics.",
            link: "", // No web link for Android app usually
            github: "https://github.com/MenaceG/VehicleOGraph",
            tech: ["Android", "Java", "XML", "SQLite", "MPAndroidChart"],
            status: "Live",
        },
    ];

    return (
        <section id="projects" className="py-24 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img
                                    src={`https://placehold.co/800x500/1a1a1a/666?text=${encodeURIComponent(project.name)}`}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className={`
                     px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border
                     ${project.status === 'Live' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'}
                   `}>
                                        {project.status === 'Live' ? '● Online' : '● Building'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                            >
                                                <Github size={20} />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                            >
                                                <ExternalLink size={20} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

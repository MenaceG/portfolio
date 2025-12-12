"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            company: "IBM",
            role: "Project Lead",
            date: "Jun 2025 - Aug 2025",
            description: [
                "Developed a full-stack MERN web application for mental health assessments.",
                "Implemented tests for Depression, Anxiety, ADHD, and OCD with structured scoring and insights.",
                "Built features including user profiles, doctor dashboards, Google Maps integration, and printable reports.",
                "Integrated AI support to provide empathetic, real-time guidance and enhance user experience."
            ],
        },
        {
            company: "Carnama",
            role: "Frontend Developer",
            date: "Oct 2024 - Jan 2025",
            description: [
                "Designed and developed the user interface for Carnaama's web platform, focusing on creating a modern, intuitive, and visually appealing design.",
                "Leveraged ReactJs hooks (useState, useEffect) for state management and optimized rendering, ensuring efficient and maintainable code.",
                "Utilized Tailwind CSS to build responsive and highly customizable UI components, ensuring fast development and consistent styling across pages."
            ],
        },
        {
            company: "Hexovision",
            role: "Web Developer",
            date: "Aug 2024 - Oct 2024",
            description: [
                "Developed and launched the company’s website using HTML, CSS, JavaScript, and PHP, ensuring a responsive and user-friendly experience across all devices.",
                "Integrated backend services with PHP to enable dynamic content management and real-time updates.",
                "Optimized website performance, improving page load speed by 25% through code and asset optimization."
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                        >
                            {/* Soft glow effect */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
                                {/* Icon/Logo Placeholder */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-gray-400 group-hover:text-white">
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow space-y-2">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {job.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                                            <Calendar size={14} />
                                            {job.date}
                                        </div>
                                    </div>

                                    <div className="text-lg font-medium text-gray-300 flex items-center gap-2">
                                        <Building2 size={18} className="text-gray-500" />
                                        {job.company}
                                    </div>

                                    <ul className="pt-4 space-y-2">
                                        {job.description.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm md:text-base leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

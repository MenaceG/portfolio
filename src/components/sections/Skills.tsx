"use client";

import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        {
            name: "Frontend",
            skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Angular"]
        },
        {
            name: "Backend",
            skills: ["Node.js", "Express.js", "Python", "Flask", "Java", "C", "C++"]
        },
        {
            name: "Database",
            skills: ["PostgreSQL", "MongoDB", "MySQL"]
        },
        {
            name: "DevOps & Tools",
            skills: ["Git", "GitHub", "Linux", "Docker", "AWS", "Vercel", "Vim", "npm", "Android Studio"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-gray-300 border-l-4 border-green-500 pl-4">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

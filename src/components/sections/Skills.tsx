"use client";

import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        {
            name: "Frontend",
            color: "from-blue-400 to-cyan-300",
            border: "border-blue-400",
            skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Angular"]
        },
        {
            name: "Backend",
            color: "from-green-400 to-emerald-300",
            border: "border-green-400",
            skills: ["Node.js", "Express.js", "Python", "Flask", "Java", "C", "C++"]
        },
        {
            name: "Database",
            color: "from-purple-400 to-pink-300",
            border: "border-purple-400",
            skills: ["PostgreSQL", "MongoDB", "MySQL"]
        },
        {
            name: "DevOps & Tools",
            color: "from-orange-400 to-yellow-300",
            border: "border-orange-400",
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
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
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
                            <h3 className={`text-xl font-semibold text-white border-l-4 ${category.border} pl-4`}>
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-default relative group overflow-hidden bg-white/5 border border-white/5 hover:border-white/20`}
                                    >
                                        <span className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                        <span className="relative text-gray-300 group-hover:text-white transition-colors">
                                            {skill}
                                        </span>
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

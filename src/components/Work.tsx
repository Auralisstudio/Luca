"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const works = [
    {
        id: 1,
        src: "/images/work/work-1.jpg",
        alt: "Unsere Arbeit - Projekt 1",
    },
    {
        id: 2,
        src: "/images/work/work-2.jpg",
        alt: "Unsere Arbeit - Projekt 2",
    },
    {
        id: 3,
        src: "/images/work/work-3.jpg",
        alt: "Unsere Arbeit - Projekt 3",
    },
    {
        id: 4,
        src: "/images/work/work-4.jpg",
        alt: "Unsere Arbeit - Projekt 4",
    },
]

export function Work() {
    return (
        <section id="work" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Unsere <span className="text-amber-400">Arbeit</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Einblicke in unsere aktuellen Projekte und erfolgreich abgeschlossenen Arbeiten.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <Image
                                src={work.src}
                                alt={work.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-amber-400/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-amber-400/10 rounded-full blur-[128px] pointer-events-none" />
        </section>
    )
}

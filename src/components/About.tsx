"use client"

import { motion } from "framer-motion"
import { Award, Users, ThumbsUp, CheckCircle2 } from "lucide-react"

const stats = [
    { icon: Award, value: "10+", label: "Jahre Erfahrung", gradient: "from-amber-400 to-orange-500" },
    { icon: Users, value: "100+", label: "Zufriedene Kunden", gradient: "from-blue-500 to-cyan-500" },
    { icon: ThumbsUp, value: "100%", label: "Qualität", gradient: "from-green-500 to-emerald-500" },
]

const features = [
    "Zertifizierter Meisterbetrieb",
    "Junges dynamisches Team",
    "Persönliche Beratung",
    "Faire Preise & Transparenz",
]

export function About() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 sm:mb-12 md:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">uns</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-20">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 sm:space-y-6 md:space-y-8"
                    >
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                                Wir sind ein <span className="text-amber-400 font-semibold">junges, dynamisches Team</span>,
                                das für Frische und Innovation im Elektrohandwerk steht.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
                                Als zertifizierter Meisterbetrieb verbinden wir fachliche Kompetenz mit modernen Lösungen.
                                Ob klassische Installation oder Smart Home – wir packen es an.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
                                Wir setzen auf <span className="text-white font-medium">Qualität</span>,
                                <span className="text-white font-medium"> Zuverlässigkeit</span> und
                                <span className="text-white font-medium"> individuelle Beratung</span>.
                                Ihre Zufriedenheit ist unser Antrieb.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 md:pt-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 active:bg-white/10 transition-colors duration-200"
                                >
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm md:text-base text-white/90 font-medium break-words hyphens-auto">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Stats - Modern Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="group relative overflow-hidden rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-center cursor-pointer active:bg-white/[0.08] transition-colors"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 group-active:opacity-15 transition-opacity duration-300`} />

                                {/* Icon */}
                                <motion.div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
                                </motion.div>

                                {/* Value */}
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3">
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 font-medium break-words hyphens-auto leading-tight">
                                    {stat.label}
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute -bottom-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 group-active:opacity-25 transition-opacity duration-300`} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


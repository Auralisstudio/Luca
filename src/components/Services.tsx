"use client"

import { motion } from "framer-motion"
import { Zap, Home, ClipboardCheck, Cpu, Wrench } from "lucide-react"

const services = [
    {
        icon: Zap,
        title: "Elektroinstallationen",
        description: "Professionelle Installation elektrischer Anlagen für Wohn- und Gewerbeimmobilien.",
        gradient: "from-blue-500 to-cyan-500",
        size: "large",
    },
    {
        icon: Home,
        title: "Gebäudeinstallationen",
        description: "Umfassende Installationslösungen für Neubau und Renovierung.",
        gradient: "from-purple-500 to-pink-500",
        size: "small",
    },
    {
        icon: ClipboardCheck,
        title: "Anlagenprüfung",
        description: "Fachgerechte Prüfung und Abnahme Ihrer elektrischen Anlagen.",
        gradient: "from-amber-400 to-orange-500",
        size: "small",
    },
    {
        icon: Cpu,
        title: "Gebäudesystemtechnik",
        description: "Intelligente Vernetzung und Steuerung Ihrer Gebäudetechnik.",
        gradient: "from-red-500 to-rose-500",
        size: "large",
    },
    {
        icon: Wrench,
        title: "Wartung & Reparatur",
        description: "Zuverlässige Wartung und schnelle Reparaturen im Störungsfall.",
        gradient: "from-green-500 to-emerald-500",
        size: "large",
    },
]

export function Services() {
    return (
        <section id="services" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 sm:mb-12 md:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        Was wir <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">machen</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
                        Maßgeschneiderte Elektrolösungen für Ihr Zuhause und Ihr Unternehmen
                    </p>
                </motion.div>

                {/* Bento Grid Layout - Optimized for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 cursor-pointer active:bg-white/[0.08] transition-colors ${service.size === 'large' ? 'sm:col-span-2' : 'sm:col-span-1'
                                }`}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                minHeight: service.size === 'large' ? '200px' : '180px',
                            }}
                        >
                            {/* Gradient overlay on hover/active */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 group-active:opacity-15 transition-opacity duration-300`}
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon */}
                                <motion.div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-xl shrink-0`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2} />
                                </motion.div>

                                {/* Title */}
                                <h3 className={`${service.size === 'large' ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
                                    } font-bold text-white mb-2 sm:mb-3 md:mb-4 break-words hyphens-auto leading-tight`}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className={`${service.size === 'large' ? 'text-sm sm:text-base md:text-lg lg:text-xl' : 'text-xs sm:text-sm md:text-base lg:text-lg'
                                    } text-white/60 leading-relaxed mt-auto break-words hyphens-auto`}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className={`absolute -bottom-16 -right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 group-active:opacity-25 transition-opacity duration-300`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

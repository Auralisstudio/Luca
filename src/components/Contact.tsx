"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
    {
        icon: Phone,
        title: "Elektromeister Luca Graf",
        content: "0151 59872742",
        link: "tel:015159872742",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Phone,
        title: "Maximilian Weimar",
        content: "0175 7138408",
        link: "tel:01757138408",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Mail,
        title: "E-Mail",
        content: "elektroserviceweimargraf@gmail.com",
        link: "mailto:elektroserviceweimargraf@gmail.com",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: MapPin,
        title: "Adresse",
        content: "Hopfengarten 2, 35085 Ebsdorfergrund",
        link: null,
        gradient: "from-amber-400 to-orange-500",
    },
    {
        icon: Clock,
        title: "Öffnungszeiten",
        content: "Mo-Sa: 8:00 - 16:00 Uhr",
        link: null,
        gradient: "from-green-500 to-emerald-500",
    },
]

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const subject = `Anfrage von ${formData.name}`
        const body = `${formData.message}\n\nKontakt-Email: ${formData.email}`
        window.location.href = `mailto:elektroserviceweimargraf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        Kontaktieren Sie <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">uns</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
                        Haben Sie Fragen oder benötigen Sie eine Beratung? Wir sind für Sie da!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3 sm:space-y-4 md:space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileTap={info.link ? { scale: 0.98 } : undefined}
                                className={`group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-200 ${info.link ? 'cursor-pointer active:bg-white/[0.08]' : ''}`}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                                onClick={() => info.link && (window.location.href = info.link)}
                            >
                                <motion.div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
                                </motion.div>
                                <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                                    <h3 className="text-sm sm:text-base md:text-lg text-white font-semibold mb-0.5 sm:mb-1">{info.title}</h3>
                                    {info.link ? (
                                        <span className="text-xs sm:text-sm md:text-base text-white/70 group-active:text-amber-400 transition-colors duration-200 break-all sm:break-words">
                                            {info.content}
                                        </span>
                                    ) : (
                                        <p className="text-xs sm:text-sm md:text-base text-white/70 break-words">{info.content}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5 }}
                        className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm md:text-base text-white font-medium mb-1.5 sm:mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 bg-black/50 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                                    placeholder="Ihr Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm md:text-base text-white font-medium mb-1.5 sm:mb-2">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 bg-black/50 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                                    placeholder="ihre@email.de"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm md:text-base text-white font-medium mb-1.5 sm:mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 bg-black/50 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 resize-none"
                                    placeholder="Ihre Nachricht..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-sm sm:text-base rounded-full active:from-amber-500 active:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/20"
                            >
                                Nachricht senden
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


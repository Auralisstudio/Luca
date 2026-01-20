"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Company Info */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                <Image
                                    src="/logo/logo.png"
                                    alt="Weimar & Graf Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight">Weimar & Graf</div>
                                <div className="text-amber-400 text-[10px] sm:text-xs tracking-wide">Elektroservice GbR</div>
                            </div>
                        </div>
                        <p className="text-white/60 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm leading-relaxed">
                            Ihr junges, dynamisches Team für Elektroinstallationen, Smart Home Lösungen und
                            innovative Energiekonzepte.
                        </p>

                        <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-white/60 mb-4 sm:mb-6">
                            <p>Hopfengarten 2, 35085 Ebsdorfergrund</p>
                            <p className="break-all sm:break-words">elektroserviceweimargraf@gmail.com</p>
                            <div className="pt-1 sm:pt-2">
                                <p>Elektromeister Luca Graf: 0151 59872742</p>
                                <p>Maximilian Weimar: 0175 7138408</p>
                            </div>
                        </div>

                        <div className="flex space-x-3 sm:space-x-4">
                            <motion.a
                                href="https://www.instagram.com/elektroserviceweimargrafgbr"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.9 }}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 active:bg-amber-400 hover:bg-amber-400 flex items-center justify-center transition-colors duration-300 group"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-active:text-black group-hover:text-black" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "Leistungen", href: "#services" },
                                { label: "Über uns", href: "#about" },
                                { label: "Kontakt", href: "#contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-white/60 active:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li><a href="/impressum" className="text-white/60 active:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">Impressum</a></li>
                            <li><a href="/datenschutz" className="text-white/60 active:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">Datenschutz</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60 text-[10px] sm:text-xs md:text-sm">
                    <p>© {currentYear} Weimar & Graf Elektroservice GbR. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    )
}


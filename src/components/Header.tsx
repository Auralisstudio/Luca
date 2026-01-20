"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Leistungen", href: "#services" },
        { label: "Über uns", href: "#about" },
        { label: "Kontakt", href: "#contact" },
    ]

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1] as const,
                when: "afterChildren" as const
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1] as const,
                when: "beforeChildren" as const,
                staggerChildren: 0.05
            }
        }
    }

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2 sm:space-x-3">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/10">
                            <Image
                                src="/logo/logo.png"
                                alt="Weimar & Graf Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block md:block">
                            <div className="text-white font-bold text-base sm:text-lg leading-tight">Weimar & Graf</div>
                            <div className="text-amber-400 text-[10px] sm:text-xs tracking-wide">Elektroservice GbR</div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white/80 hover:text-amber-400 transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-amber-400 text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
                        >
                            Beratung anfragen
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 -mr-2 rounded-lg active:bg-white/10 transition-colors"
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={26} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={26} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
                    >
                        <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    variants={itemVariants}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-white/90 active:text-amber-400 transition-colors duration-200 font-medium py-3 px-4 rounded-xl active:bg-white/5 text-lg"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div variants={itemVariants} className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center px-6 py-4 bg-amber-400 text-black font-semibold rounded-full active:bg-amber-500 transition-all duration-300 text-lg shadow-lg shadow-amber-500/20"
                                >
                                    Beratung anfragen
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

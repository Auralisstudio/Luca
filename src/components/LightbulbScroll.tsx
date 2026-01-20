"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const TOTAL_FRAMES = 192
const FRAME_START = 0
const FRAME_END = 191

export function LightbulbScroll() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [currentFrame, setCurrentFrame] = useState(0)

    // Preload all images
    useEffect(() => {
        let loadedCount = 0

        const loadImage = (index: number) => {
            return new Promise<void>((resolve) => {
                const img = new window.Image()
                const frameNumber = String(index).padStart(3, "0")
                const delay = (index % 3 === 1) ? "0.041s" : "0.042s"
                img.src = `/animation/frame_${frameNumber}_delay-${delay}.jpg`

                img.onload = () => {
                    loadedCount++
                    setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100))
                    resolve()
                }

                img.onerror = () => {
                    const alternateDelay = delay === "0.041s" ? "0.042s" : "0.041s"
                    img.src = `/animation/frame_${frameNumber}_delay-${alternateDelay}.jpg`

                    img.onload = () => {
                        loadedCount++
                        setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100))
                        resolve()
                    }

                    img.onerror = () => {
                        console.error(`Failed to load frame ${index}`)
                        resolve()
                    }
                }
            })
        }

        Promise.all(
            Array.from({ length: TOTAL_FRAMES }, (_, i) => loadImage(i))
        ).then(() => {
            setIsLoaded(true)
        })
    }, [])

    // Handle scroll
    useEffect(() => {
        if (!isLoaded) return

        const handleScroll = () => {
            const container = containerRef.current
            if (!container) return

            const rect = container.getBoundingClientRect()
            const containerHeight = container.offsetHeight
            const viewportHeight = window.innerHeight

            const scrollTop = -rect.top
            const scrollHeight = containerHeight - viewportHeight
            const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight))

            setScrollProgress(progress)
            const frameIndex = Math.min(Math.floor(progress * FRAME_END), FRAME_END)
            setCurrentFrame(frameIndex)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [isLoaded])

    // Get frame path
    const getFramePath = (index: number) => {
        const frameNumber = String(index).padStart(3, "0")
        const delay = (index % 3 === 1) ? "0.041s" : "0.042s"
        return `/animation/frame_${frameNumber}_delay-${delay}.jpg`
    }

    // Calculate text overlay opacities
    const getHeroOpacity = () => {
        if (scrollProgress <= 0.15) return 1
        if (scrollProgress >= 0.25) return 0
        return 1 - ((scrollProgress - 0.15) / 0.1)
    }

    const getPrecisionOpacity = () => {
        if (scrollProgress < 0.25) return 0
        if (scrollProgress >= 0.25 && scrollProgress <= 0.3) return (scrollProgress - 0.25) / 0.05
        if (scrollProgress > 0.3 && scrollProgress <= 0.45) return 1
        if (scrollProgress > 0.45 && scrollProgress <= 0.5) return 1 - ((scrollProgress - 0.45) / 0.05)
        return 0
    }

    const getSustainableOpacity = () => {
        if (scrollProgress < 0.5) return 0
        if (scrollProgress >= 0.5 && scrollProgress <= 0.6) return (scrollProgress - 0.5) / 0.1
        if (scrollProgress > 0.6 && scrollProgress <= 0.75) return 1
        if (scrollProgress > 0.75 && scrollProgress <= 0.8) return 1 - ((scrollProgress - 0.75) / 0.05)
        return 0
    }

    const getSmartOpacity = () => {
        if (scrollProgress < 0.8) return 0
        if (scrollProgress >= 0.8 && scrollProgress <= 0.9) return (scrollProgress - 0.8) / 0.1
        return 1
    }

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#050505' }}>
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold mb-4"
                        style={{ color: '#ffaa00' }}
                    >
                        {loadingProgress}%
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg tracking-wide"
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        Lädt Erlebnis...
                    </motion.p>
                </div>
            </div>
        )
    }

    // Mobile: Simple hero without scroll animation
    // Desktop: Full scroll animation experience

    return (
        <>
            {/* Mobile Version - Enhanced Hero with Animations */}
            <div className="block md:hidden relative w-full min-h-[100svh]" style={{ backgroundColor: '#050505' }}>
                <div className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center">
                    {/* Animated background image with subtle zoom */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <img
                            src="/Whisk_2b3483c5bc76ed0ac2243926708d553deg.png"
                            alt="Elektro Komplett Installation"
                            className="w-full h-full object-cover"
                            style={{
                                imageRendering: 'crisp-edges',
                            }}
                        />
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                    </motion.div>

                    {/* Decorative animated glow */}
                    <motion.div
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(255,170,0,0.15) 0%, transparent 70%)' }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-6 pt-16">
                        {/* Animated line decoration */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-16 h-0.5 mx-auto mb-6"
                            style={{ backgroundColor: '#ffaa00' }}
                        />

                        <motion.h1
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-[2.5rem] sm:text-5xl font-bold mb-3 tracking-tight leading-tight"
                            style={{ color: 'rgba(255, 255, 255, 1)', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
                        >
                            Weimar & Graf
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg sm:text-xl font-light tracking-wide mb-2"
                            style={{ color: '#ffaa00', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                        >
                            Elektro Komplett Installation
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-sm sm:text-base text-white/70 mb-8 max-w-xs mx-auto"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                        >
                            Ihr Partner für moderne Elektrotechnik
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 font-semibold text-base rounded-full transition-all duration-300 shadow-lg active:shadow-md"
                            style={{
                                backgroundColor: '#ffaa00',
                                color: '#050505',
                                boxShadow: '0 4px 20px rgba(255, 170, 0, 0.4)'
                            }}
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Entdecken
                        </motion.button>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <motion.span
                            className="text-white/50 text-xs mb-2 tracking-widest uppercase"
                        >
                            Mehr erfahren
                        </motion.span>
                        <motion.div
                            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2"
                            animate={{ borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,170,0,0.5)', 'rgba(255,255,255,0.3)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Desktop Version - Full Scroll Animation */}
            <div ref={containerRef} className="hidden md:block relative w-full h-[400vh]" style={{ backgroundColor: '#050505' }}>
                {/* Sticky Image Container */}
                <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-[#050505]">
                    {/* Image using full viewport width */}
                    <div className="absolute inset-0">
                        <img
                            src={getFramePath(currentFrame)}
                            alt={`Frame ${currentFrame}`}
                            className="w-full h-full object-cover"
                            style={{
                                imageRendering: 'crisp-edges',
                                WebkitFontSmoothing: 'antialiased',
                            }}
                        />
                    </div>

                    {/* Text Overlays */}
                    {/* Hero Section - 0% */}
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                        style={{ opacity: getHeroOpacity() }}
                    >
                        <div className="text-center px-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
                                style={{ color: 'rgba(255, 255, 255, 1)', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
                            >
                                Weimar & Graf
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-3xl lg:text-4xl font-light tracking-wide"
                                style={{ color: '#ffaa00', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                            >
                                Die Zukunft ist hell.
                            </motion.p>
                        </div>
                    </div>

                    {/* Precision Wiring - 30% */}
                    <div
                        className="absolute inset-0 flex items-center pointer-events-none transition-opacity duration-300"
                        style={{ opacity: getPrecisionOpacity() }}
                    >
                        <div className="w-full max-w-7xl mx-auto px-16">
                            <div className="max-w-xl">
                                <h2 className="text-6xl lg:text-7xl font-bold mb-4" style={{ color: 'rgba(255, 255, 255, 1)', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                                    Präzise
                                    <br />
                                    Verkabelung.
                                </h2>
                                <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                                    Jede Verbindung zählt. Unsere Expertise garantiert höchste Qualität und Sicherheit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sustainable Energy - 60% */}
                    <div
                        className="absolute inset-0 flex items-center justify-end pointer-events-none transition-opacity duration-300"
                        style={{ opacity: getSustainableOpacity() }}
                    >
                        <div className="w-full max-w-7xl mx-auto px-16">
                            <div className="max-w-xl ml-auto text-right">
                                <h2 className="text-6xl lg:text-7xl font-bold mb-4" style={{ color: 'rgba(255, 255, 255, 1)', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                                    Nachhaltige
                                    <br />
                                    Energie.
                                </h2>
                                <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                                    Effiziente Lösungen für eine grünere Zukunft. Energiesparen beginnt hier.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Smart Home Ready - 90% */}
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                        style={{ opacity: getSmartOpacity() }}
                    >
                        <div className="text-center px-6">
                            <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                                <span style={{ color: 'rgba(255, 255, 255, 1)' }}>Elektro Komplett</span>
                                <br />
                                <span style={{ color: '#ffaa00' }}>Installation.</span>
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="pointer-events-auto px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300"
                                style={{ backgroundColor: '#ffaa00', color: '#050505' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffaa00'
                                }}
                            >
                                Jetzt Beratung anfragen
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

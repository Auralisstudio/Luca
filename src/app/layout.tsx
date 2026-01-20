import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#050505",
}

export const metadata: Metadata = {
    // Basic Meta
    title: {
        default: "Weimar & Graf Elektroservice GbR | Elektro Komplett Installation",
        template: "%s | Weimar & Graf Elektroservice",
    },
    description: "Ihr zertifizierter Meisterbetrieb für Elektroinstallationen in Ebsdorfergrund und Umgebung. Elektroinstallationen, Gebäudesystemtechnik, Anlagenprüfung, Smart Home & Wartung. ☎ 0151 59872742",

    // Favicon & Icons
    icons: {
        icon: [
            { url: "/logo/logo.png", sizes: "any" },
            { url: "/logo/logo.png", type: "image/png", sizes: "32x32" },
            { url: "/logo/logo.png", type: "image/png", sizes: "16x16" },
        ],
        apple: [
            { url: "/logo/logo.png", sizes: "180x180" },
        ],
        shortcut: "/logo/logo.png",
    },

    // Manifest
    manifest: "/manifest.json",

    // Keywords
    keywords: [
        "Elektriker Ebsdorfergrund",
        "Elektroservice Marburg",
        "Elektroinstallation Hessen",
        "Smart Home Installation",
        "Gebäudesystemtechnik",
        "Anlagenprüfung",
        "E-Check",
        "Elektromeister",
        "Weimar & Graf",
        "Elektro Komplett Installation",
        "Wartung Reparatur Elektro",
    ],

    // Authors & Creator
    authors: [{ name: "Weimar & Graf Elektroservice GbR" }],
    creator: "Weimar & Graf Elektroservice GbR",
    publisher: "Weimar & Graf Elektroservice GbR",

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Open Graph
    openGraph: {
        type: "website",
        locale: "de_DE",
        url: "https://www.elektroserviceweimargrafgbr.de",
        siteName: "Weimar & Graf Elektroservice GbR",
        title: "Weimar & Graf Elektroservice GbR | Elektro Komplett Installation",
        description: "Ihr zertifizierter Meisterbetrieb für Elektroinstallationen. Junges, dynamisches Team für moderne Elektrotechnik in Ebsdorfergrund und Umgebung.",
        images: [
            {
                url: "/logo/logo.png",
                width: 800,
                height: 800,
                alt: "Weimar & Graf Elektroservice Logo",
            },
        ],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: "Weimar & Graf Elektroservice GbR",
        description: "Elektro Komplett Installation - Ihr zertifizierter Meisterbetrieb für moderne Elektrotechnik.",
        images: ["/logo/logo.png"],
    },

    // Additional Meta
    category: "Elektroservice",
    classification: "Handwerk, Elektroinstallation",

    // Verification (add your codes when available)
    // verification: {
    //     google: "your-google-verification-code",
    // },

    // Alternate Languages (if applicable)
    alternates: {
        canonical: "https://www.elektroserviceweimargrafgbr.de",
    },

    // Other
    other: {
        "geo.region": "DE-HE",
        "geo.placename": "Ebsdorfergrund",
        "geo.position": "50.7833;8.8333",
        "ICBM": "50.7833, 8.8333",
    },
}

// JSON-LD structured data for local business
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Weimar & Graf Elektroservice GbR",
    description: "Zertifizierter Meisterbetrieb für Elektroinstallationen, Gebäudesystemtechnik und Smart Home Lösungen.",
    url: "https://www.elektroserviceweimargrafgbr.de",
    telephone: "+49 151 59872742",
    email: "elektroserviceweimargraf@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Hopfengarten 2",
        addressLocality: "Ebsdorfergrund",
        postalCode: "35085",
        addressCountry: "DE",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7833,
        longitude: 8.8333,
    },
    openingHours: "Mo-Sa 08:00-16:00",
    priceRange: "$$",
    image: "/logo/logo.png",
    sameAs: [
        "https://www.instagram.com/elektroserviceweimargrafgbr",
    ],
    areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 50.7833,
            longitude: 8.8333,
        },
        geoRadius: "50000",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Elektrodienstleistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Elektroinstallationen",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Gebäudeinstallationen",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Anlagenprüfung",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Gebäudesystemtechnik",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Wartung & Reparatur",
                },
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de" className="dark" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}

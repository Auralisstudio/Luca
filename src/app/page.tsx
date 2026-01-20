import { Header } from "@/components/Header"
import { LightbulbScroll } from "@/components/LightbulbScroll"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section with Scrollytelling Animation */}
                <div id="home">
                    <LightbulbScroll />
                </div>

                {/* What We Do - Services Section */}
                <Services />

                {/* About Us Section */}
                <About />

                {/* Contact Form Section */}
                <Contact />
            </main>
            <Footer />
        </>
    )
}

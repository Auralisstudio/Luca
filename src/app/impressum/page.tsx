import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Impressum() {
    return (
        <main className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-12">
                    Impressum
                </h1>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
                    <div className="text-white/70 space-y-2">
                        <p className="font-semibold text-white">Weimar & Graf Elektroservice GbR</p>
                        <p>Hopfengarten 2</p>
                        <p>35085 Ebsdorfergrund</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">Vertreten durch</h2>
                    <div className="text-white/70 space-y-2">
                        <p>Elektromeister Luca Graf</p>
                        <p>Maximilian Weimar</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
                    <div className="text-white/70 space-y-2">
                        <p>Telefon: 0151 59872742 (Luca Graf)</p>
                        <p>Telefon: 0175 7138408 (Maximilian Weimar)</p>
                        <p>E-Mail: <a href="mailto:elektroserviceweimargraf@gmail.com" className="hover:text-amber-400 transition-colors">elektroserviceweimargraf@gmail.com</a></p>
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">Haftung für Inhalte</h2>
                    <p className="text-white/70 leading-relaxed">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">Haftung für Links</h2>
                    <p className="text-white/70 leading-relaxed">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">Urheberrecht</h2>
                    <p className="text-white/70 leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </section>
            </div>
        </main>
    )
}

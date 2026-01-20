import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Datenschutz() {
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
                    Datenschutzerklärung
                </h1>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
                    <div className="text-white/70 space-y-4">
                        <h3 className="text-lg font-medium text-white">Allgemeine Hinweise</h3>
                        <p className="leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <h3 className="text-lg font-medium text-white">Datenerfassung auf dieser Website</h3>
                        <p className="leading-relaxed">
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">2. Hosting und Content Delivery Networks (CDN)</h2>
                    <div className="text-white/70 space-y-4">
                        <p className="leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
                        </p>
                        <h3 className="text-lg font-medium text-white">Externes Hosting</h3>
                        <p className="leading-relaxed">
                            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <div className="text-white/70 space-y-4">
                        <h3 className="text-lg font-medium text-white">Datenschutz</h3>
                        <p className="leading-relaxed">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <h3 className="text-lg font-medium text-white">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="leading-relaxed">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="pl-4 border-l-2 border-amber-400">
                            Weimar & Graf Elektroservice GbR<br />
                            Hopfengarten 2<br />
                            35085 Ebsdorfergrund<br /><br />
                            E-Mail: elektroserviceweimargraf@gmail.com
                        </p>
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-white">4. Datenerfassung auf dieser Website</h2>
                    <div className="text-white/70 space-y-4">
                        <h3 className="text-lg font-medium text-white">Cookies</h3>
                        <p className="leading-relaxed text-amber-400 font-semibold">
                            Wir verwenden auf dieser Website keine Cookies.
                        </p>
                        <p className="leading-relaxed">
                            Es werden keine Tracking- oder Analyse-Cookies eingesetzt, die Ihr Nutzerverhalten speichern. Lediglich technisch notwendige Übertragungsdaten werden beim Aufruf der Seite kurzzeitig verarbeitet, aber nicht gespeichert (siehe Server-Log-Dateien).
                        </p>

                        <h3 className="text-lg font-medium text-white mt-8">Kontaktformular</h3>
                        <p className="leading-relaxed">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p className="leading-relaxed">
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                        </p>
                        <p className="leading-relaxed">
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

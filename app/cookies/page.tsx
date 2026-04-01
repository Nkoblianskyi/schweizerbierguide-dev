import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie – Schweizer Bier Guide",
  description:
    "Cookie-Richtlinie von schweizerbierguide.com – Informationen zu den von uns verwendeten Cookies und Tracking-Technologien.",
}

const cookieTypes = [
  {
    name: "Notwendige Cookies",
    required: true,
    description:
      "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Navigation und den Zugriff auf gesicherte Bereiche. Ohne diese Cookies kann die Website nicht ordnungsgemäss funktionieren.",
    examples: [
      { name: "sbg-cookie-consent", purpose: "Speichert Ihre Cookie-Einwilligung", duration: "1 Jahr" },
      { name: "session", purpose: "Sitzungsverwaltung", duration: "Sitzung" },
    ],
  },
  {
    name: "Analyse-Cookies",
    required: false,
    description:
      "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Alle Daten werden anonymisiert erhoben und dienen ausschliesslich der Verbesserung unserer Inhalte und Benutzerführung.",
    examples: [
      { name: "_ga", purpose: "Google Analytics – Unterscheidung von Nutzern", duration: "2 Jahre" },
      { name: "_ga_*", purpose: "Google Analytics – Sitzungsstatus", duration: "2 Jahre" },
    ],
  },
  {
    name: "Funktionale Cookies",
    required: false,
    description:
      "Funktionale Cookies ermöglichen erweiterte Funktionalitäten und Personalisierungen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten eingebunden haben.",
    examples: [
      { name: "lang", purpose: "Gespeicherte Spracheinstellung", duration: "1 Jahr" },
    ],
  },
]

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page header */}
        <section className="py-16 px-6 border-b border-gold/20 bg-mid-brown/30">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-cream">
              Cookie-Richtlinie
            </h1>
            <p className="text-foreground/50 text-sm font-sans mt-4">
              Zuletzt aktualisiert: 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">

            {/* Intro */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Was sind Cookies?</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                Cookies sind kleine Textdateien, die von Ihrem Webbrowser auf Ihrem Endgerät (Computer,
                Tablet, Smartphone) gespeichert werden, wenn Sie eine Website besuchen. Cookies
                werden verwendet, um Websites korrekt funktionieren zu lassen, effizienter zu gestalten
                sowie den Betreibern Informationen zu liefern.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Diese Cookie-Richtlinie erklärt, welche Arten von Cookies wir auf
                schweizerbierguide.com verwenden, warum wir sie verwenden und wie Sie
                die Verwendung von Cookies steuern können.
              </p>
            </div>

            {/* Responsible party */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Verantwortliche Stelle</h2>
              <div className="bg-card border border-gold/20 p-6 font-sans text-sm text-foreground/60">
                <p className="text-foreground/80 font-semibold mb-1">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
                <p>Myrianthous Anna</p>
                <p>Panagioti Kaspi 5A</p>
                <p>Nicosia 1095, Cyprus</p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a href="mailto:info@schweizerbierguide.com" className="text-gold hover:underline">
                    info@schweizerbierguide.com
                  </a>
                </p>
              </div>
            </div>

            {/* Cookie types */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-6">Von uns verwendete Cookies</h2>
              <div className="flex flex-col gap-8">
                {cookieTypes.map((type) => (
                  <div key={type.name} className="border border-gold/20 bg-card overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10 bg-mid-brown/40">
                      <h3 className="font-serif text-lg text-cream">{type.name}</h3>
                      <span
                        className={`text-xs font-sans px-3 py-1 tracking-wider ${
                          type.required
                            ? "bg-gold/20 text-gold border border-gold/40"
                            : "bg-copper/10 text-copper border border-copper/30"
                        }`}
                      >
                        {type.required ? "Notwendig" : "Optional"}
                      </span>
                    </div>
                    {/* Body */}
                    <div className="px-6 py-5">
                      <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                        {type.description}
                      </p>
                      {/* Cookie table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm font-sans border-collapse">
                          <thead>
                            <tr className="border-b border-gold/10">
                              <th className="text-left text-gold/60 text-xs tracking-widest uppercase py-2 pr-4 font-normal">
                                Cookie-Name
                              </th>
                              <th className="text-left text-gold/60 text-xs tracking-widest uppercase py-2 pr-4 font-normal">
                                Zweck
                              </th>
                              <th className="text-left text-gold/60 text-xs tracking-widest uppercase py-2 font-normal">
                                Laufzeit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {type.examples.map((ex) => (
                              <tr key={ex.name} className="border-b border-gold/5 last:border-0">
                                <td className="py-2.5 pr-4 text-copper font-mono text-xs">{ex.name}</td>
                                <td className="py-2.5 pr-4 text-foreground/60">{ex.purpose}</td>
                                <td className="py-2.5 text-foreground/50">{ex.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie management */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Cookies verwalten und löschen</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Sie können Cookies jederzeit in den Einstellungen Ihres Browsers verwalten oder
                löschen. Die meisten Browser bieten die Möglichkeit, Cookies automatisch zu
                akzeptieren, alle Cookies abzulehnen oder Sie zu benachrichtigen, wenn ein Cookie
                gesetzt wird.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Bitte beachten Sie, dass die Deaktivierung von Cookies die Funktionalität
                unserer Website einschränken kann. Notwendige Cookies können nicht deaktiviert
                werden, ohne die Grundfunktionen der Website zu beeinträchtigen.
              </p>
              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-foreground/60 text-sm font-sans leading-relaxed">
                  <strong className="text-gold/80">Browser-Einstellungen:</strong>{" "}
                  Anleitungen zur Cookie-Verwaltung finden Sie in der Hilfedokumentation Ihres
                  Browsers (Chrome, Firefox, Safari, Edge, Opera). Suchen Sie nach «Cookies
                  löschen» oder «Datenschutzeinstellungen» in der Hilfe Ihres Browsers.
                </p>
              </div>
            </div>

            {/* Third parties */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Drittanbieter-Cookies</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                Einige Cookies auf unserer Website werden von Drittanbietern gesetzt. Diese
                Drittanbieter haben eigene Datenschutzrichtlinien und wir empfehlen Ihnen,
                diese zu lesen, um zu verstehen, wie diese Cookies verwendet werden.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Wir haben keine Kontrolle über die Cookies, die von Drittanbietern gesetzt
                werden, und sind für deren Inhalt und Praktiken nicht verantwortlich.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Änderungen dieser Richtlinie</h2>
              <p className="text-foreground/70 leading-relaxed">
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Bei
                wesentlichen Änderungen werden wir Sie über ein entsprechendes Banner auf
                unserer Website informieren. Wir empfehlen Ihnen, diese Seite regelmässig
                zu besuchen, um über unsere aktuellen Cookie-Praktiken informiert zu bleiben.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-serif text-2xl text-gold mb-4">Kontakt</h2>
              <p className="text-foreground/70 leading-relaxed">
                Wenn Sie Fragen zu unserer Verwendung von Cookies haben, wenden Sie sich bitte
                an uns:{" "}
                <a href="mailto:info@schweizerbierguide.com" className="text-gold hover:underline">
                  info@schweizerbierguide.com
                </a>
                . Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-gold hover:underline">
                  Datenschutzrichtlinie
                </Link>
                .
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

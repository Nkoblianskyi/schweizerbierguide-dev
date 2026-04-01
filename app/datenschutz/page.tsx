import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie – Schweizer Bier Guide",
  description:
    "Datenschutzrichtlinie von schweizerbierguide.com – Informationen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 px-6 border-b border-gold/20 bg-mid-brown/30">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-cream">
              Datenschutzrichtlinie
            </h1>
            <p className="text-foreground/50 text-sm font-sans mt-4">
              Zuletzt aktualisiert: 2026
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose-custom">
            <div className="flex flex-col gap-10">

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">1. Verantwortliche Stelle</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten im Sinne der
                  Datenschutzgesetze ist:
                </p>
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
                  <p>Website: schweizerbierguide.com</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">2. Welche Daten wir erheben</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Beim Besuch unserer Website können folgende Daten automatisch erhoben werden:
                </p>
                <ul className="list-none flex flex-col gap-2 text-foreground/60 text-sm font-sans">
                  {[
                    "IP-Adresse (anonymisiert)",
                    "Browsertyp und -version",
                    "Betriebssystem",
                    "Datum und Uhrzeit des Zugriffs",
                    "Besuchte Seiten (URL)",
                    "Verweisende Website (Referrer-URL)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">3. Zweck der Datenverarbeitung</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Wir verwenden Ihre Daten ausschliesslich für folgende Zwecke:
                </p>
                <ul className="list-none flex flex-col gap-2 text-foreground/60 text-sm font-sans">
                  {[
                    "Bereitstellung und Verbesserung unserer Website",
                    "Analyse der Websitenutzung (anonymisiert)",
                    "Sicherstellung der technischen Funktionsfähigkeit",
                    "Beantwortung von Anfragen, die Sie uns senden",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">4. Cookies</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
                  Endgerät gespeichert werden. Detaillierte Informationen zu den von uns verwendeten
                  Cookies finden Sie in unserer{" "}
                  <Link href="/cookies" className="text-gold hover:underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Sie können der Verwendung von Cookies über unser Cookie-Banner widersprechen.
                  Bitte beachten Sie, dass die Ablehnung bestimmter Cookies die Funktionalität
                  der Website einschränken kann.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">5. Datenweitergabe an Dritte</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Wir geben Ihre personenbezogenen Daten nicht ohne Ihre ausdrückliche Einwilligung
                  an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder zur
                  Vertragserfüllung notwendig.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Wir können Dienstleister einsetzen (z. B. Hosting-Anbieter, Analysedienste),
                  die in unserem Auftrag und gemäss unseren Anweisungen tätig sind und
                  entsprechende Datenschutzverpflichtungen eingegangen sind.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">6. Ihre Rechte</h2>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Sie haben jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-none flex flex-col gap-2 text-foreground/60 text-sm font-sans">
                  {[
                    "Recht auf Auskunft über die von uns gespeicherten Daten",
                    "Recht auf Berichtigung unrichtiger Daten",
                    "Recht auf Löschung Ihrer Daten",
                    "Recht auf Einschränkung der Verarbeitung",
                    "Recht auf Datenübertragbarkeit",
                    "Recht auf Widerspruch gegen die Verarbeitung",
                    "Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@schweizerbierguide.com" className="text-gold hover:underline">
                    info@schweizerbierguide.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">7. Datensicherheit</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre
                  Daten gegen unbeabsichtigte oder unrechtmässige Vernichtung, Verlust,
                  Veränderung oder unbefugte Offenbarung sowie Zugang zu schützen. Unsere
                  Sicherheitsmassnahmen werden entsprechend der technologischen Entwicklung
                  fortlaufend verbessert.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-gold mb-4">8. Änderungen dieser Richtlinie</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Wir behalten uns das Recht vor, diese Datenschutzrichtlinie bei Bedarf zu
                  aktualisieren. Die aktuelle Version ist stets auf unserer Website verfügbar.
                  Bei wesentlichen Änderungen informieren wir Sie entsprechend.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

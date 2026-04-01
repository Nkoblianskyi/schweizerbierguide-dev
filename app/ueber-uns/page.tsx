import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { MapPin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Über Uns – Schweizer Bier Guide",
  description:
    "Erfahren Sie mehr über den Schweizer Bier Guide – unsere Mission, unser Team und unsere Leidenschaft für das Schweizer Bier.",
}

const values = [
  {
    title: "Leidenschaft",
    text: "Wir lieben Bier – seine Geschichte, seinen Geschmack und die Menschen dahinter. Diese Leidenschaft treibt uns täglich an.",
  },
  {
    title: "Unabhängigkeit",
    text: "Wir sind vollständig unabhängig. Unsere Bewertungen und Empfehlungen sind ehrlich und werden nicht durch kommerzielle Interessen beeinflusst.",
  },
  {
    title: "Authentizität",
    text: "Wir recherchieren sorgfältig, besuchen Brauereien persönlich und dokumentieren die echten Geschichten hinter den Bieren.",
  },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-mid-brown/50 border-b border-gold/20 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Wer wir sind
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
              Über uns
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Der Schweizer Bier Guide – Ihre unabhängige Plattform für die
              Entdeckung der Schweizer Bierwelt.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-brewery.jpg"
                alt="Schweizer Brauerei"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
            </div>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
                Unsere Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                Die Schweizer Bierkultur feiern
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Der Schweizer Bier Guide wurde mit einer einfachen Überzeugung gegründet:
                Die Schweiz hat eine reiche, vielfältige und faszinierende Bierkultur, die es
                verdient, einem breiten Publikum vorgestellt zu werden.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Unsere Plattform bringt zusammen, was zusammengehört – Brauereien, Bierliebhaber
                und die Geschichten, die hinter jedem Glas stecken. Von der kleinen Mikrobrauerei
                im Bergdorf bis hin zur traditionsreichen Grossbrauerei am Rhein: Wir dokumentieren,
                beschreiben und feiern das Schweizer Bier in all seinen Facetten.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Mit einem professionellen Team aus Bierexperten, Journalisten und Genussmenschen
                bieten wir Ihnen fundierte, ehrliche und leidenschaftlich verfasste Inhalte.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-mid-brown/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                Unsere Werte
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card border border-gold/20 p-8 hover:border-gold/50 transition-colors"
                >
                  <h3 className="font-serif text-xl text-cream mb-3">{v.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6" id="kontakt">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Kontakt
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8">
              Nehmen Sie Kontakt auf
            </h2>
            <div className="bg-card border border-gold/20 p-10">
              <p className="font-serif text-xl text-gold mb-6">
                FISCUS NOSTRUM FUND SERVICES LIMITED
              </p>
              <div className="flex flex-col gap-4 text-foreground/60 font-sans text-sm">
                <div className="flex items-start gap-3 justify-center">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-foreground/80 mb-0.5">Myrianthous Anna</p>
                    <p>Panagioti Kaspi 5A</p>
                    <p>Nicosia 1095, Cyprus</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href="mailto:info@schweizerbierguide.com"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    info@schweizerbierguide.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-6 bg-gold/5 border-t border-gold/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground/40 text-sm leading-relaxed font-sans">
              Diese Website enthält Informationen über alkoholische Getränke. Der Zugang ist
              ausschliesslich Personen ab 18 Jahren gestattet. Geniessen Sie Bier
              verantwortungsvoll. Massvoll trinken schützt Ihre Gesundheit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

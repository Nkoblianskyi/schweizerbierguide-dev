import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 bg-mid-brown/40" id="ueber-uns">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Wer wir sind
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 text-balance">
              Über den Schweizer<br />Bier Guide
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Der Schweizer Bier Guide ist Ihre unabhängige Plattform für die Entdeckung der
              vielfältigen Bierwelt der Schweiz. Unser leidenschaftliches Team recherchiert,
              verkostet und dokumentiert Hunderte von Schweizer Bieren – von den
              traditionsreichen Grossbrauereien bis hin zu kleinen Mikro-Brauereien.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Unser Ziel ist es, die Schweizer Bierkultur zu feiern, zu fördern und einem
              breiten Publikum zugänglich zu machen. Wir glauben, dass jedes Glas Bier eine
              Geschichte erzählt – von der Region, vom Braumeister und von der Natur unserer
              schönen Schweiz.
            </p>

            <div className="flex flex-col gap-3 mb-8 text-sm text-foreground/60 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                  Myrianthous Anna<br />
                  Panagioti Kaspi 5A, Nicosia 1095, Cyprus
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@schweizerbierguide.com"
                  className="hover:text-gold transition-colors"
                >
                  info@schweizerbierguide.com
                </a>
              </div>
            </div>

            <Link
              href="/ueber-uns"
              className="inline-block border border-gold/50 text-gold hover:bg-gold/10 transition-colors px-6 py-3 text-sm tracking-widest uppercase font-sans"
            >
              Mehr über uns →
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about-brewery.jpg"
              alt="Schweizer Brauerei – Braukessel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Beer, Mail, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "Biere",
    links: [
      { href: "/craft", label: "Craft Biere" },
      { href: "/klassisch", label: "Klassisches Bier" },
      { href: "/populaer", label: "Populäres Bier" },
    ],
  },
  {
    title: "Über uns",
    links: [
      { href: "/ueber-uns", label: "Über den Guide" },
      { href: "/ueber-uns#kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/datenschutz", label: "Datenschutzrichtlinie" },
      { href: "/cookies", label: "Cookie-Richtlinie" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-brown border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top row: brand + nav links */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Beer className="w-6 h-6 text-gold" />
              <span className="font-serif text-lg text-gold">Schweizer Bier Guide</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Ihr unabhängiger Führer durch die Schweizer Bierwelt.
            </p>
          </div>

          {/* Nav links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-foreground/50 hover:text-gold text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company info row */}
        <div className="border-t border-gold/10 pt-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex items-start gap-2 text-xs text-foreground/40 font-sans">
              <MapPin className="w-3.5 h-3.5 text-gold/50 flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                <span className="text-foreground/60 font-medium">FISCUS NOSTRUM FUND SERVICES LIMITED</span><br />
                Myrianthous Anna, Panagioti Kaspi 5A, Nicosia 1095, Cyprus
              </address>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/40 font-sans sm:ml-auto">
              <Mail className="w-3.5 h-3.5 text-gold/50 flex-shrink-0" />
              <a
                href="mailto:info@schweizerbierguide.com"
                className="hover:text-gold transition-colors"
              >
                info@schweizerbierguide.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/10 pt-6">
          <p className="text-foreground/30 text-xs leading-relaxed">
            Diese Website richtet sich ausschliesslich an Personen ab 18 Jahren.
            Alkohol kann die Gesundheit schädigen – bitte geniessen Sie verantwortungsvoll.
            Kein Verkauf an Minderjährige. &copy; {new Date().getFullYear()} schweizerbierguide.com
          </p>
        </div>

      </div>
    </footer>
  )
}

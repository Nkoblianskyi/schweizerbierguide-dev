import Link from "next/link"
import BeerCard, { type Beer } from "./beer-card"

const craftBeers: Beer[] = [
  {
    id: "bfm-abbaye",
    name: "Abbaye de Saint Bon-Chien",
    brewery: "BFM (Brasserie des Franches-Montagnes)",
    style: "Barleywine / Wild Ale",
    abv: 11.0,
    image: "/images/craft-bfm-abbaye.jpg",
    description:
      "Das stärkste und bekannteste Craft-Bier der Schweiz. Ein komplexes, gereiftes Bier mit Noten von Karamell, Trockenfrüchten und einer leichten Säure durch wilde Hefestämme. Jahrgangsweise Abfüllung.",
    origin: "Saignelégier, Jura",
  },
  {
    id: "bad-attitude-krampus",
    name: "Krampus Imperial Stout",
    brewery: "Bad Attitude Brewing",
    style: "Imperial Stout",
    abv: 10.5,
    image: "/images/craft-krampus-stout.jpg",
    description:
      "Ein imposantes Imperial Stout mit intensiven Aromen von Espresso, dunkler Schokolade und Vanille. Vollmundig, samtig und von beeindruckender Komplexität – eines der stärksten Schweizer Craft-Biere.",
    origin: "Balerna, Tessin",
  },
  {
    id: "turbinenbräu-ipa",
    name: "Zürcher IPA",
    brewery: "Turbinenbräu",
    style: "India Pale Ale",
    abv: 6.5,
    image: "/images/craft-ipa.jpg",
    description:
      "Ein charakterstarkes IPA aus dem Herzen Zürichs. Ausgeprägte Hopfenbitterkeit mit Aromen von Zitrusfrüchten, Kiefer und tropischen Früchten. Frisch, lebendig und unverkennbar urban.",
    origin: "Zürich",
  },
]

export default function CraftPreviewSection() {
  return (
    <section className="py-24 bg-background" id="biere">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Handwerklich gebraut
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Craft Biere
            </h2>
          </div>
          <Link
            href="/craft"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 transition-colors px-6 py-3 text-sm tracking-widest uppercase font-sans"
          >
            Alle Craft Biere →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {craftBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} category="craft" />
          ))}
        </div>
      </div>
    </section>
  )
}

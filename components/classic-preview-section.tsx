import Link from "next/link"
import BeerCard, { type Beer } from "./beer-card"
import MaxAbvHighlight from "./max-abv-highlight"

const klassischBeers: Beer[] = [
  {
    id: "feldschlosschen-original",
    name: "Feldschlösschen Original",
    brewery: "Feldschlösschen Getränke AG",
    style: "Helles Lager",
    abv: 5.0,
    image: "/images/classic-lager.jpg",
    description:
      "Das meistverkaufte Schweizer Bier. Goldgelb, klar und mit einer feinen Hopfennote. Leicht, erfrischend und der Inbegriff des klassischen Schweizer Lagers – seit 1876 Teil unserer Bierkultur.",
    origin: "Rheinfelden, Aargau",
  },
  {
    id: "cardinal-lager",
    name: "Cardinal Lager",
    brewery: "Brasserie du Cardinal",
    style: "Helles Lager",
    abv: 5.0,
    image: "/images/classic-cardinal.jpg",
    description:
      "Ein Klassiker aus der Romandie. Helles, goldenes Lager mit ausgewogener Hopfenbittere und sauberem, frischem Abgang. Seit 1788 das Symbol der westschweizer Bierkultur.",
    origin: "Fribourg",
  },
  {
    id: "appenzeller-schwarzer-kristall",
    name: "Schwarzer Kristall",
    brewery: "Brauerei Locher",
    style: "Schwarzbier",
    abv: 5.2,
    image: "/images/classic-dunkel.jpg",
    description:
      "Ein faszinierendes Schwarzbier mit samtiger Textur und Röstaromen von Kaffee und dunkler Schokolade. Überraschend mild trotz seiner tiefen Farbe – ein Schweizer Klassiker der besonderen Art.",
    origin: "Appenzell",
  },
]

export default function ClassicPreviewSection() {
  const strongest = [...klassischBeers].sort((a, b) => b.abv - a.abv)[0]

  return (
    <section className="py-24 bg-mid-brown/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Tradition seit Jahrhunderten
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Klassisches Bier
            </h2>
          </div>
          <Link
            href="/klassisch"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 transition-colors px-6 py-3 text-sm tracking-widest uppercase font-sans"
          >
            Alle klassischen Biere →
          </Link>
        </div>

        <div className="mb-10 -mx-6 md:mx-0 md:rounded-sm md:overflow-hidden">
          <MaxAbvHighlight
            abv={strongest.abv}
            beerName={strongest.name}
            brewery={strongest.brewery}
            showLegal={false}
            contextLabel="Stärkstes Bier in dieser Vorschau:"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {klassischBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} category="klassisch" />
          ))}
        </div>
      </div>
    </section>
  )
}

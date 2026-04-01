import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AgeDisclaimer from "@/components/age-disclaimer"
import { Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Klassisches Bier – Schweizer Bier Guide",
  description:
    "Die klassischen Schweizer Biere: Feldschlösschen, Cardinal, Locher und mehr. Tradition, Qualität und Jahrhunderte alte Braukunst.",
}

const klassischBeers = [
  {
    id: "feldschlosschen-original",
    name: "Feldschlösschen Original",
    brewery: "Feldschlösschen Getränke AG",
    style: "Helles Lager",
    abv: 5.0,
    ibu: 20,
    color: "Helles Goldgelb",
    image: "/images/classic-lager.jpg",
    origin: "Rheinfelden, Kanton Aargau",
    since: "1876",
    description:
      "Das meistverkaufte Schweizer Bier ist seit 1876 ein fester Bestandteil der helvetischen Bierkultur. Feldschlösschen steht für Verlässlichkeit, Qualität und den klassischen Schweizer Biergeschmack.",
    tasting:
      "Goldgelb mit feinem weissem Schaum. Heller, malziger Antrunk mit ausgewogener Hopfenbittere. Leicht, erfrischend und sauber im Abgang – der perfekte Begleiter für jede Gelegenheit.",
    pairing: "Bratwurst mit Senf, Rösti, Käsefondü",
    tags: ["Meistverkauft", "Schweizer Klassiker", "Seit 1876"],
  },
  {
    id: "cardinal-lager",
    name: "Cardinal Lager",
    brewery: "Brasserie du Cardinal",
    style: "Helles Lager",
    abv: 5.0,
    ibu: 22,
    color: "Klares Goldgelb",
    image: "/images/classic-cardinal.jpg",
    origin: "Fribourg",
    since: "1788",
    description:
      "Gegründet 1788 in Fribourg, ist die Brasserie du Cardinal eine der ältesten noch aktiven Brauereien der Schweiz. Das Cardinal Lager verkörpert die Brautradition der Romandie.",
    tasting:
      "Ausgewogene, saubere Helle mit feiner Malzsüsse und zurückhaltender Hopfenbittere. Leichter Körper, lebhafte Karbonisierung und ein frischer, trockener Abgang – typisch romanisch.",
    pairing: "Fondue fribourgeois, Raclette, gegrilltes Poulet",
    tags: ["Romandie-Klassiker", "Seit 1788", "Fribourger Tradition"],
  },
  {
    id: "schwarzer-kristall",
    name: "Schwarzer Kristall",
    brewery: "Brauerei Locher AG",
    style: "Schwarzbier",
    abv: 5.2,
    ibu: 25,
    color: "Tiefes Schwarzbraun",
    image: "/images/classic-dunkel.jpg",
    origin: "Appenzell",
    since: "1886",
    description:
      "Die Brauerei Locher aus Appenzell ist bekannt für ihre aussergewöhnlichen Bierstile. Der Schwarze Kristall ist eines der faszinierendsten klassischen Dunkelbiere der Schweiz.",
    tasting:
      "Trotz seiner tiefen Farbe überraschend mild. Röstaromen von Kaffee und dunkler Schokolade, balanciert durch eine dezente Malzsüsse. Samtiger Körper und angenehm trockener Abgang.",
    pairing: "Rindsgeschnetzeltes, Wildpastetli, Pralinéfondü",
    tags: ["Schwarzbier", "Appenzell", "Milde Röststoffe", "Traditionell"],
  },
  {
    id: "eichhof-lager",
    name: "Eichhof Lager",
    brewery: "Brauerei Eichhof",
    style: "Helles Lager",
    abv: 4.8,
    ibu: 18,
    color: "Helles Goldgelb",
    image: "/images/classic-eichhof.jpg",
    origin: "Luzern",
    since: "1834",
    description:
      "Die Brauerei Eichhof, seit 1834 in Luzern beheimatet, ist die Traditionsbrauerei der Zentralschweiz. Das Eichhof Lager ist ein harmonisches, leicht zugängliches Bier für jeden Anlass.",
    tasting:
      "Frisch und leicht mit einem sauberen, malzigen Grundcharakter. Feine Hopfennote, mittlere Karbonisierung und ein unkomplizierter, angenehmer Trinkfluss – ideal für gesellige Runden.",
    pairing: "Luzernerplatte, Käseschnitte, Leberknödelsuppe",
    tags: ["Zentralschweiz", "Seit 1834", "Luzernerklassiker"],
  },
  {
    id: "rugenbräu-premium",
    name: "Rugenbräu Premium Lager",
    brewery: "Rugenbräu AG",
    style: "Premium Lager",
    abv: 5.0,
    ibu: 20,
    color: "Klares Goldgelb",
    image: "/images/classic-rugenbräu.jpg",
    origin: "Matten bei Interlaken, Berner Oberland",
    since: "1866",
    description:
      "Gebraut mit frischem Jungfrau-Region-Wasser im Herzen des Berner Oberlandes. Das Rugenbräu Premium Lager verbindet die natürliche Reinheit der Alpen mit handwerklicher Braukunst.",
    tasting:
      "Klar, goldgelb und brillant. Feines Malzaroma, ausgewogene Hopfenbittere und ein markanter, frischer Charakter. Das Bergwasser verleiht dem Bier eine besondere mineralische Frische.",
    pairing: "Älplermagronen, Bergkäse, Grillwürste am Lagerfeuer",
    tags: ["Alpenwasser", "Berner Oberland", "Premium", "Seit 1866"],
  },
  {
    id: "locher-appenzeller-weissbier",
    name: "Appenzeller Weissbier",
    brewery: "Brauerei Locher AG",
    style: "Hefeweizen",
    abv: 5.3,
    ibu: 12,
    color: "Trübes Goldorange",
    image: "/images/classic-weissbier.jpg",
    origin: "Appenzell",
    since: "1886",
    description:
      "Das Appenzeller Weissbier von Locher ist ein treuer Vertreter der bayerischen Weizenbier-Tradition, interpretiert mit Schweizer Rohstoffen und Appenzeller Braugeist.",
    tasting:
      "Trüb goldfarben mit reichhaltigem Schaum. Klassische Bananennoten und Nelkengewürz aus der Weizenhefe. Cremiger Körper, milde Säure und ein erfrischend langer Abgang.",
    pairing: "Gebackener Camembert, Obstkuchen, heller Wurstsalat",
    tags: ["Hefeweizen", "Traditionell", "Appenzell", "Weizenhefe"],
  },
]

export default function KlassischPage() {
  const strongest = [...klassischBeers].sort((a, b) => b.abv - a.abv)[0]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative bg-mid-brown/50 border-b border-gold/20 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Tradition seit Jahrhunderten
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
              Klassisches Bier
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Die Fundamente der Schweizer Brauereigeschichte – zeitlose Klassiker, die Generation
              für Generation mit Stolz gebraut werden.
            </p>
          </div>
        </section>

        <AgeDisclaimer />

        {/* Strongest highlight */}
        <section className="bg-gold/10 border-b border-gold/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <Award className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-sm font-sans text-foreground/70">
              <span className="text-gold font-semibold">Stärkstes Bier auf dieser Seite:</span>
              {" "}{strongest.name} – {strongest.abv.toFixed(1)}% vol. ({strongest.brewery})
            </p>
          </div>
        </section>

        {/* Beer list */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {klassischBeers.map((beer, index) => (
              <article
                id={beer.id}
                key={beer.id}
                className="grid md:grid-cols-2 gap-10 items-start scroll-mt-24"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={beer.image}
                    alt={beer.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-dark-brown/80 backdrop-blur border border-gold/40 px-4 py-2">
                    <span className="text-gold font-serif text-2xl font-semibold">
                      {beer.abv.toFixed(1)}% vol.
                    </span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {beer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-sans tracking-wider text-copper border border-copper/30 bg-copper/10 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gold/60 text-xs tracking-widest uppercase font-sans mb-1">
                    {beer.brewery}
                  </p>
                  <h2 className="font-serif text-3xl text-cream mb-2">{beer.name}</h2>
                  <div className="flex flex-wrap gap-4 text-sm font-sans text-foreground/50 mb-6">
                    <span className="text-copper">{beer.style}</span>
                    <span>IBU: {beer.ibu}</span>
                    <span>{beer.color}</span>
                    <span>Seit {beer.since}</span>
                    <span>{beer.origin}</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4">{beer.description}</p>
                  <div className="border-l-2 border-gold/30 pl-4 mb-4">
                    <p className="text-xs tracking-widest uppercase font-sans text-gold/60 mb-1">
                      Geschmacksprofil
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed">{beer.tasting}</p>
                  </div>
                  <div className="border-l-2 border-copper/30 pl-4">
                    <p className="text-xs tracking-widest uppercase font-sans text-copper/60 mb-1">
                      Speiseempfehlung
                    </p>
                    <p className="text-foreground/60 text-sm">{beer.pairing}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

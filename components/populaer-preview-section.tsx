import Link from "next/link"
import BeerCard, { type Beer } from "./beer-card"

const populaerBeers: Beer[] = [
  {
    id: "quollfrisch",
    name: "Quöllfrisch Naturtrüb",
    brewery: "Brauerei Locher",
    style: "Natürlich Trübes Lager",
    abv: 4.8,
    image: "/images/popular-quollfrisch.jpg",
    description:
      "Das beliebteste Bier des Appenzellerlands. Natürlich trüb, frisch und lebendig mit feiner Hefe. Ein Bier, das die Alpennatur in jedem Schluck widerspiegelt und bei Jung und Alt gleichermassen beliebt ist.",
    origin: "Appenzell",
  },
  {
    id: "calanda-weizen",
    name: "Calanda Hefe-Weizen",
    brewery: "Calanda Bräu",
    style: "Hefeweizen",
    abv: 5.2,
    image: "/images/popular-calanda-weizen.jpg",
    description:
      "Das bekannteste Schweizer Weizenbier aus Chur. Trüb goldfarben mit üppigem Schaum und typischen Bananennoten. Erfrischend, leicht und perfekt für warme Sommertage in den Alpen.",
    origin: "Chur, Graubünden",
  },
  {
    id: "monstein-bier",
    name: "Monstein Hell",
    brewery: "Biervision Monstein",
    style: "Helles Lager",
    abv: 5.2,
    image: "/images/popular-regional.jpg",
    description:
      "Gebraut auf 1625 Metern über Meer – die höchstgelegene Brauerei der Schweiz. Ein klares, helles Lager mit feiner Malzsüsse und alpinem Charakter. Ein Muss für jeden Bierliebhaber in Graubünden.",
    origin: "Monstein, Graubünden",
  },
]

export default function PopulaerPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Von den Schweizern geliebt
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Populäres Bier
            </h2>
          </div>
          <Link
            href="/populaer"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 transition-colors px-6 py-3 text-sm tracking-widest uppercase font-sans"
          >
            Alle populären Biere →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {populaerBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} category="populaer" />
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AgeDisclaimer from "@/components/age-disclaimer"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Populäres Bier – Schweizer Bier Guide",
  description:
    "Die beliebtesten Schweizer Biere: Quöllfrisch, Calanda, Monstein und mehr. Regionale Lieblinge aus allen Teilen der Schweiz.",
}

const populaerBeers = [
  {
    id: "quollfrisch",
    name: "Quöllfrisch Naturtrüb",
    brewery: "Brauerei Locher AG",
    style: "Naturtrübes Lager",
    abv: 4.8,
    ibu: 16,
    color: "Trübes Goldgelb",
    image: "/images/popular-quollfrisch.jpg",
    origin: "Appenzell",
    description:
      "Das Quöllfrisch ist das Flaggschiff der Brauerei Locher und eines der bekanntesten Schweizer Biere. Naturtrüb, ungefiltert und ohne Pasteurisierung – ein ehrliches, frisches Bier aus dem Alpstein.",
    tasting:
      "Naturtrüb goldgelb mit zartem Hefebödem. Frischer, leicht malziger Antrunk mit feiner Hefe-Note und dezenter Hopfenbittere. Lebendig am Gaumen, mit einem sauberen, erfrischenden Abgang.",
    pairing: "Appenzeller Käse, St. Galler Bratwurst, Rösti",
    tags: ["Ungefiltert", "Naturtrüb", "Appenzeller Liebling", "#1 Ostschweiz"],
  },
  {
    id: "calanda-weizen",
    name: "Calanda Hefe-Weizen",
    brewery: "Calanda Bräu AG",
    style: "Hefeweizen",
    abv: 5.2,
    ibu: 13,
    color: "Trübes Goldorange",
    image: "/images/popular-calanda-weizen.jpg",
    origin: "Chur, Kanton Graubünden",
    description:
      "Das Calanda Hefe-Weizen ist das beliebteste Weizenbier der Deutschschweiz. Gebraut aus reinstem Bündner Bergwasser verleiht dieses Hefeweizen einen unverwechselbaren alpinen Charakter.",
    tasting:
      "Trüb goldfarben mit dichtem, cremigem Schaum. Ausgeprägte Bananennoten und Gewürzaroma der Weizenhefe, gepaart mit einem erfrischenden Zitruston. Voller, runder Körper.",
    pairing: "Capuns Bündner Art, Zitronenkuchen, Sommergemüse vom Grill",
    tags: ["Hefeweizen", "Graubünden", "Bergwasser", "Bestseller"],
  },
  {
    id: "monstein-hell",
    name: "Monstein Hell",
    brewery: "Biervision Monstein AG",
    style: "Helles Lager",
    abv: 5.2,
    ibu: 22,
    color: "Klares Goldgelb",
    image: "/images/popular-regional.jpg",
    origin: "Monstein, Kanton Graubünden (1625 m ü. M.)",
    description:
      "Monstein ist die höchstgelegene Brauerei der Schweiz – auf 1625 Metern über Meer. Das Monstein Hell wird aus reinem Hochgebirgswasser und erlesenen Rohstoffen gebraut und hat eine treue Fangemeinde.",
    tasting:
      "Klar, brillant goldgelb. Feine Malzsüsse mit ausgewogener Hopfenbittere. Der alpine Charakter zeigt sich im mineralisch-frischen Antrunk und einem langen, sauberen Abgang.",
    pairing: "Bündner Nusstorte, Ziegenkäse, gegrillte Bergforelle",
    tags: ["Höchste Brauerei der Schweiz", "1625 m ü. M.", "Graubünden", "Kult"],
  },
  {
    id: "falken-premium",
    name: "Falken Premium",
    brewery: "Falken Brauerei AG",
    style: "Premium Lager",
    abv: 5.0,
    ibu: 20,
    color: "Helles Goldgelb",
    image: "/images/classic-lager.jpg",
    origin: "Schaffhausen",
    description:
      "Die Falken Brauerei, gegründet 1441 in Schaffhausen, ist eine der ältesten Brauereien der Schweiz. Das Falken Premium ist ein zeitloses Bier, das regionalen Stolz und handwerkliche Qualität vereint.",
    tasting:
      "Klar und goldgelb mit feinem Schaum. Ausgewogenes Spiel zwischen Malzsüsse und Hopfenbittere. Frisch, leicht und gut ausbalanciert – ein Bier für jeden Anlass.",
    pairing: "Schaffhauser Bölle (Zwiebeln), Fischgerichte vom Rhein, helles Brot",
    tags: ["Seit 1441", "Schaffhausen", "Älteste Brauerei", "Premium"],
  },
  {
    id: "öufi-original",
    name: "Öufi Bier",
    brewery: "Brauerei Öufi",
    style: "Helles Lager",
    abv: 5.0,
    ibu: 18,
    color: "Klares Bernsteingelb",
    image: "/images/popular-oufi.jpg",
    origin: "Solothurn",
    description:
      "Der «Öufi» – der Solothurner Dialektausdruck für «der 11.» – ist das inoffizielle Bier der 11-Türme-Stadt Solothurn. Ein regionales Kultbier, das die Eigenheit und den Stolz der Stadt verkörpert.",
    tasting:
      "Leicht trüb mit goldenem Schimmer. Frisch, lebendig und unkompliziert. Ausgewogene Malzbase mit feiner Hopfenbittere und einem sauberen Abgang. Ideal für entspannte Abende.",
    pairing: "Solothurner Wurstsalat, Bauernbrot, Flaischkäse",
    tags: ["Kultbier", "Solothurn", "Regional", "11 Türme"],
  },
  {
    id: "gurten-bier",
    name: "Gurten Bier",
    brewery: "Gurten – Biermanufaktur",
    style: "Helles Lager",
    abv: 4.8,
    ibu: 19,
    color: "Goldgelb",
    image: "/images/popular-gurten.jpg",
    origin: "Bern",
    description:
      "Das Berner Kulturbier schlechthin: Gurten wird nach dem Berner Hausberg benannt und ist das inoffizielle Bier der Bundesstadt. Bei Konzerten, Stadtfesten und in Berner Beizen unentbehrlich.",
    tasting:
      "Frisch, klar und vollmundig. Brot- und Getreidearoma mit ausgewogener Bittere. Mittlerer Körper, gut ausbalanciert – ein unkomplizierter Begleiter für die urbane Berner Lebensart.",
    pairing: "Bernerplatte, Bärner Zipfel, Fondue aus dem Emmental",
    tags: ["Berner Kulturbier", "Bundesstadt", "Gurten Festival", "Urban"],
  },
]

export default function PopulaerPage() {
  const strongest = [...populaerBeers].sort((a, b) => b.abv - a.abv)[0]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="relative bg-mid-brown/50 border-b border-gold/20 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Von den Schweizern geliebt
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
              Populäres Bier
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Regionale Lieblinge und landesweit geliebte Klassiker – die Biere, die das
              Herz der Schweizer Bierkultur ausmachen.
            </p>
          </div>
        </section>

        <AgeDisclaimer />

        <section className="bg-gold/10 border-b border-gold/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <Star className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-sm font-sans text-foreground/70">
              <span className="text-gold font-semibold">Stärkstes Bier auf dieser Seite:</span>
              {" "}{strongest.name} – {strongest.abv.toFixed(1)}% vol. ({strongest.brewery})
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {populaerBeers.map((beer, index) => (
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

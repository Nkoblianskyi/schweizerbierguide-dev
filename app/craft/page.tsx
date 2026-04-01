import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AgeDisclaimer from "@/components/age-disclaimer"
import { Hop } from "lucide-react"

export const metadata: Metadata = {
  title: "Craft Biere – Schweizer Bier Guide",
  description:
    "Entdecken Sie die besten Schweizer Craft-Biere: von imperialen Stouts bis zu fruchtigen IPAs. Mit Alkoholgehalt, Brauerei und ausführlichen Beschreibungen.",
}

const craftBeers = [
  {
    id: "bfm-abbaye",
    name: "Abbaye de Saint Bon-Chien",
    brewery: "BFM (Brasserie des Franches-Montagnes)",
    style: "Barleywine / Wild Ale",
    abv: 11.0,
    ibu: 25,
    color: "Tiefes Kastanienbraun",
    image: "/images/craft-bfm-abbaye.jpg",
    origin: "Saignelégier, Kanton Jura",
    founded: "1997",
    description:
      "Das Abbaye de Saint Bon-Chien ist das bekannteste und stärkste Craft-Bier der Schweiz. Dieses komplexe Barleywine wird jährlich in limitierter Auflage abgefüllt und von Bierkennern weltweit gesucht.",
    tasting:
      "Komplexe Aromen von Karamell, Trockenfrüchten (Pflaume, Feige, Rosine), einer dezenten Holznote und einer milden Säure durch wilde Hefestämme. Am Gaumen vollmundig mit einem langen, warmen Abgang.",
    pairing: "Gereifter Käse, dunkle Schokolade, Wildgerichte",
    tags: ["Stärkstes Schweizer Craft-Bier", "Limitierte Edition", "Wildfermentiert", "Preisgekrönt"],
  },
  {
    id: "bad-attitude-krampus",
    name: "Krampus Imperial Stout",
    brewery: "Bad Attitude Brewing",
    style: "Imperial Stout",
    abv: 10.5,
    ibu: 65,
    color: "Jet-Schwarz mit braunem Schaum",
    image: "/images/craft-krampus-stout.jpg",
    origin: "Balerna, Kanton Tessin",
    founded: "2010",
    description:
      "Bad Attitude Brewing aus dem Tessin produziert seit Jahren eines der beeindruckendsten Stouts der Schweiz. Der Krampus Imperial Stout ist ein Meisterwerk der Dunkelbrauerei.",
    tasting:
      "Intensives Röstaroma mit Espresso, Bitterschokolade, Vanille und einem Hauch von Whisky. Am Gaumen samtig und vollmundig, mit einer angenehmen Wärme im Abgang. Ausgezeichnete Schaumstabilität.",
    pairing: "Tiramisu, kräftiger Blauschimmelkäse, Rinderschmorbraten",
    tags: ["Imperial Stout", "Hochprozentiger Craft", "Tessiner Brauerei", "Preisgekrönt"],
  },
  {
    id: "turbinenbräu-ipa",
    name: "Zürcher IPA",
    brewery: "Turbinenbräu",
    style: "India Pale Ale",
    abv: 6.5,
    ibu: 55,
    color: "Klares Goldorange",
    image: "/images/craft-ipa.jpg",
    origin: "Zürich",
    founded: "1997",
    description:
      "Die Turbinenbräu ist eine der ältesten Craft-Brauereien der Schweiz, gegründet im Zürcher Industriequartier. Ihr IPA ist ein Botschafter der Zürcher Craftbier-Szene.",
    tasting:
      "Ausgewogene Hopfenbitterkeit mit Aromen von Grapefruit, Kiefer und tropischen Früchten. Malziges Fundament mit mittlerem Körper und trockenem Abgang. Frisch, lebendig und unverkennbar urban.",
    pairing: "Würzige Burger, Hühnercurry, gereifter Gouda",
    tags: ["IPA", "Stadtzürcher Brauerei", "Hopfenbetont", "Urban"],
  },
  {
    id: "bfm-la-semeuse",
    name: "La Semeuse",
    brewery: "BFM (Brasserie des Franches-Montagnes)",
    style: "Coffee Stout",
    abv: 7.6,
    ibu: 40,
    color: "Tiefes Schwarzbraun",
    image: "/images/craft-la-semeuse.jpg",
    origin: "Saignelégier, Kanton Jura",
    founded: "1997",
    description:
      "In Zusammenarbeit mit der Kaffeerösterei La Semeuse aus Le Locle entstand dieses einzigartige Coffee Stout. Es kombiniert die Brauereitradition des Juras mit der Kaffeeleidenschaft des Neuenburger Juras.",
    tasting:
      "Intensiver Kaffeearoma dominiert den ersten Eindruck. Am Gaumen: Röstmalz, Espresso, Zartbitterschokolade und eine angenehme Hopfenbittere. Mittlerer bis voller Körper, trockener Abgang.",
    pairing: "Kaffeekuchen, Brownies, dunkle Pralinés",
    tags: ["Coffee Stout", "Kollaboration", "Jura", "Kaffeearomat"],
  },
  {
    id: "oeufi-hell",
    name: "Öufi Hell",
    brewery: "Brauerei Öufi",
    style: "Helles Lager (Craft)",
    abv: 5.0,
    ibu: 18,
    color: "Helles Goldgelb",
    image: "/images/craft-oufi-hell.jpg",
    origin: "Solothurn",
    founded: "2008",
    description:
      "Die Solothurner Brauerei Öufi bringt das klassische Helle im Craft-Format. Handwerklich gebraut, mit natürlicher Carbonisierung und ohne Pasteurisierung – das Öufi Hell zeigt, dass Craft auch subtil kann.",
    tasting:
      "Sauber, frisch und ausgewogen. Feine Malzsüsse mit dezenter Hopfenbittere und einem blumigen Aroma. Leichter Körper, perfekt erfrischend für warme Sommertage.",
    pairing: "Gegrilltes Gemüse, leichte Salate, Gruyère",
    tags: ["Helles Craft", "Solothurn", "Natürlich vergoren", "Ungefiltert"],
  },
  {
    id: "chopfab-dock",
    name: "Dock IPA",
    brewery: "Chopfab-Boxer Bier",
    style: "Session IPA",
    abv: 4.5,
    ibu: 35,
    color: "Helles Bernstein",
    image: "/images/craft-amber.jpg",
    origin: "Winterthur",
    founded: "2013",
    description:
      "Chopfab aus Winterthur ist eine der bekanntesten Schweizer Craft-Brauereien. Das Dock Session IPA beweist, dass niedrigerer Alkoholgehalt und grosses Hopfenaroma kein Widerspruch sind.",
    tasting:
      "Fruchtige Hopfenaromen von Zitrone und Litschi. Leichter Körper, gut trinkbar, mit einer angenehmen Bittere. Perfekt für einen langen Abend mit Freunden.",
    pairing: "Quesadillas, Frischkäse, Meeresfrüchte",
    tags: ["Session IPA", "Winterthur", "Trinkfreudig", "Ausgewogen"],
  },
]

export default function CraftPage() {
  const strongest = [...craftBeers].sort((a, b) => b.abv - a.abv)[0]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative bg-mid-brown/50 border-b border-gold/20 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
              Handwerklich gebraut
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
              Craft Biere
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Die Schweizer Craft-Beer-Szene boomt. Entdecken Sie die besten handwerklich
              gebrauten Biere – von starken Stouts bis zu fruchtigen IPAs.
            </p>
          </div>
        </section>

        <AgeDisclaimer />

        {/* Strongest highlight */}
        <section className="bg-gold/10 border-b border-gold/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <Hop className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-sm font-sans text-foreground/70">
              <span className="text-gold font-semibold">Stärkstes Bier auf dieser Seite:</span>
              {" "}{strongest.name} – {strongest.abv.toFixed(1)}% vol. ({strongest.brewery})
            </p>
          </div>
        </section>

        {/* Beer list */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {craftBeers.map((beer, index) => (
              <article
                id={beer.id}
                key={beer.id}
                className="grid md:grid-cols-2 gap-10 items-start scroll-mt-24"
              >
                {/* Image */}
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
                  {/* ABV overlay */}
                  <div className="absolute bottom-4 left-4 bg-dark-brown/80 backdrop-blur border border-gold/40 px-4 py-2">
                    <span className="text-gold font-serif text-2xl font-semibold">
                      {beer.abv.toFixed(1)}% vol.
                    </span>
                  </div>
                </div>

                {/* Info */}
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

import { Hop, Award, MapPin, Clock } from "lucide-react"

const stats = [
  { icon: Hop, value: "1200+", label: "Biere in der Schweiz" },
  { icon: Award, value: "300+", label: "Schweizer Brauereien" },
  { icon: MapPin, value: "26", label: "Kantone mit Braukultur" },
  { icon: Clock, value: "Seit 1800", label: "Brauereigeschichte" },
]

export default function InfoSection() {
  return (
    <section className="py-24 bg-mid-brown/40" id="info">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-3">
            Über die Schweizer Bierkultur
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 text-balance">
            Eine Tradition mit Geschichte
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed text-pretty">
            Die Schweiz blickt auf eine reiche Brauertradition zurück. Von den grossen
            Nationalbrauereien bis hin zu kleinen, innovativen Craft-Brauereien – das Schweizer
            Bierhandwerk erlebt heute eine Renaissance. Regionale Rohstoffe, alpines Quellwasser
            und jahrhundertealtes Wissen fliessen in jedes Glas ein.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-gold/20 p-6 text-center hover:border-gold/50 transition-colors"
            >
              <stat.icon className="w-7 h-7 text-gold mx-auto mb-3" />
              <p className="font-serif text-3xl text-gold mb-1">{stat.value}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two column text */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">
              Das Schweizer Reinheitsgebot
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Obwohl die Schweiz kein eigenes nationales Reinheitsgebot kennt, orientieren sich
              viele Brauereien an traditionellen Qualitätsstandards. Wasser, Malz, Hopfen und
              Hefe – diese vier Zutaten bilden das Fundament jedes authentischen Schweizer Biers.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Die klare Bergluft und das mineralreiche Quellwasser der Alpen verleihen
              Schweizer Bieren einen unverwechselbaren Charakter, der weltweit geschätzt wird.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">
              Die Craft-Beer-Revolution
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Seit den 2010er-Jahren erlebt die Schweiz einen echten Craft-Beer-Boom. Junge
              Braumeister experimentieren mit wilden Hefestämmen, lokalen Kräutern und
              internationalen Stilen – von IPAs über Sauerbiere bis hin zu imperialen Stouts.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Heute gibt es in der Schweiz über 300 registrierte Brauereien – so viele wie
              noch nie in der Geschichte des Landes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

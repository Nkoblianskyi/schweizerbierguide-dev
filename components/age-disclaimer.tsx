import { AlertTriangle } from "lucide-react"

export default function AgeDisclaimer() {
  return (
    <section className="bg-gold/10 border-y border-gold/30 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1">
            <p className="text-gold font-serif text-base font-semibold mb-1">
              Hinweis: Nur für Erwachsene ab 18 Jahren
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Diese Website enthält Informationen über alkoholische Getränke. Der Zugang und die
              Nutzung dieser Website sind ausschliesslich Personen ab 18 Jahren gestattet.
              Alkoholkonsum in übermässigen Mengen schadet Ihrer Gesundheit. Bitte geniessen Sie
              Bier verantwortungsbewusst. Kein Alkohol für Schwangere. Nicht für den Verkauf an
              Minderjährige bestimmt. &#40;Alkohol: 18+&#41;
            </p>
          </div>
          <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold/60 bg-gold/10">
            <span className="text-gold font-serif font-bold text-base">18+</span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface MaxAbvHighlightProps {
  abv: number
  beerName: string
  brewery: string
  /** Volle Hinweistexte wie auf der Referenz — auf Übersichtsseiten meist aus. */
  showLegal?: boolean
  /** Kontextzeile unter dem Prozentwert */
  contextLabel?: string
}

export default function MaxAbvHighlight({
  abv,
  beerName,
  brewery,
  showLegal = true,
  contextLabel,
}: MaxAbvHighlightProps) {
  const abvFormatted = abv % 1 === 0 ? abv.toFixed(0) : abv.toFixed(1)

  return (
    <section
      className="border-y border-gold/30 bg-mid-brown py-8 px-6 shadow-[inset_0_1px_0_0_oklch(0.70_0.14_65/0.12)] md:py-10"
      aria-label="Maximaler Alkoholgehalt in dieser Übersicht"
    >
      <div className="mx-auto max-w-7xl text-left">
        <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.28em] text-gold">
          Maximalwert
        </p>
        <p className="font-serif text-5xl leading-none text-cream md:text-6xl lg:text-7xl">
          {abvFormatted}
          <span className="ml-2 text-4xl md:text-5xl lg:text-6xl">% vol</span>
        </p>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-cream/90 md:text-base">
          {contextLabel ?? "Stärkstes Bier in dieser Übersicht:"}{" "}
          <span className="text-cream">{beerName}</span>
          <span className="text-cream/70"> — {brewery}</span>
        </p>
        {showLegal ? (
          <>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/90 md:text-[0.9375rem]">
              Diese Seite ist ein{" "}
              <strong className="font-semibold text-cream">Informationsangebot</strong> über
              alkoholische Getränke (kein Verkauf, keine Bestellmöglichkeit).
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-[0.9375rem]">
              <span className="font-sans font-semibold tracking-wide text-gold">18+</span>
              <span className="text-foreground/55">
                {" "}
                — Dieser Alkohol ist nur für Personen ab 18 Jahren. Bitte trinken Sie
                verantwortungsbewusst.
              </span>
            </p>
          </>
        ) : null}
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("sbg-cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("sbg-cookie-consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("sbg-cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-gold/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-foreground/70 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
              Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies gemäss
              unserer{" "}
              <Link href="/cookies" className="text-gold hover:underline">
                Cookie-Richtlinie
              </Link>{" "}
              und{" "}
              <Link href="/datenschutz" className="text-gold hover:underline">
                Datenschutzrichtlinie
              </Link>{" "}
              zu.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="text-foreground/50 hover:text-foreground text-sm font-sans px-4 py-2 border border-border hover:border-foreground/30 transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="bg-gold text-dark-brown text-sm font-sans font-semibold px-6 py-2 hover:bg-gold-light transition-colors"
            >
              Akzeptieren
            </button>
            <button
              onClick={decline}
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Banner schliessen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

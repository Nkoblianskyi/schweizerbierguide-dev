"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Beer } from "lucide-react"

const navLinks = [
  { href: "/craft", label: "Craft Bier" },
  { href: "/klassisch", label: "Klassisches Bier" },
  { href: "/populaer", label: "Populäres Bier" },
  { href: "/ueber-uns", label: "Über Uns" },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-brown/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Beer className="w-6 h-6 text-gold" />
          <span className="font-serif text-xl text-gold tracking-wide">
            Schweizer Bier Guide
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-gold transition-colors tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-brown border-t border-gold/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-foreground/80 hover:text-gold transition-colors tracking-widest uppercase text-sm py-2 border-b border-gold/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

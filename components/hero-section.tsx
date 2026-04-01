"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Schweizer Brauerei in den Alpen"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Dark vignette: strong at bottom, lighter at top-right where image breathes */}
        <div className="absolute inset-0 bg-dark-brown/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,oklch(0.09_0.02_60/0.6)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-dark-brown via-dark-brown/70 to-transparent" />
      </div>

      {/* Top-left stamp */}
      <div className="relative z-10 pt-32 px-6 md:px-12 lg:px-20">
        <p className="text-gold/70 font-sans text-xs tracking-[0.5em] uppercase">
          Schweizerbierguide.com — Gegründet in der Schweiz
        </p>
      </div>

      {/* Main content — bottom anchored */}
      <div className="relative z-10 mt-auto px-6 md:px-12 lg:px-20 pb-16">

        {/* Oversized headline — bleeds intentionally */}
        <div className="overflow-hidden mb-6">
          <h1
            className="font-serif leading-none text-cream select-none"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)", letterSpacing: "-0.02em" }}
          >
            Schweizer
          </h1>
        </div>
        <div className="overflow-hidden mb-10 -mt-4">
          <h1
            className="font-serif leading-none select-none text-outlined-gold"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)", letterSpacing: "-0.02em" }}
          >
            Bier Guide
          </h1>
        </div>

        {/* Two-column bottom row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0">

          {/* Left — descriptor */}
          <div className="md:w-1/2 md:pr-12">
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="text-foreground/70 font-sans text-sm md:text-base leading-relaxed max-w-sm text-pretty">
              Entdecken Sie die reiche Bierkultur der Schweiz — von handwerklich
              gebrauten Craft-Bieren bis hin zu klassischen Regionalbieren, die
              unsere Brautradition seit Jahrhunderten prägen.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px self-stretch bg-gold/20 mx-8" />

          {/* Right — category links */}
          <div className="md:flex-1 flex flex-col gap-3">
            <p className="text-gold/50 font-sans text-xs tracking-[0.4em] uppercase mb-1">
              Kategorien
            </p>
            {[
              { label: "Craft Biere", href: "/craft", sub: "IPA · Stout · Weizen" },
              { label: "Klassisch", href: "/klassisch", sub: "Lager · Dunkel · Märzen" },
              { label: "Populär", href: "/populaer", sub: "Quöllfrisch · Gurten · Warteck" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between border-b border-gold/15 pb-3 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-cream text-xl group-hover:text-gold transition-colors">
                    {item.label}
                  </span>
                  <span className="font-sans text-xs text-foreground/40 tracking-wider hidden sm:inline">
                    {item.sub}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right year badge */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 text-right">
        <span
          className="font-serif text-gold/20 select-none"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}
        >
          2026
        </span>
      </div>
    </section>
  )
}

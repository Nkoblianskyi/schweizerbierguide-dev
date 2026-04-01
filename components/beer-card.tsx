import Image from "next/image"
import Link from "next/link"

export interface Beer {
  id: string
  name: string
  brewery: string
  style: string
  abv: number
  image: string
  description: string
  origin: string
}

interface BeerCardProps {
  beer: Beer
  category: "craft" | "klassisch" | "populaer"
}

export default function BeerCard({ beer, category }: BeerCardProps) {
  return (
    <Link
      href={`/${category}#${beer.id}`}
      className="group block bg-card border border-gold/20 hover:border-gold/60 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={beer.image}
          alt={beer.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* ABV badge */}
        <div className="absolute top-3 right-3 bg-dark-brown/80 backdrop-blur-sm border border-gold/40 px-2 py-1">
          <span className="text-gold font-sans text-xs font-semibold tracking-wider">
            {beer.abv.toFixed(1)}% vol.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gold/60 text-xs tracking-widest uppercase font-sans mb-1">
          {beer.brewery}
        </p>
        <h3 className="font-serif text-xl text-cream mb-1 group-hover:text-gold transition-colors">
          {beer.name}
        </h3>
        <p className="text-copper text-xs tracking-wider uppercase font-sans mb-3">
          {beer.style}
        </p>
        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
          {beer.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-foreground/40 text-xs font-sans">
            {beer.origin}
          </span>
          <span className="text-gold text-xs font-sans tracking-widest uppercase group-hover:translate-x-1 transition-transform">
            Mehr lesen →
          </span>
        </div>
      </div>
    </Link>
  )
}

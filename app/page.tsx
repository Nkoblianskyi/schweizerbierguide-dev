import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AgeDisclaimer from "@/components/age-disclaimer"
import InfoSection from "@/components/info-section"
import CraftPreviewSection from "@/components/craft-preview-section"
import ClassicPreviewSection from "@/components/classic-preview-section"
import PopulaerPreviewSection from "@/components/populaer-preview-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AgeDisclaimer />
        <InfoSection />
        <CraftPreviewSection />
        <ClassicPreviewSection />
        <PopulaerPreviewSection />
        <AboutSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

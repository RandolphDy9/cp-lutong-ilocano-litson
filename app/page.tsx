import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MenuSection from "@/components/menu-section"
import ReviewsSection from "@/components/reviews-section"
import VideoSection from "@/components/video-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

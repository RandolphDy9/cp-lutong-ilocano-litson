"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Utensils } from "lucide-react"

export default function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-background.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 mx-auto">
        <div className="animate-fade-in-up bg-black/75 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg inline-block mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center">
            Lutong Ilocano
            <b className="block text-orange-400 sm:ml-3 ml-0 sm:mt-0 mt-2">Litson</b>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Ilocano cuisine with our signature roasted pig and traditional favorites 🇵🇭
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer font-sans text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
              View Our Menu
            </Button>
            <Button
              onClick={() => window.open("https://www.facebook.com/lutong.ilocano.71", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-sans text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
              <span>Follow Us On Facebook</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

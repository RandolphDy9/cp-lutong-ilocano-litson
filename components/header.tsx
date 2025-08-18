"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/litson-logo.jpg"
              alt="Lutong Ilocano Litson Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              priority
            />
            <div>
              <h1 className="font-serif text-xl font-bold text-orange-600">Lutong Ilocano</h1>
              <p className="text-sm text-gray-600 font-sans">LITSON</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-sans text-gray-700 hover:text-orange-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-sans text-gray-700 hover:text-orange-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="font-sans text-gray-700 hover:text-orange-600 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="font-sans text-gray-700 hover:text-orange-600 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-100 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="font-sans text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-sans text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="font-sans text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="font-sans text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-sans text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

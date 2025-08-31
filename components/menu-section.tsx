"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "@/components/ui/image-modal"
import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export default function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const menuItems = [
    {
      image: "/images/food-1.jpg",
    },
    {
      image: "/images/food-2.jpg",
    },
    {
      image: "/images/food-3.jpg",
    },
    {
      image: "/images/food-4.jpg",
    },
    {
      image: "/images/food-5.jpg",
    },
    {
      image: "/images/food-6.jpg",
    },
  ]

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="menu" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-20 left-16 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-20 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-amber-200/25 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">🍽️ Our Menu 🍲</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Ilocano dishes, from appetizers to main courses, all prepared with traditional
            recipes and fresh ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Appetizers & Main Dishes */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 cursor-pointer group">
            <Image
              src="/images/litson-menu-2.jpg"
              alt="Appetizers and Main Dishes Menu"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick("/images/litson-menu-2.jpg", "Appetizers and Main Dishes Menu")}
            />
            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">Click to enlarge</p>
            </div>
          </div>

          {/* Fish, Veggies & Noodles */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 cursor-pointer group">
            <Image
              src="/images/litson-menu.jpg"
              alt="Fish, Vegetables and Noodles Menu"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick("/images/litson-menu.jpg", "Fish, Vegetables and Noodles Menu")}
            />
            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">Click to enlarge</p>
            </div>
          </div>
        </div>

        {/* Whole Litson Pricing */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Litson Pricing 🐷</h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly roasted whole pigs, perfect for family gatherings, parties, and celebrations. Each litson is carefully prepared Ilocano-style to bring out the rich, savory flavors and signature crispy skin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 cursor-pointer group">
              <Image
                src="/images/whole.jpeg"
                alt="Whole Litson Pricing"
                width={1200}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick("/images/whole.jpeg", "Whole Litson Pricing")}
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-600">Click to enlarge</p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 cursor-pointer group">
              <Image
                src="/images/ulo.jpeg"
                alt="Ulo Litson Pricing"
                width={1200}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick("/images/ulo.jpeg", "Ulo Litson Pricing")}
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-600">Click to enlarge</p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 cursor-pointer group">
              <Image
                src="/images/belly.jpeg"
                alt="Belly Litson Pricing"
                width={1200}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick("/images/belly.jpeg", "Belly Litson Pricing")}
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-600">Click to enlarge</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">✨ Popular Dishes You&apos;ll Love</h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our most requested dishes, perfect for any meal or occasion.
            </p>
          </div>
          <Carousel>
            <CarouselContent>
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-60">
                      <Image src={item.image || "/placeholder.svg"} alt={item.image} fill className="object-cover" />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </section>
  )
}

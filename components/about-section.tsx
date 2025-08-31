import { Heart, Award, Users } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="absolute top-10 sm:top-16 right-8 sm:right-20 w-16 h-16 sm:w-28 sm:h-28 bg-orange-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-24 left-8 sm:left-16 w-20 h-20 sm:w-36 sm:h-36 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 sm:w-20 sm:h-20 bg-orange-300/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">🍽️ About Lutong Ilocano Litson 🥄</h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our recipes are a cherished part of our heritage, perfected over decades to ensure every bite is a celebration of Filipino culture. 🇵🇭
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch">
            {/* Content Column */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center space-x-8 mb-8">
                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm font-semibold text-gray-700">Made with Love</span>
                  <span className="font-sans text-xs text-gray-500">Every Single Day</span>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm font-semibold text-gray-700">Authentic Recipes</span>
                  <span className="font-sans text-xs text-gray-500">Generations Old</span>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm font-semibold text-gray-700">Family Tradition</span>
                  <span className="font-sans text-xs text-gray-500">Proudly Filipino</span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="font-sans text-base text-gray-600 leading-relaxed">
                  Welcome to Lutong Ilocano Litson, where we specialize in authentic Ilocano cuisine and expertly roasted pig. Our menu features traditional favorites like Dinuguan, Pork Sisig, Bagnet, and more—all made with the freshest ingredients to bring you the rich, savory flavors of the Philippines. We carefully package every order with love and tradition, ensuring a delicious takeout experience.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                  <p className="font-sans text-base text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold text-orange-700">Our Promise:</span> We take pride in our takeout
                    service, carefully packaging each order to preserve the authentic flavors and crispy textures that
                    make our litson special.
                  </p>
                  <p className="font-sans text-sm text-gray-600 italic">
                    Every container is filled with love, tradition, and the authentic taste of the Philippines.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 h-full relative overflow-hidden">
                <Image
                  src="/images/all-lechon.jpg"
                  alt="Takeout containers filled with delicious roasted litson and crispy pork pieces"
                  width={1200}
                  height={800}
                  className="w-full h-44 sm:h-full rounded-xl object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md shadow text-center max-w-[90%]">
                  <p className="font-sans text-sm text-gray-600 italic">
                    Our signature litson, perfectly prepared for takeout
                  </p>
                </div>
              </div>

              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-orange-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-14 h-14 sm:w-24 sm:h-24 bg-amber-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

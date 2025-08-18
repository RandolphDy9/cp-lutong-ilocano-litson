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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
            About Lutong Ilocano Litson
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch">
            {/* Content Column */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="flex justify-center gap-6 sm:gap-12 mb-6 sm:mb-8">
                <div className="flex flex-col md:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm text-gray-600">Made with Love</span>
                </div>
                <div className="flex flex-col md:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm text-gray-600">Authentic Recipes</span>
                </div>
                <div className="flex flex-col md:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <span className="font-sans text-sm text-gray-600">Family Tradition</span>
                </div>
              </div>

              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Welcome to <strong>Lutong Ilocano Litson</strong>! We specialize in authentic Ilocano cuisine and expertly roasted pig.
                Our menu features traditional favorites like Dinuguan, Pork Sisig, Bagnet, and our signature roasted
                pig, all made with the freshest ingredients.
              </p>

              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Experience the rich, savory flavors of Ilocano cooking with every bite. Our passion for authentic
                Filipino cuisine drives us to bring you the most delicious and traditional dishes that celebrate our
                heritage.
              </p>

              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                We take pride in our takeout service, carefully packaging each order to preserve the authentic flavors
                and crispy textures that make our litson special. Every container is filled with love and tradition.
              </p>
            </div>

            <div className="relative h-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 h-full relative overflow-hidden">
                <Image
                  src="/images/all-lechon.jpg"
                  alt="Takeout containers filled with delicious roasted litson and crispy pork pieces"
                  width={1200}
                  height={800}
                  className="w-full h-64 sm:h-full rounded-xl object-cover"
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
    </section>
  )
}

"use client"

import { MapPin, Phone, Clock, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience authentic Ilocano cuisine? Get in touch with us to place your order or learn more about
            our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-sans font-semibold text-gray-800 mb-2">Location</h3>
              <p className="font-sans text-gray-600 text-sm">
                23 Garibaldi St
                <br />
                Guelph, ON N1E 5P3
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-sans font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="font-sans text-gray-600 text-sm">
                <a href="tel:+14164358099" className="hover:text-orange-600 transition-colors">
                  (416) 435-8099
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-sans font-semibold text-gray-800 mb-2">Hours</h3>
              <p className="font-sans text-gray-600 text-sm">
                Wed - Sun: 10am - 5pm
                <br />
                <span className="text-red-500">Closed Mon & Tue</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-sans font-semibold text-gray-800 mb-2">Follow Us</h3>
              <Button
                variant="ghost"
                size="sm"
                className="font-sans text-orange-600 hover:text-orange-700 p-0 h-auto"
                onClick={() => window.open("https://www.facebook.com/p/Lutong-ilocano-100068432353836/", "_blank")}
              >
                @Lutong-ilocano
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Find Us on the Map
          </h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Lutong+Ilocano+Litson/@43.5536667,-80.2351855,17z/data=!3m1!4b1!4m6!3m5!1s0x882b9bc5ddbffeb5:0x32d2f151482f146d!8m2!3d43.5536667!4d-80.2326106!16s%2Fg%2F11w20t1n83?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
                  "_blank",
                )
              }
              className="w-full hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-2xl"
            >
              <img
                src="/images/google-map-image.png"
                alt="Google Maps location of Lutong Ilocano Litson at 23 Garibaldi St, Guelph, ON"
                className="w-full h-auto object-cover"
              />
            </button>
            <div className="p-4 text-center">
              <p className="font-sans text-gray-600 text-sm">Click the map to get directions to our restaurant</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="font-sans text-gray-700 font-medium">Takeout Restaurant</span>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-sans text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open("https://www.facebook.com/p/Lutong-ilocano-100068432353836/", "_blank")}
          >
            <Facebook className="w-5 h-5 mr-2" />
            Order Now on Facebook
          </Button>
        </div>
      </div>
    </section>
  )
}

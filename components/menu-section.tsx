export default function MenuSection() {
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Ilocano dishes, from appetizers to main courses, all prepared with traditional
            recipes and fresh ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Appetizers & Main Dishes */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70">
            <img
              src="/images/litson-menu-2.jpg"
              alt="Appetizers and Main Dishes Menu"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Fish, Veggies & Noodles */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70">
            <img
              src="/images/litson-menu.jpg"
              alt="Fish, Vegetables and Noodles Menu"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Whole Litson Pricing */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Whole Litson Pricing
          </h3>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70">
            <img src="/images/liston-prices.jpg" alt="Whole Litson Pricing" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

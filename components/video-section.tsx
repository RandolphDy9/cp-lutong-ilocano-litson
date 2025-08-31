export default function VideoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-24 right-12 w-36 h-36 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-amber-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-200/25 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">🎬 Featured on Katas ng Kusina</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our story and see how we prepare our authentic Ilocano dishes with passion and tradition.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <iframe
              src="https://www.youtube.com/embed/VHq6WgTO7Z4"
              title="Katas ng Kusina - Lutong Ilocano Litson"
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

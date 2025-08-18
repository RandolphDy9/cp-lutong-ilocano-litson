export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img
              src="/images/litson-logo.jpg"
              alt="Lutong Ilocano Litson Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-serif text-lg font-bold text-orange-400">Lutong Ilocano</h3>
              <p className="text-sm text-gray-300 font-sans">LITSON</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-sans text-gray-300 mb-2">Authentic Ilocano Cuisine & Roasted Pig</p>
            <p className="font-sans text-sm text-gray-400">© 2024 Lutong Ilocano Litson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"

const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl text-orange-600">
          Link 21
        </Link>
        <div className="hidden sm:flex space-x-8">
          <Link href="#proposito" className="text-gray-700 hover:text-blue-600">
            Propósito
          </Link>
          <Link href="#conectar" className="text-gray-700 hover:text-blue-600">
            Conectar
          </Link>
          <Link href="#profesionales" className="text-gray-700 hover:text-blue-600">
            Profesionales
          </Link>
          <Link href="#equipo" className="text-gray-700 hover:text-blue-600">
            Equipo
          </Link>
          <Link href="#contacto" className="text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar

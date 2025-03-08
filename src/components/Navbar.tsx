import { Menu, X } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para añadir sombra solo cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Agregar event listener
    window.addEventListener("scroll", handleScroll)

    // Limpiar event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Elemento espaciador para evitar saltos de contenido */}
      <div className="h-16"></div>

      <nav className={`bg-white w-full fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl text-amber-600">
                Link 21
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#proposito" className="text-gray-700 hover:text-blue-600">
                Propósito
              </Link>
              <Link href="#conectar" className="text-gray-700 hover:text-blue-600">
                Conectar
              </Link>
              <Link href="/profesionales" className="text-gray-700 hover:text-blue-600">
                Profesionales
              </Link>
              <Link href="#equipo" className="text-gray-700 hover:text-blue-600">
                Equipo
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-blue-600">
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none" aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#proposito" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Propósito
              </Link>
              <Link href="#conectar" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Conectar
              </Link>
              <Link href="/profesionales" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Profesionales
              </Link>
              <Link href="#equipo" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Equipo
              </Link>
              <Link href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

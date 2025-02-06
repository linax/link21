"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl text-orange-600">
          Link 21
        </Link>
        <div className="hidden sm:flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-blue-600">
            Sobre Nosotros
          </Link>
          <Link href="#professionals" className="text-gray-700 hover:text-blue-600">
            Profesionales
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default function LandingPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email })
      })
      if (response.ok) {
        setEmail("")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[90vh] bg-gradient-to-r from-blue-50 to-red-100">
          <div className="absolute inset-0">
            <Image src="/img-sd.jpeg" alt="Hero" fill className="object-cover mix-blend-overlay" priority />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Link 21 - Comunidad de Apoyo para Síndrome de Down</h1>
              <p className="text-xl text-gray-700 mb-8">Conectando familias con profesionales para una mejor calidad de vida</p>
              <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo electrónico" required className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                <button type="submit" className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Únete a nuestra comunidad
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Familias",
                description: "Encuentra apoyo, recursos y profesionales especializados",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Profesionales",
                description: "Comparte tu experiencia y conocimientos",
                icon: "👨‍⚕️"
              },
              {
                title: "Comunidad",
                description: "Aprende, crece y conecta con otros",
                icon: "🤝"
              }
            ].map(card => (
              <div key={card.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

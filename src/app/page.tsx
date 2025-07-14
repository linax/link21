"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Team from "@/components/Team"
import Footer from "@/components/Footer"

export default function Home() {
  const [userLocation, setUserLocation] = useState("")
  const [selectedAge, setSelectedAge] = useState("")
  const [selectedInterest, setSelectedInterest] = useState("")

  const clients = [
    {
      title: "Apoyo contínuo a Familias",
      description: "Encuentra actividades que le interesen a tu familiar y que se adapten a tu horario.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Aprendizaje continuo",
      description: "Facilitamos el acceso a actividades de aprendizaje que se adapten a sus intereses y les permita continuar creciendo.",
      icon: "🎨"
    },
    {
      title: "Entretención",
      description: "Actividades recreativas que le permitan disfrutar de la vida y socializar con otros en un entorno seguro.",
      icon: "🥳"
    }
  ]

  const activityTypes = [
    { name: "Arte y Creatividad", icon: "🎨", count: "12 actividades" },
    { name: "Deportes y Movimiento", icon: "🏃‍♂️", count: "8 actividades" },
    { name: "Habilidades de Vida", icon: "🏠", count: "15 actividades" },
    { name: "Música y Baile", icon: "🎵", count: "6 actividades" },
    { name: "Cocina", icon: "👨‍🍳", count: "9 actividades" },
    { name: "Jardinería", icon: "🌱", count: "5 actividades" }
  ]

  const handleFindActivities = () => {
    // Aquí puedes pasar los datos de localización y preferencias a la página de actividades
    const params = new URLSearchParams({
      location: userLocation,
      age: selectedAge,
      interest: selectedInterest
    });
    
    window.location.href = `/actividades?${params.toString()}`;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[90vh] bg-gradient-to-r from-blue-50 to-red-100">
          <div className="absolute inset-0">
            <Image src="/maraton2.jpeg" alt="Hero" fill className="object-cover mix-blend-overlay" priority />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-purple-600 mb-6">Después de los 18 sus oportunidades se reducen.  Nosotros las multiplicamos. </h1>
              <p className="text-xl text-gray-600 mb-8">Te creamos un calendario de actividades de aprendizaje, recreación y socialización para adultos con Síndrome de Down que se adaptan a tus horarios.</p>
              <div className="hero-buttons">
                <Link href="#actividades" className="inline-block">
                  <button className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-purple-700 hover:text-white flex items-center transition-colors">Cuéntame más</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <section id="proposito">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Propósito</h2>
            <p>Trabajamos para acercar más oportunidades que promuevan el desarrollo y bienestar de las personas Adultas con síndrome de Down.</p>
          </div>
          <div className="purpose-cards">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map(card => (
                <div key={card.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Actividades Mejorada */}
      <section id="actividades" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Descubre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Actividades</span> Perfectas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra actividades cerca de ti que se adapten a los intereses y horarios de tu familiar. 
              Más de <span className="font-bold text-blue-600">55 actividades</span> disponibles en tu área.
            </p>
          </div>

          {/* Formulario de Localización */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Encuentra actividades cerca de ti
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    📍 Tu ubicación
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    placeholder="Ej: Valdivia, Los Ríos"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    🎂 Edad
                  </label>
                  <select
                    id="age"
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona edad</option>
                    <option value="18-25">18-25 años</option>
                    <option value="26-35">26-35 años</option>
                    <option value="36-45">36-45 años</option>
                    <option value="46+">46+ años</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    💡 Interés principal
                  </label>
                  <select
                    id="interest"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona interés</option>
                    <option value="arte">Arte y Creatividad</option>
                    <option value="deportes">Deportes y Movimiento</option>
                    <option value="vida">Habilidades de Vida</option>
                    <option value="musica">Música y Baile</option>
                    <option value="cocina">Cocina</option>
                    <option value="jardineria">Jardinería</option>
                  </select>
                </div>
              </div>

              {/* Botón principal destacado */}
              <div className="text-center">
                <button
                  onClick={handleFindActivities}
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  style={{
                    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
                  }}
                >
                  <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <svg className="w-6 h-6 mr-3 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    🚀 Encontrar Actividades Perfectas
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Tipos de Actividades */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Tipos de Actividades Disponibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityTypes.map((type) => (
                <div 
                  key={type.name} 
                  className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-600 font-semibold">
                        {type.count}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {type.name}
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 group-hover:from-blue-600 group-hover:to-purple-600"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  55+
                </div>
                <div className="text-gray-600">Actividades Disponibles</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  120+
                </div>
                <div className="text-gray-600">Familias Beneficiadas</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  15
                </div>
                <div className="text-gray-600">Ubicaciones</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  4.9★
                </div>
                <div className="text-gray-600">Calificación Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <section id="contacto">
        <div className="container">
          <div className="section-title">
            <h2>Contáctanos</h2>
            <p>¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte.</p>
          </div>
          <div className="contact-form">
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="contactName">Nombre</label>
                <input type="text" id="contactName" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Correo electrónico</label>
                <input type="email" id="contactEmail" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Mensaje</label>
                <textarea id="contactMessage" className="form-control" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
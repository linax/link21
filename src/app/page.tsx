"use client"

import Image from "next/image"
import Link from "next/link"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Team from "@/components/Team"
import Footer from "@/components/Footer"

export default function Home() {
  //  const [email, setEmail] = useState("")

  const clients = [
    {
      title: "Apoyo contínuo a Familias",
      description: "Encuentra apoyo, recursos y profesionales especializados",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Acceso a especialistas",
      description: "Facilitamos el contacto con profesionales especializados en síndrome de Down, quienes a su vez tienen a cceso a expertos para redes de derivación. ",
      icon: "👨‍⚕️"
    },
    {
      title: "Comunidad",
      description: "Creamos espacios para compartir experiencias y aprendizajes entre familias.",
      icon: "🤝"
    }
  ]

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
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Facilitamos la gestión del tratamiento de síndrome de down</h1>
              <p className="text-xl text-gray-700 mb-8">Conectando familias con profesionales de salud y educación para una mejor calidad de vida</p>
              <div className="hero-buttons">
                <Link href="#sd" className="inline-block">
                  <button className=" bg-white text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white flex items-center transition-colors">Soy persona con Síndrome de Down</button>
                </Link>
                <Link href="#conectar" className="inline-block">
                  <button className="mb-3 bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:text-white flex items-center transition-colors">Soy Familiar</button>
                </Link>
                <Link href="/profesionales" className="inline-block">
                  <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white flex items-center transition-colors">Soy Profesional</button>
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
            <p>Trabajamos para crear una comunidad inclusiva que promueva el desarrollo y bienestar de las personas con síndrome de Down.</p>
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

      <section id="conectar" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Soy Familiar</h2>
            <p>Ofrecemos diferentes formas de conexión para satisfacer tus necesidades específicas.</p>
          </div>
          <div className="connect-options">
            <div className="connect-option">
              <Image src="/familia2-sd.jpg" alt="Familia a familia" width={400} height={400} />
              <h3>Conexión entre Familias</h3>
              <p>Únete a nuestra red de familias para compartir experiencias, consejos y apoyo emocional con personas que entienden tu situación.</p>
              <a href="#" className="btn">
                Conoce más
              </a>
            </div>
            <div className="connect-option">
              <Image src="/medical-team.jpg" alt="Profesionales de salud" width={400} height={400} />
              <h3>Conexión con Profesionales</h3>
              <p>Encuentra especialistas en diferentes áreas: médicos, terapeutas, educadores y más, con experiencia en síndrome de Down, te apoyamos con nuestro agente IA que te guiará en el camino.</p>
              <a href="#" className="btn">
                Buscar profesionales
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="sd" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Soy Persona con Síndrome de down</h2>
            <p>Ofrecemos diferentes formas de conexión para satisfacer tus necesidades específicas.</p>
          </div>
          <div className="connect-options">
            <div className="connect-option">
              <Image src="/technology-sd.png" alt="Familia a familia" width={400} height={400} />
              <h3>Conecta con amigos</h3>
              <p>Únete a nuestra red de personas con síndrome de down y comparte experiencias, actividades y amistad!</p>
              <a href="#" className="btn">
                Comienza aquí
              </a>
            </div>
            <div className="connect-option">
              <Image src="/persona-sd.png" alt="desarrolo" width={400} height={400} />
              <h3>Oportunidades de desarrollo</h3>
              <p>Encuentra oportunidades de aprendizaje, bienestar y desarrollo.</p>
              <a href="#" className="btn">
                Buscar oportunidades
              </a>
            </div>
            <div className="connect-option">
              <Image src="/girl-sd.jpg" alt="Profesionales de salud" width={400} height={400} />
              <h3>Actividades entretenidas</h3>
              <p>Encuentra actividades entretenidas para realizar en tu tiempo libre.</p>
              <a href="#" className="btn">
                Buscar actividades
              </a>
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

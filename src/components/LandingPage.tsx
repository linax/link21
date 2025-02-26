"use client"

import Image from "next/image"
import Link from "next/link"
import "../styles/globals.css"

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

export default function LandingPage() {
  //  const [email, setEmail] = useState("")

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
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Link 21</h1>
              <p className="text-xl text-gray-700 mb-8">Conectando familias con profesionales de salud y educación para una mejor calidad de vida</p>
              <div className="hero-buttons">
                <Link href="#conectar" className="btn">
                  Soy Familiar
                </Link>
                <Link href="#profesionales" className="btn btn-secondary">
                  Soy Profesional
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pacientes",
                description: "Encuentra apoyo, recursos y profesionales especializados",
                icon: "👨‍👩‍👧‍👦"
              },
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
                title: "Fundaciones",
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
      <section id="proposito">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Propósito</h2>
            <p>Trabajamos para crear una comunidad inclusiva que promueva el desarrollo y bienestar de las personas con síndrome de Down.</p>
          </div>
          <div className="purpose-cards">
            <div className="purpose-card">
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Apoyo Continuo</h3>
              <p>Brindamos acompañamiento y recursos para familias en todas las etapas de desarrollo.</p>
            </div>
            <div className="purpose-card">
              <div className="icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Acceso a Especialistas</h3>
              <p>Facilitamos el contacto con profesionales especializados en síndrome de Down.</p>
            </div>
            <div className="purpose-card">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Comunidad Solidaria</h3>
              <p>Creamos espacios para compartir experiencias y aprendizajes entre familias.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="conectar" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Cómo Conectar</h2>
            <p>Ofrecemos diferentes formas de conexión para satisfacer tus necesidades específicas.</p>
          </div>
          <div className="connect-options">
            <div className="connect-option">
              <img src="/api/placeholder/350/200" alt="Familia a familia" />
              <h3>Conexión entre Familias</h3>
              <p>Únete a nuestra red de familias para compartir experiencias, consejos y apoyo emocional con personas que entienden tu situación.</p>
              <a href="#" className="btn">
                Conoce más
              </a>
            </div>
            <div className="connect-option">
              <img src="/api/placeholder/350/200" alt="Profesionales de salud" />
              <h3>Conexión con Profesionales</h3>
              <p>Encuentra especialistas en diferentes áreas: médicos, terapeutas, educadores y más, todos con experiencia en síndrome de Down.</p>
              <a href="#" className="btn">
                Buscar profesionales
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="profesionales">
        <div className="container">
          <div className="section-title">
            <h2>Para Profesionales</h2>
            <p>Si eres un profesional de la salud interesado en formar parte de nuestra comunidad, nos encantaría conocerte.</p>
          </div>
          <div className="contact-form">
            <form id="professionalForm">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="speciality">Especialidad</label>
                <input type="text" id="speciality" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="message">¿Cómo te gustaría colaborar?</label>
                <textarea id="message" className="form-control" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section id="equipo" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Equipo</h2>
            <p>Conoce a las personas detrás de ConexiónDown, comprometidas con mejorar la calidad de vida de las personas con síndrome de Down.</p>
          </div>
          <div className="team-members">
            <div className="team-member">
              <img src="/api/placeholder/120/120" alt="Sebastián Valderrama" />
              <h3>Sebastián Valderrama</h3>
              <p>Cofundador</p>
              <p>Médico Internista de la UC. Coordinador del Seguimiento en Salud de Adultos con Síndrome de Down.</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/120/120" alt="Carlos Méndez" />
              <h3>Carolina Lagos</h3>
              <p>Cofundadora</p>
              <p>Ingeniero civil en informática, cofundadora de Ciudad fácil, organización para promover accesibilidad en las ciudades</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/120/120" alt="Laura Gómez" />
              <h3>Gladys Alarcón</h3>
              <p>Cofundadora</p>
              <p>Contador Auditor, Máster en Dirección Financiera, Mentora certificada de Univ. De Chile y emprendedora. </p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <footer>
        <div className="container">
          <a href="#" className="logo">
            Link<span>21</span>
          </a>
          <div className="footer-links">
            <a href="#proposito">Propósito</a>
            <a href="#conectar">Conectar</a>
            <a href="#profesionales">Profesionales</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="copyright">© 2025 ConexiónDown. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

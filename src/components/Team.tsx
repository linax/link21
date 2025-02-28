import { Linkedin } from "lucide-react"
import Image from "next/image"

const Team = () => {
  const team = [
    {
      name: "Sebastián Valderrama",
      role: "Médico Internista de la UC. Coordinador del Seguimiento en Salud de Adultos con Síndrome de Down.",
      image: "/svalderrama.webp",
      linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-valderrama-13849a130/"
    },
    {
      name: "Carolina Lagos",
      role: "Ingeniero civil en informática, cofundadora de Ciudad fácil, organización para promover accesibilidad en las ciudades",
      image: "/clagos.png",
      linkedin: "https://linkedin.com/in/clagosv"
    },
    {
      name: "Gladys Alarcón",
      role: "Contador Auditor, Máster en Dirección Financiera, Mentora certificada de Univ. De Chile y emprendedora.",
      image: "/gladys.png",
      linkedin: "https://www.linkedin.com/in/gladys-alarc%C3%B3n-301224bb/"
    }
  ]
  return (
    <section id="equipo" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <p className="text-sm  text-center mb-12">Conoce a las personas detrás de Link21, comprometidas con mejorar la calidad de vida de las personas con síndrome de Down.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-35  object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

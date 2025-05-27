import React from 'react';
import Image from 'next/image';

const AdditionalServices = () => {
  const services = [
    {
      title: 'Consultas de psicología, terapia ocupacional o medicina',
      description: 'Sesiones personalizadas con profesionales especializados en síndrome de Down.',
      price: '$45.000',
      image: '/medical-team.jpg'
    },
    {
      title: 'Talleres Grupales',
      description: 'Talleres especializados para familias y personas con síndrome de Down.',
      price: '$35.000',
      image: '/familia2-sd.jpg'
    },
    {
      title: 'Job coaching intensivo (mensual)',
      description: 'Apoyo y orientación para el proceso de inserción laboral.',
      price: '$300.000',
      image: '/technology-sd.jpg'
    },
    {
      title: 'Respiro familiar especializado',
      description: 'Asistente o tutor para apoyar a la familia en el cuidado de la persona con síndrome de Down.',
      price: '$15.000/hora',
      image: '/girl-sd.jpg'
    }
  ];

  return (
    <section id="servicios-adicionales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Adicionales</h2>
          <p className="text-xl text-gray-600">Complementa tu plan con estos servicios especializados</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl flex flex-col h-full"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 
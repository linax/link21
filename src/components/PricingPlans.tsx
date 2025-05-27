import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Plan Básico',
      price: '$29.990',
      features: [
        'Acceso a plataforma digital',
        'Newsletter mensual',
        'Grupo de apoyo mensual',
        'Directorio de profesionales',
        'Recursos básicos de información'
      ],
      color: 'blue'
    },
    {
      name: 'Plan Desarrollo',
      price: '$120.000',
      features: [
        'Todo lo del Plan Básico +',
        '4 talleres presenciales por mes',
        'Evaluación trimestral',
        'Health coach',
      ],
      color: 'amber'
    },
    {
      name: 'Plan Integral',
      price: '$200.000',
      features: [
        'Todo lo del Plan Desarrollo +',
        'Servicios de inserción laboral /ocupacional',
        'Apoyo psicológico familiar',
        'Plan de desarrollo personalizado',
      ],
      color: 'purple'
    }
  ];

  const getButtonClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      amber: 'bg-amber-500 hover:bg-amber-600',
      purple: 'bg-purple-500 hover:bg-purple-600'
    };
    return `w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors ${colorMap[color]}`;
  };

  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Planes</h2>
          <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 border-t-4 border-${plan.color}-500 flex flex-col h-full`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-500">/mes</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <button className={getButtonClasses(plan.color)}>
                  Comenzar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 
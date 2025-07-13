import Link from 'next/link';
import React from 'react';

const Activities = () => {


  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Actividades</h2>
          <p className="text-xl text-gray-600">Revisa las actividades que tenemos para tu familiar y regístrate para agendar</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
        <div className="hero-buttons">
                <Link href="/actividades" className="inline-block">
                  <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white flex items-center transition-colors">Quiero ver actividades</button>
                </Link>
              </div>
         
            </div>
        </div>
      </div>
    </section>
  );
};

export default Activities; 
"use client"
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Calendar, Heart, Filter, Star, Users, Phone, Mail } from 'lucide-react';

// Tipos TypeScript
interface Schedule {
  day: string;
  time: string;
}

interface Activity {
  id: number;
  name: string;
  type: string;
  description: string;
  location: string;
  address: string;
  distance: string;
  schedule: Schedule[];
  instructor: string;
  capacity: number;
  enrolled: number;
  price: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos los niveles';
  rating: number;
  phone: string;
  email: string;
  image: string;
  tags: string[];
  ageGroup: string;
  minAge: number;
  maxAge: number;
  interests: string[];
}

interface Filters {
  searchTerm: string;
  selectedDay: string;
  selectedTime: string;
  selectedLocation: string;
  selectedAge: string;
  selectedInterest: string;
}

interface ActivitiesPlatformProps {
  location?: string;
  age?: number;
  interest?: string;
}

const ActivitiesPlatform: React.FC<ActivitiesPlatformProps> = ({ 
  location = '', 
  age, 
  interest = '' 
}) => {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    selectedDay: '',
    selectedTime: '',
    selectedLocation: location,
    selectedAge: age ? age.toString() : '',
    selectedInterest: interest
  });
  
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Datos de ejemplo de actividades con tipos mejorados
  const activities: Activity[] = [
    {
      id: 1,
      name: 'Taller de Mandalas',
      type: 'Arte y Creatividad',
      description: 'Actividad relajante que mejora la concentración y motricidad fina',
      location: 'Centro Comunitario Las Flores',
      address: 'Av. Principal 123, Valdivia',
      distance: '1.2 km',
      schedule: [
        { day: 'Lunes', time: '9:00 - 13:00' },
        { day: 'Miércoles', time: '15:00 - 17:00' }
      ],
      instructor: 'María González',
      capacity: 12,
      enrolled: 8,
      price: 'Gratuito',
      difficulty: 'Principiante',
      rating: 4.8,
      phone: '+56 9 1234 5678',
      email: 'maria@centroflores.cl',
      image: '🎨',
      tags: ['Arte', 'Relajación', 'Motricidad'],
      ageGroup: '16-30 años',
      minAge: 16,
      maxAge: 30,
      interests: ['arte', 'creatividad', 'relajación', 'manualidades']
    },
    {
      id: 2,
      name: 'Baile Terapéutico',
      type: 'Deportes y Movimiento',
      description: 'Mejora la coordinación y expresión corporal a través del baile',
      location: 'Estudio Danza Libre',
      address: 'Calle Libertad 456, Valdivia',
      distance: '2.1 km',
      schedule: [
        { day: 'Martes', time: '10:00 - 12:00' },
        { day: 'Jueves', time: '16:00 - 18:00' }
      ],
      instructor: 'Carlos Mendoza',
      capacity: 15,
      enrolled: 10,
      price: '$15.000/mes',
      difficulty: 'Todos los niveles',
      rating: 4.9,
      phone: '+56 9 8765 4321',
      email: 'carlos@danzalibre.cl',
      image: '💃',
      tags: ['Baile', 'Coordinación', 'Expresión'],
      ageGroup: '14-35 años',
      minAge: 14,
      maxAge: 35,
      interests: ['baile', 'música', 'movimiento', 'expresión', 'coordinación']
    },
    {
      id: 3,
      name: 'Ejercicios Funcionales',
      type: 'Deportes y Movimiento',
      description: 'Fortalecimiento muscular y mejora de la resistencia física',
      location: 'Gimnasio Inclusivo',
      address: 'Pasaje Deportivo 789, Valdivia',
      distance: '0.8 km',
      schedule: [
        { day: 'Miércoles', time: '9:00 - 11:00' },
        { day: 'Viernes', time: '14:00 - 16:00' }
      ],
      instructor: 'Ana Ruiz',
      capacity: 10,
      enrolled: 6,
      price: '$20.000/mes',
      difficulty: 'Principiante',
      rating: 4.7,
      phone: '+56 9 5555 7777',
      email: 'ana@gimnasioinc.cl',
      image: '🏋️',
      tags: ['Ejercicio', 'Fuerza', 'Resistencia'],
      ageGroup: '16-40 años',
      minAge: 16,
      maxAge: 40,
      interests: ['ejercicio', 'deporte', 'fuerza', 'salud', 'fitness']
    },
    {
      id: 4,
      name: 'Cocina Práctica',
      type: 'Habilidades de Vida',
      description: 'Aprende a preparar comidas saludables y desarrolla autonomía',
      location: 'Escuela Culinaria Comunitaria',
      address: 'Av. Gastronómica 321, Valdivia',
      distance: '1.5 km',
      schedule: [
        { day: 'Lunes', time: '14:00 - 17:00' },
        { day: 'Viernes', time: '10:00 - 13:00' }
      ],
      instructor: 'Pedro Santander',
      capacity: 8,
      enrolled: 5,
      price: '$25.000/mes',
      difficulty: 'Principiante',
      rating: 4.6,
      phone: '+56 9 9999 1111',
      email: 'pedro@cocinacom.cl',
      image: '👨‍🍳',
      tags: ['Cocina', 'Autonomía', 'Nutrición'],
      ageGroup: '18-45 años',
      minAge: 18,
      maxAge: 45,
      interests: ['cocina', 'alimentación', 'autonomía', 'nutrición', 'vida práctica']
    },
    {
      id: 5,
      name: 'Música y Canto',
      type: 'Arte y Creatividad',
      description: 'Desarrollo musical y expresión artística a través del canto',
      location: 'Conservatorio Popular',
      address: 'Plaza Musical 555, Valdivia',
      distance: '3.2 km',
      schedule: [
        { day: 'Martes', time: '15:00 - 17:30' },
        { day: 'Sábado', time: '10:00 - 12:00' }
      ],
      instructor: 'Sofía Morales',
      capacity: 12,
      enrolled: 9,
      price: '$18.000/mes',
      difficulty: 'Todos los niveles',
      rating: 4.8,
      phone: '+56 9 3333 2222',
      email: 'sofia@conservatorio.cl',
      image: '🎵',
      tags: ['Música', 'Canto', 'Expresión'],
      ageGroup: '15-50 años',
      minAge: 15,
      maxAge: 50,
      interests: ['música', 'canto', 'arte', 'expresión', 'creatividad']
    },
    {
      id: 6,
      name: 'Jardinería Terapéutica',
      type: 'Habilidades de Vida',
      description: 'Contacto con la naturaleza y desarrollo de responsabilidad',
      location: 'Huerto Comunitario Verde',
      address: 'Camino Rural 888, Valdivia',
      distance: '4.1 km',
      schedule: [
        { day: 'Jueves', time: '9:00 - 12:00' },
        { day: 'Sábado', time: '14:00 - 17:00' }
      ],
      instructor: 'Miguel Torres',
      capacity: 15,
      enrolled: 7,
      price: '$12.000/mes',
      difficulty: 'Principiante',
      rating: 4.5,
      phone: '+56 9 7777 8888',
      email: 'miguel@huertoverde.cl',
      image: '🌱',
      tags: ['Jardinería', 'Naturaleza', 'Responsabilidad'],
      ageGroup: '16-60 años',
      minAge: 16,
      maxAge: 60,
      interests: ['jardinería', 'naturaleza', 'plantas', 'responsabilidad', 'terapia']
    }
  ];

  const days: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const times: string[] = ['9:00 - 12:00', '14:00 - 17:00', '10:00 - 13:00', '15:00 - 18:00'];
  const ageRanges: string[] = ['14-18', '19-25', '26-35', '36-45', '46-60'];
  const interests: string[] = ['arte', 'música', 'deporte', 'cocina', 'naturaleza', 'baile', 'creatividad'];

  // Filtrar actividades con tipos seguros
  const filteredActivities: Activity[] = activities.filter((activity: Activity) => {
    const matchesSearch = activity.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         activity.type.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesDay = !filters.selectedDay || activity.schedule.some(s => s.day === filters.selectedDay);
    const matchesTime = !filters.selectedTime || activity.schedule.some(s => s.time.includes(filters.selectedTime.split(' - ')[0]));
    const matchesLocation = !filters.selectedLocation || activity.location.toLowerCase().includes(filters.selectedLocation.toLowerCase());
    
    const matchesAge = !filters.selectedAge || (() => {
      const [minAge, maxAge] = filters.selectedAge.split('-').map(Number);
      return activity.minAge <= maxAge && activity.maxAge >= minAge;
    })();
    
    const matchesInterest = !filters.selectedInterest || activity.interests.some(interest => 
      interest.toLowerCase().includes(filters.selectedInterest.toLowerCase())
    );
    
    return matchesSearch && matchesDay && matchesTime && matchesLocation && matchesAge && matchesInterest;
  });

  const toggleFavorite = (id: number): void => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const updateFilter = (key: keyof Filters, value: string): void => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getDifficultyColor = (difficulty: Activity['difficulty']): string => {
    switch(difficulty) {
      case 'Principiante': return 'bg-green-100 text-green-800';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeColor = (type: string): string => {
    switch(type) {
      case 'Arte y Creatividad': return 'bg-purple-100 text-purple-800';
      case 'Deportes y Movimiento': return 'bg-orange-100 text-orange-800';
      case 'Habilidades de Vida': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Aplicar filtros iniciales basados en props
  useEffect(() => {
    if (location) {
      setFilters(prev => ({ ...prev, selectedLocation: location }));
    }
    if (age) {
      // Encontrar el rango de edad apropiado
      const ageRange = ageRanges.find(range => {
        const [min, max] = range.split('-').map(Number);
        return age >= min && age <= max;
      });
      if (ageRange) {
        setFilters(prev => ({ ...prev, selectedAge: ageRange }));
      }
    }
    if (interest) {
      setFilters(prev => ({ ...prev, selectedInterest: interest }));
    }
  }, [location, age, interest]);

  if (selectedActivity) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <button 
          onClick={() => setSelectedActivity(null)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ← Volver a las actividades
        </button>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl mb-2">{selectedActivity.image}</div>
                <h1 className="text-3xl font-bold mb-2">{selectedActivity.name}</h1>
                <p className="text-lg opacity-90">{selectedActivity.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-lg font-semibold">{selectedActivity.rating}</span>
                </div>
                <button
                  onClick={() => toggleFavorite(selectedActivity.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.includes(selectedActivity.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium">{selectedActivity.location}</p>
                    <p className="text-sm text-gray-600">{selectedActivity.address}</p>
                    <p className="text-sm text-blue-600">{selectedActivity.distance}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-medium">Instructor: {selectedActivity.instructor}</p>
                    <p className="text-sm text-gray-600">
                      {selectedActivity.enrolled}/{selectedActivity.capacity} participantes
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💰</span>
                  <div>
                    <p className="font-medium">{selectedActivity.price}</p>
                    <p className="text-sm text-gray-600">Edades: {selectedActivity.ageGroup}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Horarios</h3>
              <div className="space-y-3">
                {selectedActivity.schedule.map((slot: Schedule, index: number) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium">{slot.day}</p>
                      <p className="text-sm text-gray-600">{slot.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Etiquetas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedActivity.tags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${selectedActivity.phone}`}
                className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar
              </a>
              <a 
                href={`mailto:${selectedActivity.email}`}
                className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
              <button className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                <Calendar className="w-5 h-5 mr-2" />
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Actividades Inclusivas
        </h1>
        <p className="text-lg text-gray-600">
          Encuentra actividades perfectas para adolescentes y adultos con Síndrome de Down
        </p>
        {(location || age || interest) && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {location && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                📍 {location}
              </span>
            )}
            {age && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                👤 {age} años
              </span>
            )}
            {interest && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                ❤️ {interest}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar actividades..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.searchTerm}
              onChange={(e) => updateFilter('searchTerm', e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filtros
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Día de la semana
              </label>
              <select
                value={filters.selectedDay}
                onChange={(e) => updateFilter('selectedDay', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los días</option>
                {days.map((day: string) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horario
              </label>
              <select
                value={filters.selectedTime}
                onChange={(e) => updateFilter('selectedTime', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los horarios</option>
                {times.map((time: string) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Filtrar por ubicación"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filters.selectedLocation}
                onChange={(e) => updateFilter('selectedLocation', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rango de edad
              </label>
              <select
                value={filters.selectedAge}
                onChange={(e) => updateFilter('selectedAge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas las edades</option>
                {ageRanges.map((range: string) => (
                  <option key={range} value={range}>{range} años</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interés
              </label>
              <select
                value={filters.selectedInterest}
                onChange={(e) => updateFilter('selectedInterest', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los intereses</option>
                {interests.map((interest: string) => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity: Activity) => (
          <div key={activity.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{activity.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{activity.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${getTypeColor(activity.type)}`}>
                      {activity.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorite(activity.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.includes(activity.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-gray-600 mb-4">{activity.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{activity.location} • {activity.distance}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{activity.enrolled}/{activity.capacity} participantes</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2" />
                  <span>{activity.rating} • {activity.price}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(activity.difficulty)}`}>
                  {activity.difficulty}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Horarios disponibles:</h4>
                {activity.schedule.map((slot: Schedule, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{slot.day}: {slot.time}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedActivity(activity)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            No se encontraron actividades
          </h3>
          <p className="text-gray-600">
            Intenta ajustar tus filtros de búsqueda
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivitiesPlatform;
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, X, Bell, Heart } from 'lucide-react';
import LocationModal from './LocationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Detectando localização...');
  const [isDetectingLocation, setIsDetectingLocation] = useState(true);

  // Function to get location by IP
  const getLocationByIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      if (data.city) {
        return data.city;
      }
      return null;
    } catch (error) {
      console.error('Error getting location by IP:', error);
      return null;
    }
  };

  // Function to get location by geolocation API
  const getLocationByGeolocation = () => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
            );
            const data = await response.json();
            
            if (data.city) {
              resolve(data.city);
            } else if (data.locality) {
              resolve(data.locality);
            } else {
              resolve(null);
            }
          } catch (error) {
            console.error('Error with reverse geocoding:', error);
            resolve(null);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          resolve(null);
        },
        {
          timeout: 10000,
          enableHighAccuracy: false,
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  };

  // Detect user location on component mount
  useEffect(() => {
    const detectLocation = async () => {
      setIsDetectingLocation(true);
      
      // Try geolocation first (more accurate)
      const geoLocation = await getLocationByGeolocation();
      if (geoLocation) {
        setCurrentLocation(geoLocation);
        setIsDetectingLocation(false);
        return;
      }

      // Fallback to IP-based location
      const ipLocation = await getLocationByIP();
      if (ipLocation) {
        setCurrentLocation(ipLocation);
      } else {
        setCurrentLocation('São Paulo'); // Default fallback without postal code
      }
      
      setIsDetectingLocation(false);
    };

    detectLocation();
  }, []);

  const handleLocationSet = (location: string) => {
    setCurrentLocation(location);
  };

  return (
    <>
      <header className="bg-[#FFE600] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-end py-2 text-xs">
            <div className="flex items-center space-x-4 text-gray-700">
              <a href="#" className="hover:underline">Vender</a>
              <a href="#" className="hover:underline">Ajuda</a>
              <a href="#" className="hover:underline">Contato</a>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-3">
            {/* Logo and Location */}
            <div className="flex flex-col">
              <div className="mb-1">
                <a 
                  href="#" 
                  className="nav-logo block"
                  title="Mercado Livre Brasil - Onde comprar e vender de Tudo"
                >
                  {/* Mobile optimized logo */}
                  <div className="block sm:hidden">
                    <img 
                      src="/image copy.png" 
                      alt="MercadoLivre" 
                      className="h-8 w-auto"
                    />
                  </div>
                  
                  {/* Desktop logo */}
                  <div className="hidden sm:block">
                    <img 
                      src="/image copy.png" 
                      alt="MercadoLivre" 
                      className="h-10 w-auto"
                    />
                  </div>
                </a>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 text-xs">
                <MapPin className="w-3 h-3" />
                <button 
                  onClick={() => setIsLocationModalOpen(true)}
                  className={`hover:text-[#3483FA] hover:underline cursor-pointer truncate max-w-[120px] sm:max-w-none ${
                    isDetectingLocation ? 'animate-pulse' : ''
                  }`}
                  disabled={isDetectingLocation}
                >
                  <span className="hidden sm:inline">Enviar para </span>
                  <span className="sm:hidden">Para </span>
                  {currentLocation}
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-1 max-w-2xl mx-4 sm:mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos, marcas e muito mais..."
                  className="w-full py-2 sm:py-2.5 px-3 sm:px-4 pr-10 sm:pr-12 rounded-sm shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#3483FA] focus:border-transparent text-sm"
                />
                <button className="absolute right-0 top-0 h-full px-3 sm:px-4 bg-gray-100 text-gray-600 rounded-r-sm hover:bg-gray-200 transition-colors border-l border-gray-300">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
                <span className="text-sm">Ofertas do dia</span>
              </div>
              <div className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
                <User className="w-4 h-4" />
                <span className="text-sm hidden lg:inline">Entre</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
                <Heart className="w-4 h-4" />
                <span className="text-sm hidden lg:inline">Favoritos</span>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm hidden lg:inline">Carrinho</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories bar */}
        <div className="bg-[#FFE600] border-t border-yellow-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto py-2">
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Categorias</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Ofertas</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Histórico</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Supermercado</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Moda</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Beleza e Cuidado Pessoal</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Eletrônicos</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Esportes</a>
            </div>
          </div>
        </div>
      </header>

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onLocationSet={handleLocationSet}
        currentLocation={currentLocation}
      />
    </>
  );
};

export default Header;
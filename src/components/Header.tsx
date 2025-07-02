import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, X, Bell, Heart } from 'lucide-react';
import LocationModal from './LocationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('São Paulo 01310-100');

  const handleLocationSet = (location: string) => {
    setCurrentLocation(location);
  };

  return (
    <>
      <header className="bg-[#FFF159] shadow-sm">
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
                  href="//www.mercadolivre.com.br" 
                  className="nav-logo block"
                  title="Mercado Livre Brasil - Onde comprar e vender de Tudo"
                >
                  {/* Mobile optimized logo */}
                  <div className="block sm:hidden">
                    <img 
                      src="/image-removebg-preview (1).png" 
                      alt="MercadoLivre" 
                      className="h-8 w-auto"
                    />
                  </div>
                  
                  {/* Desktop logo */}
                  <div className="hidden sm:block">
                    <img 
                      src="/image-removebg-preview (1).png" 
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
                  className="hover:text-[#3483FA] hover:underline cursor-pointer truncate max-w-[120px] sm:max-w-none"
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
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto py-2">
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Categorias</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Ofertas</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Histórico</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Supermercado</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Moda</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#3483FA] whitespace-nowrap">Casa e Jardim</a>
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
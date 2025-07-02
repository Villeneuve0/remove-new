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
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 4.5C6.01 4.5 4 6.51 4 9v14c0 2.49 2.01 4.5 4.5 4.5h23c2.49 0 4.5-2.01 4.5-4.5V9c0-2.49-2.01-4.5-4.5-4.5h-23z" fill="#2D3277"/>
                      <path d="M20 8.5c-6.35 0-11.5 5.15-11.5 11.5S13.65 31.5 20 31.5 31.5 26.35 31.5 20 26.35 8.5 20 8.5zm0 20.5c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" fill="#FFE600"/>
                      <path d="M20 12c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 9.5h-3v3h-1v-3h-3v-1h3v-3h1v3h3v1z" fill="#2D3277"/>
                    </svg>
                  </div>
                  
                  {/* Desktop logo */}
                  <div className="hidden sm:block">
                    <svg width="134" height="34" viewBox="0 0 134 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Official MercadoLivre logo */}
                      <g>
                        {/* Main logo background */}
                        <rect width="134" height="34" rx="4" fill="transparent"/>
                        
                        {/* Handshake/Connection symbol */}
                        <path d="M8 6h4v4H8V6zm6 0h4v4h-4V6z" fill="#2D3277"/>
                        <path d="M8 12h10v2H8v-2z" fill="#2D3277"/>
                        <path d="M6 14h14v2H6v-2z" fill="#2D3277"/>
                        <path d="M4 16h18v2H4v-2z" fill="#2D3277"/>
                        <path d="M6 18h14v2H6v-2z" fill="#2D3277"/>
                        <path d="M8 20h10v2H8v-2z" fill="#2D3277"/>
                        <path d="M10 22h6v2h-6v-2z" fill="#2D3277"/>
                        
                        {/* "mercado" text */}
                        <g fill="#2D3277">
                          <text x="28" y="14" fontFamily="Proxima Nova, Arial, sans-serif" fontSize="10" fontWeight="600">mercado</text>
                        </g>
                        
                        {/* "livre" text */}
                        <g fill="#2D3277">
                          <text x="28" y="24" fontFamily="Proxima Nova, Arial, sans-serif" fontSize="10" fontWeight="400">livre</text>
                        </g>
                        
                        {/* Alternative text-based approach for better compatibility */}
                        <g transform="translate(28, 8)">
                          <text y="8" fill="#2D3277" fontSize="11" fontWeight="600" fontFamily="Arial, sans-serif">mercado</text>
                          <text y="20" fill="#2D3277" fontSize="11" fontWeight="400" fontFamily="Arial, sans-serif">livre</text>
                        </g>
                      </g>
                    </svg>
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
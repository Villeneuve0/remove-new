import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, X, Bell, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
              <svg width="134" height="34" viewBox="0 0 134 34" className="text-[#2D3277]">
                <path fill="currentColor" d="M30.8 13.9c0-7.6-6.2-13.8-13.8-13.8S3.2 6.3 3.2 13.9s6.2 13.8 13.8 13.8 13.8-6.2 13.8-13.8zm-13.8 9.8c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z"/>
                <path fill="currentColor" d="M17 6.1c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8zm0 11.6c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z"/>
                <path fill="currentColor" d="M45.2 8.6h-3.8v11.8c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8V8.6h-3.8v11.8c0 4.2 3.4 7.6 7.6 7.6s7.6-3.4 7.6-7.6V8.6z"/>
                <path fill="currentColor" d="M58.4 8.6h-10.6v3.8h3.4v15.2h3.8V12.4h3.4V8.6z"/>
                <path fill="currentColor" d="M71.2 8.6h-10.6v3.8h3.4v15.2h3.8V12.4h3.4V8.6z"/>
                <path fill="currentColor" d="M84 8.6h-10.6v3.8h3.4v15.2h3.8V12.4H84V8.6z"/>
                <path fill="currentColor" d="M96.8 8.6H86.2v3.8h3.4v15.2h3.8V12.4h3.4V8.6z"/>
                <path fill="currentColor" d="M109.6 8.6H99v3.8h3.4v15.2h3.8V12.4h3.4V8.6z"/>
                <path fill="currentColor" d="M122.4 8.6h-10.6v3.8h3.4v15.2h3.8V12.4h3.4V8.6z"/>
                <path fill="currentColor" d="M134 20.4v-3.8h-7.6v3.8H134z"/>
              </svg>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 text-xs">
              <MapPin className="w-3 h-3" />
              <span>Enviar para São Paulo 01310-100</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="w-full py-2.5 px-4 pr-12 rounded-sm shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#3483FA] focus:border-transparent text-sm"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 text-gray-600 rounded-r-sm hover:bg-gray-200 transition-colors border-l border-gray-300">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
              <span className="text-sm">Ofertas do dia</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
              <User className="w-4 h-4" />
              <span className="text-sm">Entre</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
              <Heart className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Favoritos</span>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#3483FA] cursor-pointer">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">Carrinho</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-x-auto py-2">
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
  );
};

export default Header;
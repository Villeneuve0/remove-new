import React from 'react';

const CategoryMenu = () => {
  const categories = [
    'Categorias',
    'Ofertas',
    'Histórico',
    'Supermercado',
    'Moda',
    'Vender',
    'Contato'
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="py-4 text-sm font-medium text-gray-600 hover:text-[#3483FA] hover:border-b-2 hover:border-[#3483FA] transition-colors whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenu;
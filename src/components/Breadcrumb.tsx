import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'Casa e Jardim', href: '#' },
    { label: 'Limpeza', href: '#' },
    { label: 'Produtos de Limpeza', href: '#' },
    { label: 'Pasta japonesa remove anti rugas pele macia rejuvenecida', href: '#', current: true }
  ];

  return (
    <nav className="bg-white py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-1 text-xs text-gray-500">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
              )}
              {item.current ? (
                <span className="text-gray-700">{item.label}</span>
              ) : (
                <a
                  href={item.href}
                  className="text-[#3483FA] hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
import React from 'react';

const PromoBanner = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Moda Feminina</h3>
              <p className="mb-4 opacity-90">Até 50% OFF em roupas e acessórios</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                Ver ofertas
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Casa & Jardim</h3>
              <p className="mb-4 opacity-90">Decoração e móveis com desconto</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                Descobrir
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Eletrônicos</h3>
              <p className="mb-4 opacity-90">Os melhores preços em tech</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                Comprar
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
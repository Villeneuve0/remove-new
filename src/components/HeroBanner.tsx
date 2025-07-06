import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#3483FA] to-[#2968C8] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Encontre tudo o que você precisa
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Milhões de produtos com frete grátis e entrega rápida
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FFE600] text-black px-8 py-3 rounded-sm font-semibold hover:bg-yellow-400 transition-colors">
                Ver ofertas
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-[#3483FA] transition-colors">
                Cadastre-se
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shopping"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
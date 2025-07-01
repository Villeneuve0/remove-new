import React from 'react';
import { Star, Truck } from 'lucide-react';

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 1,
      title: "Creme Anti-Idade Noturno 50ml",
      price: 89.90,
      originalPrice: 119.90,
      rating: 4.3,
      reviews: 847,
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=300",
      freeShipping: true
    },
    {
      id: 2,
      title: "Sérum Facial Vitamina C 30ml",
      price: 124.90,
      originalPrice: 159.90,
      rating: 4.5,
      reviews: 1254,
      image: "https://images.pexels.com/photos/5217849/pexels-photo-5217849.jpeg?auto=compress&cs=tinysrgb&w=300",
      freeShipping: true
    },
    {
      id: 3,
      title: "Máscara Facial Hidratante 100ml",
      price: 67.90,
      originalPrice: 89.90,
      rating: 4.4,
      reviews: 656,
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
      freeShipping: true
    },
    {
      id: 4,
      title: "Tônico Facial Purificante 200ml",
      price: 45.90,
      originalPrice: 59.90,
      rating: 4.2,
      reviews: 387,
      image: "https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=300",
      freeShipping: true
    }
  ];

  return (
    <div className="bg-white rounded border border-gray-200 p-6">
      <h3 className="text-lg font-medium mb-6">Quem viu este produto também viu</h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded p-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="relative mb-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded"
              />
              <div className="absolute top-1 left-1 bg-red-500 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </div>
            </div>
            
            <h4 className="text-xs font-normal text-gray-800 mb-2 line-clamp-2 leading-tight">
              {product.title}
            </h4>
            
            <div className="flex items-center mb-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < Math.floor(product.rating) ? 'text-orange-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>

            <div className="space-y-0.5 mb-2">
              <div className="text-xs text-gray-500 line-through">
                R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-base font-light text-gray-900">
                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-xs text-green-600">
                em 12x R$ {(product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </div>

            {product.freeShipping && (
              <div className="flex items-center text-green-600 text-xs">
                <Truck className="w-3 h-3 mr-1" />
                Frete grátis
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
import React from 'react';
import { Star, Heart, Truck } from 'lucide-react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  freeShipping?: boolean;
  isSponsored?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  freeShipping,
  isSponsored
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{discount}%
          </div>
        )}
        {isSponsored && (
          <div className="absolute top-2 right-2 bg-[#FFE600] text-black px-2 py-1 rounded text-xs font-semibold">
            Patrocinado
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 hover:text-[#3483FA]">
          {title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviews})</span>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          )}
          <span className="text-xl font-bold text-gray-900">
            R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>

        {freeShipping && (
          <div className="flex items-center text-green-600 text-sm font-medium">
            <Truck className="w-4 h-4 mr-1" />
            Frete grátis
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
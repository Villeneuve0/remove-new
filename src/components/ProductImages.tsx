import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, ZoomIn } from 'lucide-react';

const ProductImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/api/placeholder/600/600?text=Pasta+Japonesa+Remove+Anti+Rugas+-+Frente",
    "/api/placeholder/600/600?text=Pasta+Japonesa+Remove+Anti+Rugas+-+Verso",
    "/api/placeholder/600/600?text=Pasta+Japonesa+Remove+Anti+Rugas+-+Lateral",
    "/api/placeholder/600/600?text=Pasta+Japonesa+Remove+Anti+Rugas+-+Aplicacao"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-white rounded border border-gray-200 overflow-hidden">
        <div className="aspect-square">
          <img
            src={images[currentImage]}
            alt="Pasta japonesa remove anti rugas"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 shadow-md transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 shadow-md transition-all"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}

        {/* Zoom button */}
        <button className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 shadow-md transition-all">
          <ZoomIn className="w-4 h-4 text-gray-700" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
          {currentImage + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 w-14 h-14 rounded border-2 overflow-hidden transition-all ${
              currentImage === index ? 'border-[#3483FA]' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex space-x-2">
        <button className="flex items-center space-x-1 text-[#3483FA] hover:underline text-sm">
          <Heart className="w-4 h-4" />
          <span>Adicionar aos favoritos</span>
        </button>
        <button className="flex items-center space-x-1 text-[#3483FA] hover:underline text-sm">
          <Share2 className="w-4 h-4" />
          <span>Compartilhar</span>
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
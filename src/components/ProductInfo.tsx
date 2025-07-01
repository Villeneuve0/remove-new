import React, { useState } from 'react';
import { Star, Truck, Shield, Award, Plus, Minus, Heart, Share2 } from 'lucide-react';

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState('30-dias');

  const treatmentOptions = [
    { 
      id: '30-dias', 
      label: 'Tratamento 30 dias', 
      price: 197.00, 
      originalPrice: 299.00,
      description: '1 unidade',
      discount: 34
    },
    { 
      id: '90-dias', 
      label: 'Tratamento 90 dias', 
      price: 297.00, 
      originalPrice: 497.00,
      description: '3 unidades',
      discount: 40,
      popular: true
    },
    { 
      id: '150-dias', 
      label: 'Tratamento 150 dias', 
      price: 397.00, 
      originalPrice: 697.00,
      description: '5 unidades',
      discount: 43,
      bestValue: true
    }
  ];

  const currentTreatment = treatmentOptions.find(t => t.id === selectedTreatment) || treatmentOptions[0];

  return (
    <div className="space-y-4">
      {/* Condition and sold count */}
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span>Novo</span>
        <span>|</span>
        <span>+1000 vendidos</span>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl font-normal text-gray-900 mb-2">
          Pasta japonesa remove anti rugas pele macia rejuvenecida
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < 4 ? 'text-orange-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">4.5</span>
        <span className="text-sm text-[#3483FA] hover:underline cursor-pointer">
          (2847 opiniões)
        </span>
      </div>

      {/* Treatment Options */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Escolha seu tratamento:</h3>
        <div className="space-y-2">
          {treatmentOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedTreatment(option.id)}
              className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedTreatment === option.id
                  ? 'border-[#3483FA] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular/Best Value badges */}
              {option.popular && (
                <div className="absolute -top-2 left-4 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                  MAIS POPULAR
                </div>
              )}
              {option.bestValue && (
                <div className="absolute -top-2 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  MELHOR VALOR
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedTreatment === option.id
                      ? 'border-[#3483FA] bg-[#3483FA]'
                      : 'border-gray-300'
                  }`}>
                    {selectedTreatment === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 line-through">
                      R$ {option.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">
                      {option.discount}% OFF
                    </span>
                  </div>
                  <div className="text-lg font-medium text-gray-900">
                    R$ {option.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-gray-600">
                    R$ {(option.price / option.description.split(' ')[0]).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} cada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-1 border-t border-gray-200 pt-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg text-gray-500 line-through">
            R$ {currentTreatment.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm font-medium">
            {currentTreatment.discount}% OFF
          </span>
        </div>
        <div className="text-3xl font-light text-gray-900">
          R$ {currentTreatment.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </div>
        <div className="text-green-600 text-sm font-medium">
          em 12x R$ {(currentTreatment.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
        </div>
        <div className="text-sm text-gray-600">
          Ver os meios de pagamento
        </div>
      </div>

      {/* Shipping */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-start space-x-2">
          <Truck className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <div className="text-green-600 font-medium">Frete grátis</div>
            <div className="text-sm text-gray-600">
              Saiba os prazos de entrega e as formas de envio.
            </div>
            <div className="text-sm text-[#3483FA] hover:underline cursor-pointer">
              Calcular prazo de entrega
            </div>
          </div>
        </div>
      </div>

      {/* Stock and quantity */}
      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-600 mb-3">
          Estoque disponível
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">Quantidade:</span>
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="text-sm text-gray-600">(50 disponíveis)</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button className="w-full bg-[#3483FA] text-white py-3 rounded font-medium hover:bg-[#2968C8] transition-colors">
          Comprar agora
        </button>
        <button className="w-full border border-[#3483FA] text-[#3483FA] py-3 rounded font-medium hover:bg-blue-50 transition-colors">
          Adicionar ao carrinho
        </button>
      </div>

      {/* Seller Info */}
      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-600 mb-2">Vendido por</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#3483FA] hover:underline cursor-pointer font-medium">
              Cosméticos Exclusivos
            </div>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < 5 ? 'text-orange-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-600">5.0 (1234)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              MercadoLíder
            </div>
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <Shield className="w-4 h-4 text-green-600" />
          <span>Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <Award className="w-4 h-4 text-blue-600" />
          <span>Garantia do vendedor: 30 dias</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
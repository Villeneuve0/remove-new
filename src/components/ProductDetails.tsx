import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Descrição' },
    { id: 'specifications', label: 'Características' },
    { id: 'reviews', label: 'Opiniões sobre o produto' },
    { id: 'questions', label: 'Perguntas e respostas' }
  ];

  const reviews = [
    {
      name: "Maria Silva",
      rating: 5,
      date: "15 de dezembro de 2024",
      comment: "Produto incrível! Realmente funciona como prometido. Minha pele ficou muito mais macia e as rugas diminuíram visivelmente.",
      helpful: 23,
      verified: true
    },
    {
      name: "João Santos",
      rating: 5,
      date: "12 de dezembro de 2024",
      comment: "Excelente qualidade! Já uso há 2 meses e os resultados são fantásticos. Recomendo!",
      helpful: 18,
      verified: true
    },
    {
      name: "Ana Costa",
      rating: 4,
      date: "10 de dezembro de 2024",
      comment: "Bom produto, mas demora um pouco para fazer efeito. No geral, estou satisfeita.",
      helpful: 12,
      verified: false
    }
  ];

  return (
    <div className="bg-white rounded border border-gray-200">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[#3483FA] text-[#3483FA] bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Descrição</h3>
            <div className="prose max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
              <p>
                A <strong>Pasta Japonesa Remove Anti Rugas</strong> é um produto revolucionário desenvolvido 
                com tecnologia japonesa avançada para combater os sinais do envelhecimento e proporcionar 
                uma pele mais macia e rejuvenescida.
              </p>
              <p>
                Formulada com ingredientes naturais e ativos poderosos, esta pasta oferece resultados 
                visíveis em poucas semanas de uso, reduzindo rugas, linhas de expressão e melhorando 
                a textura da pele.
              </p>
              
              <h4 className="font-medium mt-6 mb-3">Principais benefícios:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Reduz rugas e linhas de expressão</li>
                <li>Proporciona pele mais macia e hidratada</li>
                <li>Efeito rejuvenescedor visível</li>
                <li>Fórmula com ingredientes naturais</li>
                <li>Tecnologia japonesa avançada</li>
                <li>Resultados em poucas semanas</li>
              </ul>

              <h4 className="font-medium mt-6 mb-3">Como usar:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Limpe bem o rosto</li>
                <li>Aplique uma pequena quantidade da pasta</li>
                <li>Massageie suavemente em movimentos circulares</li>
                <li>Deixe agir por 15-20 minutos</li>
                <li>Enxágue com água morna</li>
                <li>Use 2-3 vezes por semana</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Características principais</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Marca:</span>
                <span className="text-sm font-medium">Remove Japan</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Tipo de produto:</span>
                <span className="text-sm font-medium">Creme anti-idade</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Conteúdo:</span>
                <span className="text-sm font-medium">50g</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Origem:</span>
                <span className="text-sm font-medium">Japão</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Tipo de pele:</span>
                <span className="text-sm font-medium">Todos os tipos</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Validade:</span>
                <span className="text-sm font-medium">24 meses</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Opiniões sobre o produto</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.5</span>
                <span className="text-sm text-gray-600">(2847)</span>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                          Compra verificada
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                  <button className="text-xs text-gray-500 hover:text-gray-700">
                    👍 Útil ({review.helpful})
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Perguntas e respostas</h3>
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">Ainda não há perguntas sobre este produto.</p>
              <button className="mt-2 text-[#3483FA] hover:underline text-sm">
                Fazer uma pergunta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
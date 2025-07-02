import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSet: (location: string) => void;
  currentLocation: string;
}

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onLocationSet,
  currentLocation
}) => {
  const [localInput, setLocalInput] = useState('');
  const [resultado, setResultado] = useState('');

  const enviarLocalizacao = () => {
    const local = localInput.trim();
    if (local) {
      setResultado(`Enviando para: ${local}`);
      onLocationSet(local);
      setTimeout(() => {
        onClose();
        setLocalInput('');
        setResultado('');
      }, 1500);
    } else {
      alert('Por favor, informe sua cidade.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      enviarLocalizacao();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12 text-[#3483FA]" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Para onde devemos enviar?
          </h1>
          
          <div className="space-y-4">
            <input
              type="text"
              value={localInput}
              onChange={(e) => setLocalInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua cidade"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3483FA] focus:border-transparent text-center text-lg"
              autoFocus
            />
            
            <button
              onClick={enviarLocalizacao}
              className="w-full bg-[#3483FA] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2968C8] transition-colors text-lg"
            >
              Enviar
            </button>
          </div>

          {resultado && (
            <div className="mt-6 text-xl text-green-600 font-medium animate-pulse">
              {resultado}
            </div>
          )}

          {currentLocation && !resultado && (
            <div className="mt-4 text-sm text-gray-600">
              Localização atual: <span className="font-medium">{currentLocation}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
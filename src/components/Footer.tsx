import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Sobre o MercadoLivre</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#3483FA]">Investidor</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Carreiras</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Imprensa</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Anuncie no ML</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Outros sites</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#3483FA]">Developers</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Mercado Pago</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Mercado Shops</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Mercado Envios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Ajuda</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#3483FA]">Comprar</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Vender</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Resolução de problemas</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Centro de segurança</a></li>
              <li><a href="#" className="hover:text-[#3483FA]">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Redes sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#3483FA]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#3483FA]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#3483FA]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#3483FA]">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Baixe o app</h4>
              <div className="space-y-2">
                <img 
                  src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.92/mercadolibre/google-play.png" 
                  alt="Google Play" 
                  className="h-10"
                />
                <img 
                  src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.92/mercadolibre/app-store.png" 
                  alt="App Store" 
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 MercadoLivre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
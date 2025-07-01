import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Smartphone Samsung Galaxy A54 5G 128GB 8GB RAM Tela 6.4 Câmera Tripla",
      price: 1299.99,
      originalPrice: 1599.99,
      discount: 19,
      rating: 4.5,
      reviews: 2847,
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true,
      isSponsored: true
    },
    {
      id: 2,
      title: "Notebook Lenovo IdeaPad 3i Intel Core i5 8GB 256GB SSD Tela 15.6",
      price: 2499.99,
      originalPrice: 2999.99,
      discount: 17,
      rating: 4.3,
      reviews: 1253,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true
    },
    {
      id: 3,
      title: "Fone de Ouvido Bluetooth JBL Tune 510BT Sem Fio com Microfone",
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      rating: 4.7,
      reviews: 5692,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true
    },
    {
      id: 4,
      title: "Smart TV 55 4K UHD Samsung Crystal UHD 55AU7700 Alexa Built In",
      price: 2199.99,
      originalPrice: 2799.99,
      discount: 21,
      rating: 4.4,
      reviews: 923,
      image: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true,
      isSponsored: true
    },
    {
      id: 5,
      title: "Tênis Nike Air Max 270 Masculino Preto e Branco Original",
      price: 499.99,
      originalPrice: 699.99,
      discount: 29,
      rating: 4.6,
      reviews: 3456,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true
    },
    {
      id: 6,
      title: "Cafeteira Expresso Automática Philips 3200 Series com Moedor",
      price: 1899.99,
      originalPrice: 2399.99,
      discount: 21,
      rating: 4.5,
      reviews: 867,
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true
    },
    {
      id: 7,
      title: "Relógio Smartwatch Apple Watch Series 8 GPS 45mm Pulseira Sport",
      price: 3299.99,
      originalPrice: 3899.99,
      discount: 15,
      rating: 4.8,
      reviews: 1876,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true,
      isSponsored: true
    },
    {
      id: 8,
      title: "Bicicleta Aro 29 Shimano 21 Marchas Freio a Disco Alumínio",
      price: 899.99,
      originalPrice: 1199.99,
      discount: 25,
      rating: 4.2,
      reviews: 654,
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400",
      freeShipping: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Produtos em destaque
          </h2>
          <a href="#" className="text-[#3483FA] hover:underline font-medium">
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
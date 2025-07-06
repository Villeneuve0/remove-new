import React from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ProductImages />
          <ProductInfo />
        </div>

        {/* Product Details */}
        <div className="mb-8">
          <ProductDetails />
        </div>

        {/* Related Products */}
        <RelatedProducts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
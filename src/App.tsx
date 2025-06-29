import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Instagram, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Urban Legend Tee',
      price: 29.99,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      bestseller: true
    },
    {
      id: 2,
      name: 'Street Vibes Shirt',
      price: 34.99,
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      bestseller: true
    },
    {
      id: 3,
      name: 'Bold Expression Tee',
      price: 27.99,
      image: 'https://images.pexels.com/photos/1656686/pexels-photo-1656686.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      bestseller: false
    },
    {
      id: 4,
      name: 'Youth Culture Shirt',
      price: 32.99,
      image: 'https://images.pexels.com/photos/1656683/pexels-photo-1656683.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      bestseller: true
    },
    {
      id: 5,
      name: 'Generation Z Tee',
      price: 28.99,
      image: 'https://images.pexels.com/photos/1656691/pexels-photo-1656691.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      bestseller: false
    },
    {
      id: 6,
      name: 'Rebel Spirit Shirt',
      price: 31.99,
      image: 'https://images.pexels.com/photos/1656690/pexels-photo-1656690.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      bestseller: false
    }
  ];

  const bestSellers = products.filter(product => product.bestseller);

  return (
    <div className="min-h-screen bg-white">
    {/* Header */}
<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-tight">
          Fattla
        </h1>
      </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Home</a>
              <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Shop</a>
              <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">About</a>
              <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Contact</a>
              <button className="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors flex items-center space-x-2">
                <ShoppingBag size={18} />
                <span>Cart</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-900 hover:text-amber-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Home</a>
                <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Shop</a>
                <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">About</a>
                <a href="#" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">Contact</a>
                <button className="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 w-full">
                  <ShoppingBag size={18} />
                  <span>Cart</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-black text-amber-900 leading-tight">
                  Express Your
                  <span className="block text-orange-600">Youth Spirit</span>
                </h2>
                <p className="text-lg lg:text-xl text-amber-800 leading-relaxed max-w-lg">
                  Discover our collection of bold, urban-inspired t-shirts designed for the next generation. Premium quality meets street-smart style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Shop Now
                </button>
                <button className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-900 hover:text-white transition-all duration-200">
                  View Collection
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Young model wearing Fattla t-shirt" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                New Drop!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-amber-900 mb-4">Best Sellers</h3>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Our most popular designs loved by youth everywhere. These are the tees that define the culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-amber-900">{product.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-amber-700 font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-black text-orange-600 mb-4">${product.price}</p>
                  <button className="w-full bg-amber-900 text-white py-3 rounded-xl font-bold hover:bg-amber-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Bestseller
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Product Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-amber-900 mb-4">All Products</h3>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Explore our complete collection of youth-inspired designs. Every piece tells a story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-amber-900">{product.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-amber-700 font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-black text-orange-600 mb-4">${product.price}</p>
                  <button className="w-full bg-amber-900 text-white py-3 rounded-xl font-bold hover:bg-amber-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Bestseller
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-5xl font-black mb-6">
            Ready to Make a Statement?
          </h3>
          <p className="text-xl lg:text-2xl mb-8 text-amber-100 leading-relaxed">
            Join thousands of young people expressing themselves through our bold designs. Your style, your story.
          </p>
          <button className="bg-white text-amber-900 px-12 py-4 rounded-xl font-black text-xl hover:bg-amber-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Shop the Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://postimg.cc/N2v4qNtm" 
                  alt="Fattla Logo" 
                  className="h-8 w-8 object-contain brightness-0 invert"
                />
                <h4 className="text-2xl font-bold">Fattla</h4>
              </div>
              <p className="text-amber-200 text-lg leading-relaxed mb-6">
                Empowering youth culture through bold, expressive t-shirt designs. Where street style meets premium quality.
              </p>
              <a 
                href="https://www.instagram.com/fattla_?igsh=MXg2MTlkMDliMGw2cA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-amber-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="font-medium">Follow us on Instagram</span>
              </a>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Support</h5>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Fattla. All rights reserved. Made with passion for youth culture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
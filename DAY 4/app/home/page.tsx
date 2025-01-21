// pages/index.tsx
"use client";
import React, { useState } from 'react';
import { Car, PhoneCall, Mail, MapPin, ShoppingCart, Star, User, Search } from 'lucide-react';

interface CarType {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  rating: number;
  features: string[];
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const featuredCars: CarType[] = [
    {
      id: 1,
      name: "Tesla Model 3",
      price: 99,
      image: "/api/placeholder/400/250",
      type: "Electric",
      rating: 4.9,
      features: ["Autopilot", "360° Camera", "Wireless Charging"]
    },
    {
      id: 2,
      name: "BMW 5 Series",
      price: 120,
      image: "/api/placeholder/400/250",
      type: "Luxury",
      rating: 4.8,
      features: ["Leather Interior", "Panoramic Roof", "Premium Sound"]
    },
    {
      id: 3,
      name: "Toyota RAV4",
      price: 75,
      image: "/api/placeholder/400/250",
      type: "SUV",
      rating: 4.7,
      features: ["All-Wheel Drive", "Spacious Boot", "Advanced Safety"]
    },
    {
      id: 4,
      name: "Mercedes-Benz E-Class",
      price: 150,
      image: "/api/placeholder/400/250",
      type: "Luxury",
      rating: 4.9,
      features: ["Premium Interior", "Advanced MBUX", "Driver Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Car className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-blue-900">LuxeRide</span>
              </a>
              <div className="hidden md:flex items-center ml-10 space-x-8">
                <a href="/" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
                <a href="/cars" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium">Cars</a>
                <a href="/about" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium">About</a>
                <a href="/contact" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <button className="p-2 hover:bg-blue-50 rounded-full relative">
                  <ShoppingCart className="w-6 h-6 text-blue-900" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </button>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-blue-50"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Home</a>
              <a href="/cars" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Cars</a>
              <a href="/about" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">About</a>
              <a href="/contact" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
              Experience Luxury <br />on Wheels
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Discover our premium fleet of vehicles. From luxury sedans to powerful SUVs, 
              find the perfect car for your journey.
            </p>
            <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search for cars..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Featured Cars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of premium vehicles, each offering unique features and exceptional comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{car.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-1">{car.name}</h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {car.type}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">${car.price}<span className="text-sm text-gray-600">/day</span></p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose LuxeRide
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the difference with our premium car rental service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Premium Fleet</h3>
              <p className="text-gray-600">
                Choose from our collection of luxury vehicles, regularly maintained and updated with the latest models.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is available round the clock to assist you with any queries or concerns.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Convenient Locations</h3>
              <p className="text-gray-600">
                Multiple pickup and drop-off points across the city for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Car className="w-8 h-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">LuxeRide</span>
              </div>
              <p className="text-blue-200">
                Premium car rental services with a commitment to quality and customer satisfaction. Experience luxury on wheels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cars</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <PhoneCall className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-200">+1 234 567 8900</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-200">support@luxeride.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-200">123 Luxury Drive, Beverly Hills, CA 90210</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="mt-6">
                <p className="text-blue-200 text-sm">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">
                &copy; 2025 LuxeRide. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
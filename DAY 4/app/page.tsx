"use client"

import React, { use, useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { SearchAndFilter } from './Components/SearchAndFilter';
import { CarCard } from './Components/CarCard';
import { CarDetailsModal } from './Components/CarDetailsModal';
import { BookingModal } from './Components/BookingModal';
import { CarData, User, BookingFormData } from './types/index';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';

export default function CarRentalPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [car, setCar] = useState<CarData[]>([]);
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [bookingForm, setBookingForm] = useState<BookingFormData>({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    returnLocation: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
  async function fetchData() {
    try {
      const response: CarData[] = await client.fetch(allProducts);
      console.log("Fetched data:", response); // Debug here
      setCar(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, []);

  const types = ['All', ...new Set(car.map(car => car.type))];
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'popularity', label: 'Popularity' }
  ];

  // Filter and sort cars
  const filteredAndSortedCars = car
    .filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || car.type === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      const priceA = a.price_per_day ? parseFloat(a.price_per_day.replace('$', '')) : 0;
      const priceB = b.price_per_day ? parseFloat(b.price_per_day.replace('$', '')) : 0;
      
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'popularity':
          return b.tags.includes('popular') ? 1 : -1;
        default:
          return 0;
      }
    });
    

  // Authentication handlers
  const handleLogin = () => {
    setIsAuthenticated(true);
    setUser({ id: '1', name: 'John Doe', email: 'john@example.com' });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  // Booking handlers
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setBookingSuccess(false);
      setBookingForm({
        startDate: '',
        endDate: '',
        pickupLocation: '',
        returnLocation: ''
      });
    }, 2000);
  };

  const handleRentNow = (car: CarData) => {
    if (isAuthenticated) {
      setSelectedCar(car);
      setShowBookingModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogin={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />

      <div className="max-w-7xl mx-auto p-8">
        <Header />

        <SearchAndFilter
          searchTerm={searchTerm}
          selectedType={selectedType}
          sortBy={sortBy}
          types={types}
          sortOptions={sortOptions}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedType}
          onSortChange={setSortBy}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCars.map((car, index) => (
            <CarCard
              key={index}
              car={car}
              onViewDetails={() => setSelectedCar(car)}
              onRentNow={() => handleRentNow(car)}
            />
          ))}
        </div>

        <CarDetailsModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onRentNow={() => {
            if (isAuthenticated) {
              setShowBookingModal(true);
            } else {
              setShowAuthModal(true);
            }
          }}
        />

        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          bookingSuccess={bookingSuccess}
          bookingForm={bookingForm}
          onBookingFormChange={setBookingForm}
          onSubmit={handleBookingSubmit}
        />

        {/* Authentication Modal */}
        <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
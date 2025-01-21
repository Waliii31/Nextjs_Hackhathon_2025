import React from 'react';
import { Users, Fuel, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { CarData } from '../types';

interface CarDetailsModalProps {
  car: CarData | null;
  onClose: () => void;
  onRentNow: () => void;
}

export const CarDetailsModal: React.FC<CarDetailsModalProps> = ({
  car,
  onClose,
  onRentNow,
}) => {
  if (!car) return null;

  return (
    <Dialog open={!!car} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{car.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{car.price_per_day}</h3>
              <p className="text-gray-600">{car.type}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium">Seating Capacity</p>
                  <p className="text-gray-600">{car.seating_capacity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Fuel size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium">Fuel Capacity</p>
                  <p className="text-gray-600">{car.fuel_capacity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium">Transmission</p>
                  <p className="text-gray-600">{car.transmission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={onRentNow}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Rent Now
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
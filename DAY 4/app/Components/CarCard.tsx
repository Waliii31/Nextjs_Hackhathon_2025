import React from 'react';
import { Users, Fuel, Settings, BadgePercent } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { CarData } from '../types';
import Image from 'next/image';

interface CarCardProps {
  car: CarData;
  onViewDetails: () => void;
  onRentNow: () => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails, onRentNow }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <CardHeader className="p-0">
      <div className="relative h-40 w-full p-3 bg-gray-200">
        {car.imageUrl ? (
          <Image
            src={car.imageUrl}
            alt={car.name}
            className="w-[90%] h-auto object-cover"
            quality={100}
            fill={true}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
        {car.tags.includes('popular') && (
          <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>
        )}
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold">{car.name}</h3>
          <p className="text-gray-600">{car.type}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">{car.pricePerDay}</p>
          {car.original_price && (
            <p className="text-sm text-gray-400 line-through">{car.original_price}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>{car.seatingCapacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Fuel size={16} />
          <span>{car.fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Settings size={16} />
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgePercent size={16} />
          <span>{car.pricePerDay}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-4 bg-gray-50 flex gap-2">
      <button
        onClick={onViewDetails}
        className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors"
      >
        View Details
      </button>
      <button
        onClick={onRentNow}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
      >
        Rent Now
      </button>
    </CardFooter>
  </Card>
);

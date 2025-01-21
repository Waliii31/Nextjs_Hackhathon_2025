export interface CarData {
    _id: string;
    name: string;
    brand: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string;
    tags: string[];
    imageUrl?: string; // Add this if using images
  }
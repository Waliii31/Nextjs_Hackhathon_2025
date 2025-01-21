export interface CarData {
    id: number;
    name: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    original_price?: string;
    imageUrl: string;
    tags: string[];
    brand?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface BookingFormData {
    startDate: string;
    endDate: string;
    pickupLocation: string;
    returnLocation: string;
}
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingSuccess: boolean;
  bookingForm: BookingFormData;
  onBookingFormChange: (form: BookingFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingSuccess,
  bookingForm,
  onBookingFormChange,
  onSubmit,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Book Your Car</DialogTitle>
      </DialogHeader>
      {bookingSuccess ? (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Booking successful! We'll contact you shortly with further details.
          </AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick-up Date
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded-lg"
              value={bookingForm.startDate}
              onChange={(e) =>
                onBookingFormChange({ ...bookingForm, startDate: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return Date
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded-lg"
              value={bookingForm.endDate}
              onChange={(e) =>
                onBookingFormChange({ ...bookingForm, endDate: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick-up Location
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={bookingForm.pickupLocation}
              onChange={(e) =>
                onBookingFormChange({ ...bookingForm, pickupLocation: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return Location
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={bookingForm.returnLocation}
              onChange={(e) =>
                onBookingFormChange({ ...bookingForm, returnLocation: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </DialogContent>
  </Dialog>
);
// src/components/Modal.tsx
import { useEffect, useRef } from 'react';
import { Doctor } from '../types/doctorsTypes';
import { useNavigate } from "react-router-dom";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, doctor}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen || !doctor) return null;

  const handleBookAppointment = () => {
    // Store booking in local storage
    const bookings: Array<{
      id: number;
      name: string;
      specialty: string;
      date: string;
    }> = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = {
      id: doctor._id,
      name: doctor.name,
      specialty: doctor.speciality,
      date: new Date().toISOString(),
    };
    // Convert string ID to number before creating booking
    const newBookingWithNumberId = {
      ...newBooking,
      id: Number(doctor._id)
    };
    bookings.push(newBookingWithNumberId);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert('Appointment booked successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Doctor Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.speciality}</p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Availability:</span>{' '}
            {doctor?.availability ? "Available" : "Unavailable"}
          </p>
          <div className="mt-6 flex space-x-4">
            <button
            disabled={!doctor.availability}
              onClick={handleBookAppointment}
              className={`${doctor.availability ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"} text-white px-4 py-2 rounded hover:bg-blue-700`}
            >
              Book Appointment
            </button>
            <button
            onClick={() => {navigate(`/appointment/${doctor._id}`);scrollTo(0,0)}} 
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
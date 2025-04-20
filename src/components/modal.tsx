import { useEffect, useRef, useState, useContext } from 'react';
import { Doctor } from '../types/doctorsTypes';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/appContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, doctor }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Generate next 7 days for date selection
  const getNextSevenDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Handle date selection
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    if (doctor && appContext) {
      const times = appContext.getAvailableTimes(Number(doctor._id), date);
      setAvailableTimes(times);
      setSelectedTime('');
    }
  };

  // Handle booking
  const handleBookAppointment = () => {
    if (doctor && appContext && selectedDate && selectedTime) {
      appContext.bookAppointment(doctor, selectedDate, selectedTime);
      onClose();
    }
  };

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

  if (!isOpen || !doctor || !appContext) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book Appointment</h2>
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
          
          {/* Date Selection */}
          <div className="mt-4 w-full">
            <h4 className="font-medium mb-2">Select Date</h4>
            <div className="flex flex-wrap gap-2">
              {getNextSevenDays().map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className={`px-3 py-1 rounded ${
                    selectedDate === date
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="mt-4 w-full">
              <h4 className="font-medium mb-2">Select Time</h4>
              <div className="flex flex-wrap gap-2">
                {availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-1 rounded ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-600">No available times</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6 flex space-x-4">
            <button
              disabled={!doctor.availability || !selectedDate || !selectedTime}
              onClick={handleBookAppointment}
              className={`${
                doctor.availability && selectedDate && selectedTime
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white px-4 py-2 rounded`}
            >
              Confirm Appointment
            </button>
            <button
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                scrollTo(0, 0);
              }}
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
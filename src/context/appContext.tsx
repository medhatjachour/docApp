import { createContext, ReactNode, useMemo, useState } from "react";
import { doctors } from "../assets/assets";
import { Doctor } from '../types/doctorsTypes';

interface Booking {
  id: number;
  name: string;
  specialty: string;
  date: string;
  time: string;
}

interface AppContextValue {
  doctors: Doctor[];
  currencySymbol: string;
  bookAppointment: (doctor: Doctor, date: string, time: string) => void;
  getAvailableTimes: (doctorId: number, date: string) => string[];
  getBookings: () => Booking[];
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const currencySymbol = '$';
  // Mock available times for each doctor by date
  const [availableTimes] = useState<Record<string, string[]>>({
    '2025-04-21': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    '2025-04-22': ['09:30', '10:30', '13:00', '14:30', '16:00'],
    '2025-04-23': ['08:00', '09:00', '11:30', '13:30', '15:30'],
  });

  const bookAppointment = (doctor: Doctor, date: string, time: string) => {
    const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = {
      id: Number(doctor._id),
      name: doctor.name,
      specialty: doctor.speciality,
      date,
      time,
    };
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert(`Appointment booked successfully with ${doctor.name} on ${date} at ${time}!`);
  };

  const getAvailableTimes = (doctorId: number, date: string): string[] => {
    // In a real app, this would query an API for available times
    return availableTimes[date] || [];
  };

  const getBookings = (): Booking[] => {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  };

  const value = useMemo(() => ({
    doctors,
    currencySymbol,
    bookAppointment,
    getAvailableTimes,
    getBookings,
  }), [availableTimes]);

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
import { useState } from 'react';
import Modal from './modal';
import { Doctor } from '../types/doctorsTypes';
import { assets } from '../assets/assets';
interface DoctorCardProps {
  doctor: Doctor;
}
const CardDoctor = ({ doctor }: DoctorCardProps) => {
  console.log(doctor)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="border relative border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-11px] transition-all duration-500"
      >
        <div className='absolute top-2 right-2  flex items-center gap-1 max-w-10 max-h-10 z-10'> {doctor?.rating} <img src={assets.star_rating} alt='star' className='w-4 h-4' />
        </div>
      <img
        src={doctor?.image}
        alt={doctor?.name}
        className="w-full bg-blue-50 hover:bg-blue-200 transition-all duration-300 h-48 object-contain rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2 text-sm text-center text-green-500">
          <div className='flex items-center gap-2'>
            {doctor?.availability ? (
              <><p className="w-2 h-2 bg-green-500 rounded-full"></p><p>available</p></>
            ) : (
              <><p className="w-2 h-2 bg-red-500 rounded-full "></p><p className='text-red-500'>unavailable</p></>
            )}
          </div>
          <p className='text-gray-600'> <span className='text-gray-400 text-sm'>({doctor?.fees}$)</span></p>
        </div>
        <h3 className="text-lg font-semibold">{doctor?.name}</h3>
        <p className="text-gray-600">{doctor?.speciality}</p>
      </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={doctor}

      />

    </>
    
  );
};

export default CardDoctor;


import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <section id="specialty" className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Specialty</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((speciality, index) => (
            // navigate and scroll top to the doctor page filter by specialty
            <Link onClick={()=>scrollTo(0,0)} key={index} to={`/doctors/${speciality.speciality}`} className="flex flex-col items-center rounded-full text-xs text-gray-600  hover:translate-y-[-11px] transition-all duration-500 cursor-pointer flex-shrink-0">
            <img className='w-16 sm:w-24 mb-2 ' src={speciality.image} alt={speciality.speciality} />
            <p>{speciality.speciality}</p>
            </Link>
        ))}
        </div>
    </section>
  )
}

export default SpecialtyMenu
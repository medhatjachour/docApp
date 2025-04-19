import  { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import CardDoctor from './CardDoctor';

const TopDoctors = () => {
    const [doctorsNum, setDoctorsNum] = useState(10);
    const navigate= useNavigate()
    const { doctors } = useContext(AppContext) || { doctors: [] };
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-clip text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0, doctorsNum).map((doctor, index) => (
              
                <CardDoctor key={index} {...doctor} />
            ))}
        </div>
        <div>
            {doctorsNum<=doctors.length?
            <button onClick={()=>{setDoctorsNum(doctorsNum + 10)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full'>more</button>
            :
            <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full'>See Doctors Page</button>
        }
        </div>
    </div>
  )
}

export default TopDoctors
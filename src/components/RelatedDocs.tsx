import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/appContext';
import { DoctorInterface } from '../types/doctorsTypes';
import CardDoctor from './CardDoctor';

const RelatedDocs = ({ docId, specialty }: { docId: string|undefined, specialty:string|undefined }) => {

    const context = useContext(AppContext) || {doctors: [],      };
      const { doctors} = context;
      const [relDocs , setRelDocs] = useState<DoctorInterface[]>([]);
    
    useEffect(() => {
      
      if(doctors.length>0 && specialty){
        const doctorsData = doctors.filter((doc) => doc.speciality === specialty && doc._id !== docId);
        setRelDocs(doctorsData);
      }
    }, [doctors,docId,specialty]);
      return (
    <div>
       <div className='flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10 '>
        <h1 className='text-3xl text-center font-medium'>Related Doctors</h1>
        <p className='sm:w-2/3  text-center text-clip text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDocs.slice(0, 5).map((doctor, index) => (
              
                <CardDoctor key={index} {...doctor} />
            ))}
        </div>
       
    </div>
    </div>
  )
}

export default RelatedDocs
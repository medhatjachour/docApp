import { useParams } from "react-router-dom"
import { AppContext } from "../context/appContext";
import { useContext, useEffect, useState } from "react";
import CardDoctor from "../components/CardDoctor";
import { DoctorInterface } from "../types/doctorsTypes";

  
import { useNavigate } from "react-router-dom";
const Doctors = () => {
  const navigate = useNavigate();
  const {specialty} = useParams()
  const {doctors} = useContext(AppContext) || {doctors: []}
  const [filterDoc, setFilterDoc] = useState<DoctorInterface[]>([]);

  const [showFilter, setShowFilter] = useState(false);
  const applyFilter= () =>{
    if(specialty){
      setFilterDoc(doctors.filter((doctor) => doctor.speciality === specialty))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors,specialty]);
  return (
    <div>  
      <p className="text-gray-600">Browse through the doctors specialist. </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?"bg-primary":""}`} onClick={()=>{setShowFilter(!showFilter)}}>Filters</button>
        <div className={`${showFilter?"flex":"hidden sm:flex"} duration-200 flex-col gap-4 text-sm transition-all text-gray-600 `}>
         <button onClick={()=>specialty==='General physician'?navigate('/doctors'): navigate('/doctors/General physician')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "General physician"?"bg-indigo-100 text-black":""} `}>General physician</button>
         <button onClick={()=>specialty==='Gynecologist'?navigate('/doctors'): navigate('/doctors/Gynecologist')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Gynecologist"?"bg-indigo-100 text-black":""}  `}>Gynecologist</button>
         <button onClick={()=>specialty==='Dermatologist'?navigate('/doctors'): navigate('/doctors/Dermatologist')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specialty === "Dermatologist"?"bg-indigo-100 text-black":""}  `}>Dermatologist</button>
         <button onClick={()=>specialty==='Pediatricians'?navigate('/doctors'): navigate('/doctors/Pediatricians')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer   ${specialty === "Pediatricians"?"bg-indigo-100 text-black":""}  `}>Pediatricians</button>
         <button onClick={()=>specialty==='Neurologist'?navigate('/doctors'): navigate('/doctors/Neurologist')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer   ${specialty === "Neurologist"?"bg-indigo-100 text-black":""}  `}>Neurologist</button>
         <button onClick={()=>specialty==='Gastroenterologist'?navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={`w-[64vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer   ${specialty === "Gastroenterologist"?"bg-indigo-100 text-black":""}  `}>Gastroenterologist</button>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y- ">
          {filterDoc.map((doctor, index) => (
           
           <CardDoctor key={index} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
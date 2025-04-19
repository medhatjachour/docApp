
  
  import { useNavigate } from "react-router-dom";
  import { DoctorInterface } from "../types/doctorsTypes";
  
  const CardDoctor: React.FC<DoctorInterface> = ({
    _id,
    name,
    image,
    speciality,
  }) => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => {navigate(`/appointment/${_id}`);scrollTo(0,0)}}
        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-11px] transition-all duration-500"
      >
        <img className="bg-blue-50" src={image} alt={name} />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p> <p>available</p>
          </div>
          <p className="text-gray-900 text-lg font-medium">{name}</p>
          <p className="text-gray-600 text-sm">{speciality}</p>
        </div>
      </button>
    );
  };
  
  export default CardDoctor;
  

import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { useContext, useEffect, useState } from "react";
import CardDoctor from "../components/CardDoctor";
import { DoctorInterface } from "../types/doctorsTypes";

const Doctors = () => {
  const navigate = useNavigate();
  const { specialty } = useParams();
  const { doctors } = useContext(AppContext) || { doctors: [] };
  const [filterDoc, setFilterDoc] = useState<DoctorInterface[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [minFee, setMinFee] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [availability, setAvailability] = useState(false);
  const maxFee = 600;

  const applyFilter = () => {
    let filtered = doctors;
    // Specialty filter
    if (specialty) {
      filtered = filtered.filter((doctor) => doctor.speciality === specialty);
    }

    // Fee range filter (min is always 0)
    filtered = filtered.filter((doctor) => doctor.fees >= minFee);

    // Rating filter (float comparison)
    filtered = filtered.filter((doctor) => doctor.rating >= minRating);
    // Availability filter
    if (availability) {
      filtered = filtered.filter((doctor) => doctor.availability === true);
    }


    setFilterDoc(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialty, minFee, minRating, availability]);

  const resetFilters = () => {
    setMinFee(0);
    setMinRating(0);
    setAvailability(false);
    navigate('/doctors');
  };

  return (
    <div className="p-4">
      <p className="text-gray-600 mb-4">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* Filter Toggle Button for Mobile */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? "bg-indigo-500 text-white" : "bg-white"
            }`}
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters
        </button>

        {/* Filter Panel */}
        <div
          className={`${showFilter ? "flex" : "hidden sm:flex"
            } flex-col gap-4 text-sm text-gray-600 w-full sm:w-64 transition-all duration-200`}
        >
          {/* Specialty Filters */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Specialty</h3>
            {[
              "General physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist",
            ].map((spec) => (
              <button
                key={spec}
                onClick={() =>
                  specialty === spec
                    ? navigate('/doctors')
                    : navigate(`/doctors/${spec}`)
                }
                className={`w-full text-left pl-3 py-1.5 border border-gray-300 rounded transition-all ${specialty === spec ? "bg-indigo-100 text-black" : ""
                  }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Fee Range Filter (Single Slider) */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Minimum Fee ($)</h3>
            <input
              type="range"
              min="0"
              max={maxFee}
              value={minFee}
              onChange={(e) => setMinFee(+e.target.value)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #e0e7ff ${(minFee / maxFee) * 100
                  }%, #e5e7eb ${(minFee / maxFee) * 100}%)`,
                accentColor: "#e0e7ff", // Indigo-100 for thumb
              }}
            />
            <div className="flex justify-between">
              <span>${minFee}</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Minimum Rating</h3>
            <select
              value={minRating}
              onChange={(e) => setMinRating(+e.target.value)}
              className="border border-gray-300 rounded p-1 bg-indigo-100"
            >
              {[0, 1, 2, , 3, 3.5, 4, 4.5, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Stars
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className=" flex justify-between pr-4 items-center ">
            <h3 className="font-semibold">Availability</h3>
            <input
              type="checkbox"
              checked={availability}
              onChange={(e) => setAvailability(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-indigo-500 focus:ring-indigo-200 cursor-pointer"
              style={{ accentColor: "#e0e7ff" }} />
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="w-full pl-3 py-1.5 border border-gray-300 rounded transition-all hover:bg-indigo-100"
          >
            Reset Filters
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterDoc.length > 0 ? (
            filterDoc.map((doctor, index) => (
              <CardDoctor key={index} doctor={doctor} />
            ))
          ) : (
            <p className="text-gray-600">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { DoctorInterface, TimeSlotInterface } from "../types/doctorsTypes";
import { assets } from "../assets/assets";
import RelatedDocs from '../components/RelatedDocs';

const Appointments = () => {
  const { docId } = useParams();

  const context = useContext(AppContext) || {
    doctors: [],
    currencySymbol: "$",
  };
  const { doctors, currencySymbol } = context;
  const [docInfo, setDocInfo] = useState<DoctorInterface | null>(null);
  // time slots
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docSlots, setDocSlots] = useState<TimeSlotInterface[][]>([]);
  const [docSlotsIndex, setDocSlotsIndex] = useState(2);
  const [docSlotsTime, setDocSlotsTime] = useState("");

  const fetchDocData = async () => {
    const doc = doctors.find((doc) => doc._id === docId);
    if (doc) {
      setDocInfo(doc);
    } else {
      console.error("doc is undefined");
    }
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    const today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date with index
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      // setting end time if the date with index
      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(23, 0, 0, 0);
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      const timeSlots: TimeSlotInterface[] = [];
      while (currentDate < endTime) {
        const formattedDate = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slots array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedDate,
        });
        // incrementing time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocData();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo ? (
    <div>
      {/* doc details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>
        <div className="flex-1 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* doc info */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}{" "}
            <img src={assets.verified_icon} alt="verified" className="w-5" />
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border  rounded-full text-xs">
              {docInfo.experience}
            </button>
          </div>
          {/* doc about */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="about" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee :{" "}
            <span className="text-gray-600">
              {currencySymbol} {docInfo.fees}
            </span>
          </p>
        </div>
      </div>
      {/* booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div
          className={`flex gap-3 items-center w-full overflow-x-scroll mt-4 horizontal-scroll`}
        >
          {docSlots.length >= 0 &&
            docSlots.map((slot, index) => (
              <button
              onClick={() => setDocSlotsIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  index === docSlotsIndex
                    ? "bg-primary"
                    : "border border-gray-200"
                }`}
              >
                <p>{slot[0] && daysOfWeek[slot[0].datetime.getDay()]}</p>
                <p>{slot[0] && slot[0].datetime.getDate()}</p>
              </button>
            ))}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 horizontal-scroll">
          {docSlots.length >= 0 &&
            docSlots[docSlotsIndex]?.map((slot, index) => (
              <button onClick={() => setDocSlotsTime(slot.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${slot.time ===docSlotsTime ? "bg-primary text-white" : "border border-gray-300"}`}
                key={index}
              >
                {slot.time.toLowerCase()}
              </button>
            ))}
        </div>
        <button className="bg-primary text-white py-3 text-sm px-14 rounded-full font-light my-6 mt-4">
        Book an appointment
        </button>
      </div>
      {/* list of related docs  */}
      <RelatedDocs docId = {docId} specialty = {docInfo.speciality}/>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Appointments;

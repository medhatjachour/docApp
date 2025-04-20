
// MyAppointments Component
import { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

const MyAppointments = () => {
  const context = useContext(AppContext);
  if (!context) {
    return <div>Error: AppContext not available</div>;
  }

  const { doctors, getBookings, cancelAppointment } = context;
  const bookings = getBookings();
  const [isUpdated, setIsUpdated] = useState(false);

  // Function to format date and time
  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })} | ${time}`;
  };

  return (
    <div>
      <p className="pb-3 mt-12 font-medium">My Appointments</p>
      <div>
        {bookings.length === 0 ? (
          <p className="text-gray-600">No appointments booked yet.</p>
        ) : (
          bookings.map((booking, index) => {
            // Find doctor details for the booking
            const doctor = doctors.find(d => d._id === booking.id);
            // if (!doctor) return null;        

            return (
              <div
                className="w-full grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
                key={index}
              >
                <div>
                  <img
                    className="w-32 bg-primary/50 rounded-lg"
                    src={doctor?.image}
                    alt={doctor?.name}
                  />
                </div>
                <div className="flex-1 text-sm text-zinc-600">
                  <p className="text-neutral-800 font-semibold">{booking.name}</p>
                  <p>{booking.specialty}</p>
                  <p className="text-zinc-700 font-medium mt-1">Address</p>
                  <p className="text-xs">{doctor?.address?.line1}</p>
                  <p className="text-xs">{doctor?.address?.line2}</p>
                  <p className="text-xs mt-1">
                    <span className="text-sm text-neutral-700 font-medium">
                      Date & Time:
                    </span>{' '}
                    {formatDateTime(booking.date, booking.time)}
                  </p>
                </div>
                <div></div>
                <div className="flex flex-col gap-2 justify-end">
              
                  <button
                    onClick={() =>{ cancelAppointment(booking);setIsUpdated(!isUpdated)}}
                    className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default MyAppointments;

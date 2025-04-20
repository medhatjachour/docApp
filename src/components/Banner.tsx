import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 lg:px-12 my-20 md:mx-10">
      {/* left */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-6">With 100+ Trusted Doctors</p>
        </div>
      </div>
      {/* right */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img src={assets.appointment_img} alt="doctor Appointment" className="w-full absolute bottom-0 right-0 max-w-md"/>
      </div>
    </div>
  );
};

export default Banner;

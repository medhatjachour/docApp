import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-12 lg:px-24">
        <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
            <h2 className="text-3xl mb:text-4xl gap-2 lg:text-5xl text-white font-semibold leading-tight md:leading-tight ">Book Appointment <br />
            With Trusted Doctors</h2>
            <div className="flex flex-col md:flex-row  items-center gap-3 text-white text-sm font-light">
                <img className="w-28" src={assets.group_profiles} alt="group profiles "/>
                <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
                schedule your appointment hassle-free.</p>
            </div>
            <a className="flex items-center gap-2 bg-white py-3 px-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-200" href="#specialty">Book appointment <img src={assets.arrow_icon} className="w-3" alt="arrow left" /> </a>
        </div>
        <div className="md:w-1/2 relative">
            <img src={assets.header_img} alt="doctor" className="w-full md:absolute bottom-0 h-auto rounded-lg"/>
        </div>
    </div>
  )
}

export default Header
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500">
        <p>
          {" "}
          Contact <span className="text-gray-700 font-semibold">Us</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          alt="contact_image"
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col gap-6 justify-center items-start">
          <p className="font-semibold text-lg text-gray-600 ">My OFFICE</p>
          <p className=" text-gray-500 ">
            1 see streat <br />
            emdan, Kfs, Egypt
          </p>
          <p className=" text-gray-500 ">Tel: (+20) 1015683986</p>
          <p className=" text-gray-500 ">Email: medhatashour19@gmail.com</p>
          <p className=" text-gray-600 font-semibold text-lg ">
            Careers at PRESCRIPTO
          </p>
          <p className=" text-gray-500 ">
            Learn more about our teams and job openings.
          </p>
          <button className="rounded-sm border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

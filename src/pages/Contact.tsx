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
          <p className="font-semibold text-lg text-gray-600 ">Our OFFICE</p>
          <p className=" text-gray-500 ">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className=" text-gray-500 ">Tel: (415) 555‑0132</p>
          <p className=" text-gray-500 ">Email: greatstackdev@gmail.com</p>
          <p className=" text-gray-600 font-semibold text-lg ">
            Careers at PRESCRIPTO
          </p>
          <p className=" text-gray-500 ">
            Learn more about our teams and job openings.
          </p>
          <button className="rounded-sm border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

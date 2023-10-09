import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../../assets/cul1.jpeg";
import image2 from "../../assets/cul2.jpg";
// import image3 from '../../assets/cul3.jpg'
import image3 from "../../assets/cul4.jpg";
const Culture = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }, []);
  return (
    <div className="mt-28 mb-24 flex flex-col lg:flex-row shadow-lg pl-5">
      <div className="lg:w-2/5 lg:mr-32" data-aos="fade-up">
        <h1 className="text-3xl g:text-4xl font-semibold text-center mb-12 text-blue-700">
          Our Office Culture
        </h1>
        <p className="text-gray-500 lg:text-base text-sm">
          Welcome to the heart of LaunchMasters, where passion meets precision and creativity intertwines with commitment. Discover the vibrant and collaborative atmosphere that defines LaunchMasters. Immerse yourself in an environment where every team member is valued, ideas are celebrated, and collaboration is the key to our success. From casual brainstorming sessions to milestone celebrations, our office culture reflects our dedication to creating not just events but memorable and impactful experiences. Join us on this behind-the-scenes journey and get a glimpse into what makes LaunchMasters a unique and inspiring place to work.
        </p>

        <div className="flex justify-center  gap-16 mt-10 mb-4">
        <button className="btn normal-case text-base font-medium bg-gradient-to-r from-blue-600 to-yellow-700  text-white hover:from-blue-700 hover:to-yellow-900">Get Started</button>
        <button className="btn normal-case text-base font-medium bg-gradient-to-r from-blue-600 to-yellow-700 text-white hover:from-blue-700 hover:to-yellow-900">Join Us</button>
        </div>
      </div>

      {/* images */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* left sided */}
        <div className="flex flex-col items-center justify-center space-y-4 mr-3">
          <img className="lg:w-[360px] rounded-lg" src={image1} alt="" />
          <div className="flex flex-col space-y-4">
            <img className="lg:w-[369px] rounded-t-lg" src={image2} alt="" />
          </div>
        </div>

        {/* right sided */}
        <img className=" lg:w-[280px] h-[460px] rounded-t-lg" src={image3} alt="" />
      </div>
    </div>
  );
};

export default Culture;

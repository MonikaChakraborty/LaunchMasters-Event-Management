import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { BsFillRocketTakeoffFill, BsFillCameraReelsFill, BsLightbulbFill, BsBarChartFill, BsGlobe, BsPeopleFill } from "react-icons/bs";
import { MdWorkspacePremium, MdColorLens } from "react-icons/md";
// import cul1 from '../../assets/cul1.jpeg'

const Details = () => {
  const { name } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        // Find the service with the matching name
        const selectedService = data.find((service) => service.name === name);
        setService(selectedService);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, [name]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-6">
        <div className="flex">
          <div className="mr-5 ml-6">
            <h1 className="bg-gradient-to-r from-blue-500 via-yellow-700 to-blue-500 text-center py-3 px-2 rounded text-white font-medium text-xl">
              {name}
            </h1>
            <p className="w-[390px] mt-4 text-base text-gray-900">
              {service.longDescription}
            </p>

            <div className="flex gap-2 mt-8 ">
              <BsFillRocketTakeoffFill className="h-7 text-blue-800"></BsFillRocketTakeoffFill>
              <h1 className="">Expert planning for successful product launches</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <BsFillCameraReelsFill className="text-purple-900 h-6"></BsFillCameraReelsFill>
              <h1>Strategic media relations for extensive coverage</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <MdWorkspacePremium className="h-6 text-yellow-600"></MdWorkspacePremium>
              <h1>Premium experiences for high-profile guests.</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <MdColorLens className="h-6 text-pink-700"></MdColorLens>
              <h1>Immersive environments aligned with your brand</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <BsLightbulbFill className="h-5 text-yellow-400"></BsLightbulbFill>
              <h1>Cutting-edge tech for impactful presentations</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <BsBarChartFill className="h-5 text-lime-800"></BsBarChartFill>
              <h1>Post-event insights for continuous success</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <BsGlobe className="h-5 text-sky-500"></BsGlobe>
              <h1>Easily share service details on social media</h1>
            </div>

            <div className="flex gap-2 mt-2">
              <BsPeopleFill className="h-5 text-sky-800"></BsPeopleFill>
              <h1>Build trust with real client testimonials</h1>
            </div>
          </div>
          <div className="">
            <img className="rounded-lg w-[790px] h-[530px]" src={service.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import Navbar from "../Shared/Navbar/Navbar";
import img from "../../assets/subscribe-6472637_640.png";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1>subscribe</h1> */}
      <div className="mt-8 h-[80vh] bg-gradient-to-r from-blue-500 via-yellow-700 to-blue-500 rounded-lg flex justify-evenly gap-48 items-center ">
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl mb-6 font-medium text-white">Subscribe for Updates</h1>
            <p className="text-2xl mb-8 text-gray-300 font-semibold">Stay informed about our latest products and promotions</p>
          </div>
          <div className=" flex items-center">
          <TfiEmail className="text-gray-500 ml-2 absolute" size={20}></TfiEmail>
            <input
              type="text"
              
              placeholder="        Enter your email address"
              className=" lg:pr-24 py-3 border border-solid border-slate-300 border-r-0  rounded-l-lg"
            />
            <span className="text-white text-lg font-medium p-2.5 px-5 border border-blue-700 bg-blue-700 border-l-0 rounded-r-lg relative cursor-pointer">
              Subscribe Now
            </span>
          </div>
        </div>

        <div>
          <img className="w-[300px] h-[300px]" src={img} alt="" />
        </div>
      </div>



      
    </div>
  );
};

export default Subscribe;

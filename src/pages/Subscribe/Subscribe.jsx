import Navbar from "../Shared/Navbar/Navbar";
import img from "../../assets/subscribe-6472637_640.png";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1>subscribe</h1> */}
      <div className="max-w-screen-xl mx-auto">
      <div className="mt-8 lg:h-[70vh] bg-gradient-to-r from-blue-500 via-yellow-700 to-blue-500 rounded-lg flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-48 items-center p-4">
        <div className="flex flex-col">
          <div className="flex-col">
            <h1 className="mt-20 lg:mt-0 text-2xl lg:text-4xl mb-6 font-medium text-white">Subscribe for Updates</h1>
            <p className="lg:text-2xl mb-3 lg:mb-8 text-gray-300 font-semibold">Stay informed about our latest products and promotions</p>
          </div>
          <div className="flex items-center">
          <TfiEmail className="text-gray-500 ml-2 absolute " size={20}></TfiEmail>
            <input
              type="text"
              
              placeholder="        Enter your email address"
              className=" lg:pr-24 py-2 lg:py-3 border border-solid border-slate-300 border-r-0  rounded-l-lg"
            />
            <span className="text-sm text-white lg:text-lg font-medium lg:p-2.5 px-2 lg:px-5 border border-blue-700 bg-blue-700 border-l-0 rounded-r-lg relative cursor-pointer">
              Subscribe Now
            </span>
          </div>
        </div>

        <div>
          <img className="h-[40vh]" src={img} alt="" />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Subscribe;



// import Navbar from "../Shared/Navbar/Navbar";
// import img from "../../assets/subscribe-6472637_640.png";
// import { TfiEmail } from "react-icons/tfi";

// const Subscribe = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-screen-xl mx-auto">
//         <div className="mt-8 lg:h-[70vh] bg-gradient-to-r from-blue-500 via-yellow-700 to-blue-500 rounded-lg flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-8 items-center p-4 lg:p-8">
//           <div className="flex flex-col text-center lg:text-left lg:w-1/2">
//             <h1 className="text-xl lg:text-4xl mb-4 font-medium text-blue-700">Subscribe for Updates</h1>
//             <p className="lg:text-2xl lg:mb-8 text-gray-900 font-semibold">Stay informed about our latest products and promotions</p>
//             <div className="flex items-center w-full lg:w-auto">
//               <TfiEmail className="text-gray-500 " size={20} />
//               <input
//                 type="text"
//                 placeholder="Enter your email address"
//                 className="lg:pr-8 py-2 lg:py-3 border border-solid border-slate-300 border-r-0 rounded-l-lg w-full lg:w-auto"
//               />
//               <span className="text-sm lg:text-lg font-medium lg:p-2.5 px-4 lg:px-8 border border-blue-700 bg-blue-700 border-l-0 rounded-r-lg relative cursor-pointer mt-2 lg:mt-0">
//                 Subscribe Now
//               </span>
//             </div>
//           </div>

//           <div className="lg:w-1/2">
//             <img className=" h-[40vh] lg:h-[40vh]" src={img} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;

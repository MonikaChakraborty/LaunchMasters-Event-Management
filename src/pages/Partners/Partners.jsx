import Navbar from "../Shared/Navbar/Navbar";
import logo1 from "../../assets/1153.jpg";
import logo2 from "../../assets/1079.jpg";
import logo3 from "../../assets/1099.jpg";
import logo4 from "../../assets/1144.jpg";
import logo5 from "../../assets/1088.jpg";
import logo6 from "../../assets/1140.jpg";

const Partners = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1>partners</h1> */}
      <div className="mt-5 mr-36 ml-36 mb-4">
        <h1 className="bg-gradient-to-r from-blue-500 via-yellow-700 to-blue-500 text-center py-3 px-2 rounded text-white font-medium text-xl">
          Major Partners
        </h1>
        <p className="mt-4 text-base text-gray-900 text-center mb-10">
          Discover the major partners who contribute to our success.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6  gap-5">
        <div>
          {/* <img src={logo1} alt="" /> */}
          <img
            src={logo1}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>

        <div>
          <img
            src={logo2}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>

        <div>
          <img
            src={logo3}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>

        <div>
          <img
            src={logo4}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>

        <div>
          <img
            src={logo5}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>

        <div>
          <img
            src={logo6}
            alt=""
            className="w-full border border-gray-300 shadow-md rounded-md transform transition-transform hover:scale-105"
          />
        </div>
      </div>


      <div className=" ">
      <div className="stats shadow mt-10 flex lg:flex-row flex-col justify-center items-center">
        <div className="stat bg-blue-200 hover:scale-95 flex flex-col justify-center items-center">

          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat flex flex-col justify-center items-center bg-blue-200 hover:scale-95">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat bg-blue-200 flex flex-col justify-center items-center hover:scale-95 p-8">
          {/* <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
            </div>
          </div> */}
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Partners;

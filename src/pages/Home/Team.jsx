import image1 from "../../assets/cul1.jpeg";
import image2 from "../../assets/cul2.jpg";
// import image3 from '../../assets/cul3.jpg'
import image3 from "../../assets/cul4.jpg";
const Team = () => {
  return (
    <div className="mt-24 mb-24 flex ">
      <div className="w-2/5 mr-28">
        <h1 className="text-4xl font-semibold text-center mb-12 text-blue-700">
          Our Office Culture
        </h1>
        <p className="">
          Welcome to the heart of LaunchMasters, where passion meets precision and creativity intertwines with commitment. Discover the vibrant and collaborative atmosphere that defines LaunchMasters. Immerse yourself in an environment where every team member is valued, ideas are celebrated, and collaboration is the key to our success. From casual brainstorming sessions to milestone celebrations, our office culture reflects our dedication to creating not just events but memorable and impactful experiences. Join us on this behind-the-scenes journey and get a glimpse into what makes LaunchMasters a unique and inspiring place to work.
        </p>

        <div className="flex justify-center  gap-16 mt-10">
        <button className="btn text-base bg-gradient-to-r from-blue-700 to-yellow-700 text-white">Get Started</button>
        <button className="btn text-base bg-gradient-to-r from-blue-700 to-yellow-700 text-white">Join Us</button>
        </div>
      </div>

      {/* images */}
      <div className="flex justify-center items-center">
        {/* left sided */}
        <div className="flex flex-col items-center justify-center space-y-4 mr-3">
          <img className="w-[350px] rounded-lg" src={image1} alt="" />
          <div className="flex flex-col space-y-4">
            <img className="w-[350px] rounded-lg" src={image2} alt="" />
          </div>
        </div>

        {/* right sided */}
        <img className=" w-[280px] h-[460px] rounded-lg" src={image3} alt="" />
      </div>
    </div>
  );
};

export default Team;

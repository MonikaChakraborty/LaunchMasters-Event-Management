import { Link } from "react-router-dom";

const Services = ({ services }) => {
  const { name, image, price,  description } = services;
  return (
    <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration="800">
      <figure>
        <img className="w-[800px] h-[350px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-gray-600">{description}</p>

        <p className="text-gray-800 text-lg font-medium">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${name}`}>
            <button className="btn normal-case bg-blue-700 text-white text-lg hover:bg-blue-800">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

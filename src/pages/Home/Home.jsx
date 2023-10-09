// import Header from "../Shared/Header/Header";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Services from "./Services/Services";
import Culture from "./Culture";
import FAQs from "./FAQs";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {
    const services = useLoaderData();
    
    useEffect(() => {
        AOS.init();
      }, []);
      
    // console.log(services);
    return (
        <div className="">
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <h2 className="text-3xl font-poppins font-bold">This is home</h2> */}

            {/* services container */}
            <h2 className="mt-24 text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-12 text-blue-700"> Our Services</h2>
            <div className="grid md:grid-cols-2 gap-12">
                {
                    services.map(service => <Services key={service.name} services={service}></Services>)
                }
               
            </div>
            <Culture></Culture>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
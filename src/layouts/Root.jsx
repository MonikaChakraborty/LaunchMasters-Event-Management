import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
// import Footer from "../pages/Home/Footer";

const Root = () => {
    return (
        <div className=" font-poppins">
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <Toaster/>
        </div>
    );
};

export default Root;
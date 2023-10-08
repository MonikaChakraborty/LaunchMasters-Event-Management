import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
// import Footer from "../pages/Home/Footer";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins">
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <Toaster/>
        </div>
    );
};

export default Root;
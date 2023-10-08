import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Details = () => {
    const {name} = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <h1>Details</h1>
        </div>
    );
};

export default Details;
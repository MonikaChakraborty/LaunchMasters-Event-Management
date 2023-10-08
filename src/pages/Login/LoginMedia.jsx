import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginMedia = () => {




    const {user, googleLogin} = useContext(AuthContext);

    const handleMediaLogin = (media) => {
        media()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }



    return (
        <div>
            <div className="divider"> 
            <h1>Continue With</h1>
            </div>

            <div className="mt-5 mb-6 flex justify-around">
                <button onClick={() => handleMediaLogin(googleLogin)}  className="btn">Google</button>

                <button className="btn">Github</button>
            </div>
        
        </div>
    );
};

export default LoginMedia;
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";



const LoginMedia = () => {



    const navigate = useNavigate();

    const {user, googleLogin, githubLogin} = useContext(AuthContext);

    const handleMediaLogin = (media) => {
        media()
        .then(res => {
            toast.success('Login Successful');
      
          navigate('/')
          })
      
          .catch(error => {
            toast.error(error.message);
          })
    }



    return (
        <div>
            <div className="divider"> 
            <h1>Continue With</h1>
            </div>

            <div className="mt-5 mb-6 flex justify-around">
                <button onClick={() => handleMediaLogin(googleLogin)}  className="btn normal-case"><FcGoogle></FcGoogle>Google</button>
                

                <button onClick={() => handleMediaLogin(githubLogin)}  className="btn normal-case"><BsGithub></BsGithub>GitHub</button>
            </div>
        
        </div>
    );
};

export default LoginMedia;
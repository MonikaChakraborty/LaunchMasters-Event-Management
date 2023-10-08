import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import LoginMedia from "./LoginMedia";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log('location in the login', location);



  const handleSubmit = (e) => {
    e.preventDefault();



    // get input field values
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    // console.log(name, email, password);

    // validation
    if(password.length < 6){

      toast.error('The password is less than 6 characters')

    } 
    // else if(!/[A-Z]/.test(password)){

    //   toast.error('The password do not have a capital letter')

    // } else if(!/[!@#$%^&*]/.test(password)){
    //   toast.error('The password do not have a special character')
    // }


    // create a new user
    signIn(email, password)
    .then(res => console.log(res.user))

    // navigate user after login
    navigate(location?.state ? location.state : '/')

    .catch(error => console.log(error))
   
  }



  return (
    <div>
      <Navbar></Navbar>
      

      <div className="hero p-6 bg-base-200 mt-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-8">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
             
            </form>

            <p className="text-center mb-4">New Here? <Link className="text-blue-600 font-bold" to="/register">Create an account</Link></p>

            <LoginMedia></LoginMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

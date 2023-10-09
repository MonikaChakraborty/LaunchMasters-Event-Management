import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import LoginMedia from "../Login/LoginMedia";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get input field values

    const name = e.target.name.value;

    const email = e.target.email.value;

    const photo = e.target.photo.value;

    const password = e.target.password.value;

    // console.log(name, email, password);

    // validation
    //   if(password.length < 6){

    //     toast.error('The password is less than 6 characters')

    //   }
    //   else if(!/[A-Z]/.test(password)){

    //     toast.error('The password do not have a capital letter')

    //   } else if(!/[!@#$%^&*]/.test(password)){
    //     toast.error('The password do not have a special character')
    //   }

    //   // create a new user
    //   createUser(email, password)
    //   .then(res => {
    //     handleUpdateProfile(name, photo)
    //     .then(() => {
    //       toast.success('Registration Successful');

    //       navigate('/')
    //     })
    //   })
    //   .catch(error => {
    //     toast.error(error.message);
    //   })

    // }

    try {
      // Validation
      if (password.length < 6) {
        throw new Error("The password is less than 6 characters");
      } else if (!/[A-Z]/.test(password)) {
        throw new Error("The password does not have a capital letter");
      } else if (!/[!@#$%^&*]/.test(password)) {
        throw new Error("The password does not have a special character");
      }

      // Create a new user
      const userCredential = await createUser(email, password);

      // Update user profile
      await handleUpdateProfile(name, photo);
      toast.success("Registration Successful");

      // navigate user after register
      navigate("/");
    } catch (error) {
      // Display error toast
      toast.error(error.message);
    }
  };

  // login user

  return (
    <div>
      <Navbar></Navbar>

      <div className="hero p-2 bg-base-200 mt-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-8">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

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
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>

            <p className="text-center mb-4">
              Already Have an account?{" "}
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
            </p>

            <LoginMedia></LoginMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

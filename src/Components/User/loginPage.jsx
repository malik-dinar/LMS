import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { baseUrl } from "../../utils/constant";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserData } from "../../Redux/user-tutor/user";
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch= useDispatch()


  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter your password and email");
    }
    await axios.post(`${baseUrl}/users/login`, {
      email,
      password
    }).then((result) => {
      console.log(result.data);
        if (!result.data.accessToken) {
          setError(result.data.message);
          return false;
        }
        if (result.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(result.data.accessToken));
          localStorage.setItem("auth", true);
          const user = jwt_decode(result.data.accessToken); 
          dispatch(
            setUserData({
              userData: {
                name: user.user.username,
                _id: user.user.id,
              },
            })
          );
          navigate("/user/home");
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log("error", e);
      });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/user/home");
    }
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden">
        <div className="bg-blue-550 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
          <img
            src="/Malik_dinar_A_student_studying_c38f09a5-8b41-401b-9a18-7ea947b1284e.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl font-bold mt-5">EduLearn Login</h1>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <div>
              <label className="block text-gray-700 ">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>

            <h1 className="text-red-500">{error}</h1>
            <hr className="my-6 border-gray-300 w-full" />

            {/* <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    {" "}
                    
                    <use xlinkHref="#a" overflow="visible" /> /* replace
                    
                  </clipPath>
                  <path
                    clipPath="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clipPath="url(#b)" 
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"  
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)" 
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4"> Log in with Mail </span>
              </div>
            </button> */}

            <p className="mt-8">
              Need an account?
              <a
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={() => navigate("/user/signup")}
              >
                Create an account
              </a>
            </p>
            <p className="mt-8">
              Are you a tutor?
              <a
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={() => navigate("/tutor/login")}
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

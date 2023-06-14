import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../../utils/constant";
import axios from "axios";

function SignupTutor(){
    const navigate = useNavigate();
    const [tutorname, setTutorName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("");
    const [error,setError] = useState("")


    const handleSubmit = async ()=>{
        //event.preventDefault();
        if(!email || !password || !tutorname){
          setError("All fields are mandatory")
          return false;
        }
        if(password !== confirmPassword){
            setPasswordMatch("Passwords do not match");
            return false
        }else if(password.length<6){
            setPasswordMatch("Password length must be greater than 5");
            return false;
        }
        const validate=nameCheck(tutorname,email);
        if(!validate){
          setError("Invalid credentials");
          return false;
        }
        let result = await axios.post(`${baseUrl}/tutors/register`, {
            tutorname,
            email,
            password
        }).then((result) => {
            if (result.data.message) {
                setPasswordMatch(result.message)
                return false
            }
            else{
                navigate('/tutor/login')
            }
        })
    }

    const nameCheck=(name,email)=>{   
      const nameRegex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
      const emailRejex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
      if(!nameRegex.test(name)){
        return false;
      }else if(!emailRejex.test(email)){
        return false;
      }else{
        return true;
      }
    }

    return(
        <>
        <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden">
          <div className="bg-blue-550 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
            <img src="/tutor.png" alt="" className="w-full h-full object-cover" />
          </div>
  
          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full h-100">
              {/* <h1 className="text-xl font-bold">EduLearn Signup</h1> */}
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Signup into your account As Tutor
              </h1>
  
              
                <div>
                  <label className="block text-gray-700 ">User Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={tutorname}
                    onChange={(e)=>setTutorName(e.target.value)}
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 ">Email Address</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Confirm password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <h1 className="text-red-500" >{passwordMatch}{error}</h1>
                <div className="text-right mt-2">
                  <a
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 cursor-pointer"
                    onClick={()=>navigate('/tutor/login')}
                  >
                    Already Have an Account ?
                  </a>  
                </div>
  
                <button
                  onClick={handleSubmit}
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Signup
                </button>
  
              <hr className="my-6 border-gray-300 w-full" />
  
              {/* <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
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
                      <use xlink:href="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4"> Log in with Mail </span>
                </div>
              </button> */}
  
              {/* <p className="mt-8">
                Need an account?
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p> */}
            </div>
          </div>
        </section>
      </>
    )
}

export default SignupTutor;
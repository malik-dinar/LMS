import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { baseUrl } from "../../utils/constant";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setData } from "../../Redux/user-tutor/tutor";
import axios from "axios";

function LoginTutor() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const dispatch= useDispatch()


  const handleSubmit= async ()=>{
    if(!email || !password){
       setError("Please enter your password and email")
    }
    await axios.post(`${baseUrl}/tutors/login`,{
      email,
      password
    }).then((result)=>{
      if(!result.data.accessToken){
        setError(result.data.message);
        return false;
      }
      if(result.data.accessToken) {
        localStorage.setItem('tutor',JSON.stringify(result.accessToken));
        localStorage.setItem("auth", true) 
        const user = jwt_decode(result.data.accessToken);  
        dispatch(
          setData({
            tutorData: {
              name: user.tutor.tutorname,
              email: user.tutor.email,
              _id: user.tutor.id,
            },
          })
        );
        navigate('/tutor/home')
      }
    }).catch((e)=>{
      setError(e.response.data.message);
      console.log('error',e);
    })
  }

  useEffect(() => {
    const user = localStorage.getItem("tutor");
    if (user) {
      navigate("/tutor/home");
    }
  }, []);
  


  return (
    <>
      <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden">
        <div className="bg-blue-550 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
          <img src="/tutor.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl font-bold">EduLearn Login</h1>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log into your Tutor account
            </h1>
              <div>
                <label className="block text-gray-700 ">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                Log In
              </button>

            <h1 className="text-red-500" >{error}</h1>
            <hr className="my-6 border-gray-300 w-full" />

            

            <p className="mt-8">
              Need an account?
              <a
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={()=>navigate('/tutor/signup')}
              >
                Create an account
              </a>
            </p>
            <p className="mt-8">
              Login As Student?
              <a
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={()=>navigate('/user/signup')}
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

export default LoginTutor;

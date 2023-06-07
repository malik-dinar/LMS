import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../../utils/constant";

function Signup(){
    const navigate = useNavigate();
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("");
    const [error,setError] = useState("")


    const handleSubmit = async ()=>{
        //event.preventDefault();
        if(!email || !password || !username){
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
        const validate=nameCheck(username,email);
        if(!validate){
          setError("Invalid credentials");
          return false;
        }
        let result = await fetch(`${baseUrl}/users/register`, {
            method: 'post',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        result.json().then((result) => {
            if (result.message) {
                setPasswordMatch(result.message)
                return false
            }
            else{
                console.log(result)
                navigate('/user/login')
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
            <img src="/Malik_dinar_A_student_studying_c38f09a5-8b41-401b-9a18-7ea947b1284e.png" alt="" className="w-full h-full object-cover" />
          </div>
  
          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Signup in to your account
              </h1>
                <div>
                  <label className="block text-gray-700 ">User Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={username}
                    onChange={(e)=>setName(e.target.value)}
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
                    onClick={()=>navigate('/user/login')}
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
            </div>
          </div>
        </section>
      </>
    )
}

export default Signup;
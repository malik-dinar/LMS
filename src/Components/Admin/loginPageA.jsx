import { Navigate, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { baseUrl } from "../../utils/constant";

function LoginPageA() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter your password and email");
    }
    let result = await fetch(`${baseUrl}/admin/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result
      .json()
      .then((result) => {
        if (!result.accessToken) {
          setError(result.message);
          return false;
        }
        if (result.accessToken) {
          localStorage.setItem("user", JSON.stringify(result.accessToken));
          localStorage.setItem("auth", true);
          navigate("/admin/dashboard");
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden">
        <div className="bg-blue-550 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
          <img
            src="/admin.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl font-bold">EduLearn Admin Login</h1>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPageA;

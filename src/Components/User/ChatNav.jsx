import React from "react";
import { useNavigate } from "react-router-dom";

function ChatNav({ user }) {
  const navigate = useNavigate();
  return (
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <a
              className="cursor-pointer text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              onClick={() =>{
                user === "student" ? navigate("/user/home") : navigate("/tutor/home")
              }} 
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatNav;

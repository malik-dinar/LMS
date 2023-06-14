import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import React from 'react'
import AdminNav from "./AdminNav";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/user-tutor/user";
import { useNavigate } from "react-router-dom";


const DefaultLayout =({children}) =>{
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    dispatch(
      setUserData({
        userData: { name: null, _id: null },
      })
    );
    navigate("/admin/login");
  };

  return (
    <>
       {isSmallScreen && <AdminNav />}
      <div className="flex min-h-screen 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
        <div className="bg-white w-1/5 py-10 pl-10  min-w-min   border-r border-indigo-900/20 hidden md:block ">
          <div className=" font-bold text-2xl">EduLearn</div>
          <div className="mt-12 flex flex-col space-y-7 text-gray-500 font-medium">
            {/* <a
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold "
              href="#"
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span>Dashboard</span>
            </a> */}
            {/* <Link
              className="flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold "
              to="#"
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
                <span>Transactions</span>
              </svg>
            </Link> */}
            {/* <Link
              to={'/admin/dashboard'} className=" flex items-center space-x-2 py-1  font-semibold  hover:border-r-2 hover:border-r-indigo-700 pr-20 cursor-pointer"
              // onClick={handlesubmit3}
            >
              <svg
                className="h-5 w-5 stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span>Dashbord</span>
            </Link> */}
            <Link to={'/admin/user-management'}
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold cursor-pointer"
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                ></path>
              </svg>
              <span>User management</span>
            </Link>
            <Link to={'/admin/tutor-management'}
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold cursor-pointer"
              // onClick={() => navigate("/admin/tutor-management")}
              // onClick={handlesubmit2}
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                ></path>
              </svg>
              <span>Tutor management</span>
            </Link>
            <Link to={'/admin/add-category'}
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold cursor-pointer"
              // onClick={() => navigate("/admin/add-category")}
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              <span>Add course Category</span>
            </Link>
            <Link to={'/admin/courses'}
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold cursor-pointer"
              // onClick={() => navigate("/admin/courses")}
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              <span>Manage courses</span>
            </Link>
            <Link to={'/admin/reports'}
              className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold cursor-pointer"
              // onClick={() => navigate("/admin/reports")}
            >
              <svg
                className="h-5 w-5 group-hover:stroke-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              <span>Check Reports</span>
            </Link>
          </div>
        </div>
        <main className="bg-indigo-50/60 w-screen sm:py-10 px-3 py-0 sm:px-10 h-screen overflow-y-scroll">
          <div className="flex justify-end">
          <GrLogout onClick={logOut} className="cursor-pointer"/>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}

export default DefaultLayout;

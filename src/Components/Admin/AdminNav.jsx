import React from "react";
import { Link } from "react-router-dom";


function AdminNav() {
  return (
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row ">
          <div className="flex flex-row items-center justify-between p-4">
            <Link
            to="/admin/user-management"
              className="cursor-pointer textbase font-normal  text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              user 
            </Link>
            <hr className="h-full w-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Link
            to="/admin/tutor-management"
              className="cursor-pointer text-base font-normal  text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              tutor 
            </Link>
            <Link
            to="/admin/add-category"
              className="whitespace-nowrap cursor-pointer text-base font-normal  text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              add <br /> course
            </Link>
            <Link
            to="/admin/courses"
              className="whitespace-nowrap cursor-pointer text-base font-normal  text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              manage <br /> course
            </Link>
            <Link
            to="/admin/reports"
              className="cursor-pointer text-base font-normal  text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;

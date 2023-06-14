import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { baseUrl } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ListCourseUser() {
  useEffect(() => {
    getCourse();
  }, []);
  const location = useLocation();
  const { category } = location.state || {};
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  // const data = useSelector((state) => state.tutorData.value);
  const getCourse = async () => {
    await axios
      .get(`${baseUrl}/users/course-list`, {
        params: {
          category: category,
        },
      })
      .then( result => setCourse(result.data));
  };

  return (
    <>
      <div className="bg-blue h-screen flex flex-col md:flex-row items-center overflow-y-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            className="block ml-16 md:text-4xl mb-2 w-606.63 left-118 
         font-inter font-sans  leading-10 text-center
         text-gray-100"
          ></h2>
          <div className="flex flex-wrap items-center justify-center">
            {course.length ? (
              course.map((items) => {
                return (
                  <div
                    onClick={() =>
                      navigate("/user/videos", { state: { id: items._id } })
                    }
                    className="max-w-sm w-full sm:w-full lg:w-1/2 py-4 px-4 lg:px-6 cursor-pointer"
                    key={items._id}
                  >
                    <div className="p-10 shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                      <h2 className="text-3xl text-white font-bold mb-4">
                        {items.courseName}
                      </h2>
                      <h3 className="text-xl text-white font-semibold mb-2">
                        {items.category}
                      </h3>
                      <p className="text-lg text-white">{items.description}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <h1  className="text-white">
                  Unfortunately, there are currently no available courses for
                  you to watch. However, you can check back at a later time to
                  see if any become available.
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCourseUser;

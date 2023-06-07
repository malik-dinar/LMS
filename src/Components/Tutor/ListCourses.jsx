import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

function ListCourses() {
  useEffect(() => {
    getCourse();
  }, []);

  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  const data = useSelector((state) => state.tutorData.value);
  const getCourse = async () => {
    let result = await fetch(`${baseUrl}/tutors/course/${data._id}`);
    result = await result.json();
    setCourse(result);
  };

  return (
    <>
      <div className="bg-blue h-screen flex flex-col md:flex-row items-center">
        <div className="max-w-6xl mx-auto">
          <h2
            className="block ml-16 md:text-4xl mb-2 w-606.63 left-118 
         font-inter font-sans  leading-10 text-center
         text-gray-100 text-3xl  font-medium"
          >
            Your courses
          </h2>
          <div className="flex flex-wrap items-center justify-center mb-14">
            {course.length ? (
              course.map((items) => {
                return (
                  <div
                    onClick={() =>
                      navigate("/tutor/video", { state: { id: items._id } })
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
                {" "}
                <h2 className="text-3xl font-bold mb-4">
                  No course availabe add course first
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCourses;

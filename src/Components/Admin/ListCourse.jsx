import React from "react";
import { MdDelete } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import Pagination from "../common/Pagination";
import Swal from "sweetalert2";

function ListCourse() {
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  let currentPage = useRef();

  useEffect(() => {
    getAllCourses();
    currentPage.current = 1;
  }, []);

  const getAllCourses = async () => {
    axios
      .get(`${baseUrl}/users/all-course`, {
        params: {
          page: currentPage.current,
          limit: 3,
        },
      })
      .then((result) => {
        setTotalPages(result.data.totalPages);
        setCourses(result.data.course);
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getAllCourses();
  };

  const deleteVideo = async (courseId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
          async () => {
            await axios
              .delete(`${baseUrl}/admin/course?courseId=${courseId}`)
              .then(async () => {
                axios.get(`${baseUrl}/users/all-course`).then((result) => {
                  setCourses(result.data);
                });
              });
          }
        );
      }
    });
  };
  return (
    <>
      <h1 className="ml-5 underline">List Courses</h1>
      <div className="flex flex-wrap">
        {courses.map((items) => {
          return (
            <div className="" key={items._id}>
              <div className="max-w-6xl mx-auto  w-96 h-96 ">
                <h2
                  className="block ml-16 md:text-4xl mb-2 w-606.63 left-118 
         font-inter font-sans  leading-10 text-center bg-gray-200
         text-gray-100"
                ></h2>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="max-w-sm w-full sm:w-full py-4 px-4 lg:px-6 cursor-pointer">
                    <div className="p-10 shadow-xl rounded-lg overflow-hidden">
                      <div className="flex w-64 h-36 overflow-hidden items-center">
                        <img className="w-" src={`${items.path}`} alt="" />
                      </div>
                      <div>
                        <h2 className="text-2xl  font-bold mb">
                          {items.courseName}
                        </h2>
                        <h3 className="text-xl  font-semibold mb-2 whitespace-nowrap">
                          {items.description}
                        </h3>
                        <p className="text-lg ">{items.category}</p>
                      </div>
                      <div className="flex justify-end">
                        <div onClick={() => deleteVideo(items._id)}>
                          <button
                            className="flex bg-red-400   hover:bg-red-800 focus:ring-4 focus:outline-none
                         focus:ring-red-300 font-medium rounded-lg text-sm w-full w-auto text-center dark:bg-red-600 p-1
                          dark:hover:bg-red-700 dark:focus:ring-red-800 mt-3"
                          >
                            Delete
                            <MdDelete className="mt-1 ml-1 cursor-pointer  hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {courses && courses?.length > 0 ? (
        <div className="mt-4 mb-4">
          <Pagination
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />
        </div>
      ) : (
        <>
          <h1 className="ml-4 mb-4">No result found </h1>
        </>
      )}
    </>
  );
}

export default ListCourse;

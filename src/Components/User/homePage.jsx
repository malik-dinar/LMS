import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/constant";
import Pagination from "../Common/Pagination";
import { useRef } from "react";
import axios from "axios";
import Trending from "./Trending";

function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [courses, setCourses] = useState([]);

  let currentPage = useRef();

  useEffect(() => {
    getCourse();
    getCategories();
    currentPage.current = 1;
  }, []);

  const getCategories = async () => {
    axios
      .get(`${baseUrl}/users/category`, {
        params: {
          page: currentPage.current,
          limit: 3,
        },
      })
      .then((result) => {
        setTotalPages(result.data.totalPages);
        setCategory(result.data.CourseCategory);
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getCategories();
  };
  
  const getCourse = async () => {
    await axios
      .get(`${baseUrl}/users/trending`)
      .then((result) => setCourses(result.data));
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden bg-blue cursor-pointer">
        <div className="bg-blue w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-head text-xl md:text-3xl font-bold leading-tight mt-12">
              The capacity to learn is a gift; the ability to learn is a skill;
              the willingness to learn is a choice.
            </h1>
            <div className="mt-5">
              <h1 className="block text-gray-300 font-mono text-2xl ">
                "The harder you work for something, the greater you'll feel
                when you achieve it"
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-blue">
          <img src="/Home.png" alt="" className="" />
        </div>
      </section>
      <div className="bg-blue overflow-x-hidden">
        <h2 className="italic block text-2xl sm:text-2xl 2xl:text-4xl ml-5  md:text-4xl mb-2 w-606.63 left-118 font-inter font-semibold leading-10 text-gray-100">
          What features do we have to offer?
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6">
              <div className="shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                <img
                  className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                  src="/feature2.png"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="text-center tracking-wide text-sm font-bold text-white">
                    Test your knowledge after each lesson!
                  </h1>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3">
              <div className=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                <img
                  className="bg-cover bg-center h-20 p-4 mx-auto mt-8 cursor-pointer"
                  src="/feature3.png"
                  alt=""
                  onClick={() => navigate("/tutor/login")}
                />
                <div className="p-4">
                  <h1 className="text-center tracking-wide text-sm font-bold text-white">
                    Use our platform to share your knowledge
                  </h1>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3 ">
              <div className=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                <img
                  className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                  src="/feature4.png"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="text-center tracking-wide text-sm font-bold text-white">
                    Give us feedback and let's grow together
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue overflow-x-hidden">
        <h2 className="italic block text-2xl sm:text-2xl 2xl:text-4xl ml-16 md:text-4xl mb-2 w-606.63 left-118 font-inter font-semibold leading-10 text-gray-100">
          Our Courses
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            {category.map((items) => {
              return (
                <div
                  className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6 cursor-pointer"
                  onClick={() =>
                    navigate("/user/course", {
                      state: { category: items.name },
                    })
                  }
                  key={items._id}
                >
                  <div className=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                    <img
                      className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                      src={items.path}
                      alt=""
                    />
                    <div className="p-4">
                      <h1 className="text-center tracking-wide text-sm font-bold text-white">
                        {items.name}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-blue">
        <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
      </div>
      <Trending courses={courses}/>
    
    </>
  );
}

export default Home;

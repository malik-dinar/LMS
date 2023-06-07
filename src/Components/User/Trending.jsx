
import { useNavigate } from "react-router-dom";


function Trending({ courses }) {
  const navigate = useNavigate();

  return (
    <div className="bg-blue overflow-x-hidden" >
      <h2 className="italic block text-2xl sm:text-2xl 2xl:text-4xl ml-16 md:text-4xl mb-2 w-606.63 left-118 font-inter font-semibold leading-10 text-gray-100">
        Trending Courses
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {courses.map((items) => (
            <div
              className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6 cursor-pointer"
              key={items._id}
              onClick={() =>
                navigate("/user/videos", { state: { id: items[0]._id } })
              }
            >
              <div className=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                <img
                  className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                  src={`${items[0].path}`}
                  alt={`${items[0].path}`}
                />
                <div className="p-2 ">
                  <h1 className="text-center tracking-wide text-sm font-bold text-white">
                    {items[0].courseName}
                  </h1>
                </div>
                <h1 className="text-center tracking-wide text-sm font-bold text-white p-1">
                  {items[0].description}
                </h1>
                <h1 className="text-center tracking-wide text-sm font-bold text-white p-1">
                  {items[0].category}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;

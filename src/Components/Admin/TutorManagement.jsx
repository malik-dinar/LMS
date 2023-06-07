import { useEffect, useState, useRef } from "react";
import Pagination from "../Common/Pagination";
import axios from "axios";
import { baseUrl } from "../../utils/constant";

function TutorManagementPage() {
  const [tutor, setTutors] = useState();
  const [active, setActive] = useState(true);
  const [totalPages, setTotalPages] = useState();
  let currentPage = useRef();

  useEffect(() => {
    getTutors();
    currentPage.current = 1;
  }, [active]);

  const getTutors = async () => {
    axios
      .get(`${baseUrl}/admin/tutors`, {
        params: {
          page: currentPage.current,
          limit: 3,
        },
      })
      .then((result) => {
        setTotalPages(result.data.totalPages);
        setTutors(result.data.tutors);
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getTutors();
  };

  const block = async (userId) => {
    try {
      await fetch(`${baseUrl}/admin/block/tutor/${userId}`, {
        method: "put",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      }).then(() => {
        setActive(!active);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const unblock = async (userId) => {
    try {
      await fetch(`${baseUrl}/admin/un-block/tutor/${userId}`, {
        method: "put",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      }).then(() => {
        setActive(!active);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    let result = await axios.get(`${baseUrl}/admin/searchTutor/${key}`);
    result = result.data;
    setTutors(result);
  };

  return (
    <>
      <h1 className="ml-1 underline">Tutor Management</h1>
      <div className="mt-8">
        <div className="relative sm:overflow-x-hidden overflow-x-auto shadow-md sm:rounded-lg">
          <div className="pb-4 bg-white dark:bg-gray-900 p-3">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                onChange={searchHandle}
                className="block ml-8 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 ml-8">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  SL No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Tutor name
                </th>
                <th scope="col" className="px-6 py-3">
                  mail
                </th>
                {/* <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tutor ? (
                tutor.map((items, index) => {
                  return (
                    <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <h1 className="font-bold">
                            {3 * currentPage.current - 3 + (index + 1)}
                          </h1>
                        </div>
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {items.tutorname}
                      </td>
                      <td className="px-6 py-4">{items.email}</td>

                      <td className="px-6 py-4">
                        {items.isActive ? (
                          <button
                            onClick={() => block(items._id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            Block
                          </button>
                        ) : (
                          <button
                            onClick={() => unblock(items._id)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            Un Block
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>

          {tutor?.length > 0 ? (
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
        </div>
      </div>
    </>
  );
}

export default TutorManagementPage;

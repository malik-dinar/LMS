import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../../utils/constant";
import Iframe from "../common/Frame";

function Reports() {
  const [reportDatas, setReportDatas] = useState();
  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    axios
      .get(`${baseUrl}/users/report`)
      .then((result) => {
        setReportDatas(result.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteVideo = async (courseId, videoId) => {
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
            await axios.delete(`${baseUrl}/tutors/video`, {
              params: {
                courseId: courseId,
                videoId: videoId,
              },
            }).then(()=>{
              getReports();
            })
          }
        );
      }
    });
  };

  return (
    <>
      <h1 className="ml-3 underline">reports</h1>

      <div className="relative overflow-x-auto mt-2 ml-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course name
              </th>
              <th scope="col" className="px-6 py-3">
                course Id
              </th>
              <th scope="col" className="px-6 py-3">
                video Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Id ( who reported the video ) / Messages
              </th>
              <th scope="col" className="px-6 py-3">
                Take Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reportDatas ? (
              reportDatas.map((items, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {items.title}
                  </th>
                  <td className="px-6 py-4">{items.courseId}</td>
                  <td className="px-6 py-4">{items.videoId}</td>
                  {items.reports ? (
                    items.reports.map((item, index) => {
                      return (
                        <div key={index}>
                          <td className="px-6 py-4">{item.userId}</td>
                          <td className="px-6 py-4">{item.data}</td>
                          {index !== items.reports?.length - 1 && (
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                  <td className="px-6 py-4">
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => deleteVideo(items.courseId, items.videoId)}
                    >
                      Take actions
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <><h1>No reports found</h1></>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {reportDatas ? (
          reportDatas.map((items, index) => {
            return (
              <div className="flex flex-wrap justify-evenly" key={index}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
                  <Iframe courseId={items.courseId} videoId={items.videoId} />
                  <div className="p-5">
                    <h5 className="mt-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items.title}
                    </h5>
                    <h5 className=" mt-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items.courseId}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Reports;

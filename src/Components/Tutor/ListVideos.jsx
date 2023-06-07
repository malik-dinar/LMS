import React from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { baseUrl } from "../../utils/constant";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Iframe from "../../Components/common/Frame";

function ListVideos({ videos, id }) {
  useEffect(() => {
    setVideo(videos);
  }, [videos]);

  const [video, setVideo] = useState([]);

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
            await axios
              .delete(`${baseUrl}/tutors/video`, {
                params: {
                  courseId: courseId,
                  videoId: videoId,
                },
              })
              .then(async () => {
                await axios
                  .get(`${baseUrl}/users/videos`, {
                    params: {
                      id: id,
                    },
                  })
                  .then((result) => {
                    setVideo(result.data.videos);
                  });
              });
          }
        );
      }
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly ">
        {video.map((items) => {
          return (
            <div
              className="mx-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10"
              key={items._id}
            >
              <div className="flex overflow-hidden items-center ">

              <Iframe courseId={id} videoId={items._id} />
              </div>
              {/* <div className="block align-middle h-40 w-80"></div> */}
              <div className="p-2">
                <h5 className="mb-2 text-sm font-medium text-black-400 hover:underline dark:text-blue-500">
                  {items.title}
                </h5>
                {/* <button
                  onClick={() => deleteVideo(id, items._id)}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                  <MdDelete className="cursor-pointer" />
                </button> */}

                 <div className="flex justify-end">
                        <div>
                        <button className="flex bg-red-400   hover:bg-red-800 focus:ring-4 focus:outline-none
                         focus:ring-red-300 font-medium rounded-lg text-sm w-full w-auto text-center dark:bg-red-600 p-1
                          dark:hover:bg-red-700 dark:focus:ring-red-800 mt-3"
                           onClick={() => deleteVideo(id, items._id)} >
                          Delete
                          <MdDelete className="mt-1 ml-1 cursor-pointer  hover:text-red-500" />
                        </button>
                        </div>
                      </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListVideos;

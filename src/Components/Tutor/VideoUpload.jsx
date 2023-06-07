import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/constant";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import Loader from "../Common/Loading";
import ListVideos from "./ListVIdeos";

function VideoUpload() {
  const location = useLocation();
  const { id } = location.state || {};
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    getVideos(id);
  }, []);

  const getVideos = async (id) => {
    await axios
      .get(`${baseUrl}/users/videos`, {
        params: {
          id: id,
        },
      })
      .then((result) => {
        setVideos(result.data.videos);
      });
  };

  const handleSubmit = () => {
    if (video && title) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("video", video);
      formData.append("id", id);
      axios.post(`${baseUrl}/tutors/video`, formData).then((response) => {
        setIsLoading(false);
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Video added successfully </i>,
          icon: "success",
        }).then(() => getVideos(id));
      });
    } else {
      setError("all Fields are required");
    }
  };

  const handleFileSelect = async (e) => {
    setError(null);
    const fileSizeInBytes = e.target.files[0].size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMB > 30) {
      return setError("file size exceeded 30 MB");
    }
    setVideo(e.target.files[0]);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="antialiased bg-indigo-50/60 px-6">
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
          <div className="pb-12">
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-1 gap-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="text-gray-700">
                    Enter the title of the video
                  </span>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                  />
                </label>

                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      upload the video only
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </label>
                <p className="text-red-700 ">{error}</p>

                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Course upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-evenly  bg-indigo-50/60 pb-20">
        <ListVideos videos={videos} id={id} />
      </div>
    </>
  );
}

export default VideoUpload;

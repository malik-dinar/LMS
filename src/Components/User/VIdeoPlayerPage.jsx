import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constant";
import { useState } from "react";
import Like from "./Like";
import Report from "./Report";
import Comment from "./Comment";
import VideoCard from "./VideoCard";
import Unavailable from "../Common/Unavailable";
import Navbar from "./Navbar";

function VideoPlayer() {
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState("");
  const [videoId, setVideoId] = useState("");
  const [url, setUrl] = useState([]);

  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    getVideo(id);
    getVideos(id);
  }, []);

  const getVideo = async (id) => {
    await axios
      .get(`${baseUrl}/users/video`, {
        params: {
          id: id,
        },
      })
      .then((result) => {
        setVideoId(result.data.videoId);
        setVideo(result.data.data);
      });
  };

  const getVideos = async (id) => {
    await axios
      .get(`${baseUrl}/users/videos`, {
        params: {
          id: id,
        },
      })
      .then((result) => {
        setVideos(result.data);
        setUrl(result.data.videos);
      });
  };

  const handleDataFromChild = (data) => {
    setVideo(data.data);
    setVideoId(data.videoId);
  };

  return url.length === 0 ? (
    <Unavailable />
  ) : (
    <div>
      <Navbar />

      <div className="md:ml-3 mt-1 md:mt-5 flex flex-col md:flex-row">
        <div className="video-main  md:mr-7  md:w-3/4">
          {/* <iframe
            className="border-none rounded-lg shadow-lg w-full sm:h-96 h-72"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
          <div className="aspect-video">
            <video class="w-full aspect-video object-cover" controls src={video} type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-between mb-5 mt-4">
            <h1 className="ml-2 break-words font-medium text-2xl leading-7 sm:font-semibold overflow-hidden block max-h-14  box-border truncate whitespace-normal">
              <p>{videos.courseName}</p>
              <p>{videos.description}</p>
              <p>{video.title}</p>{" "}
            </h1>

            <div className="flex items-center">
              <Like className="" courseId={id} videoId={videoId} />
              <Report className="" courseId={id} videoId={videoId} />
            </div>
          </div>
          <Comment courseId={id} videoId={videoId} />
        </div>
        <div className="video-list cursor-pointer">
          <VideoCard
            onData={handleDataFromChild}
            title={videos.courseName}
            description={videos.description}
            path={videos.path}
            videos={url}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

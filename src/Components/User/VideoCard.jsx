import React from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constant";

function VideoCard({ title, description, path, videos, id, onData }) {
  const switchVideo = async (idd, id) => {
    await axios
      .get(`${baseUrl}/users/video-switch`, {
        params: {
          id: id,
          video_id: idd,
        },
      })
      .then((result) => {
        onData(result.data);
      });
  };

  return (
    <ul>
      {videos.map((items) => {
        return (
          <li  className="flex mb-5" key={items._id} onClick={() => switchVideo(items._id, id)} >
            <div className="video-thumbnail">
              <img src={path} alt="" />
            </div>

            <div className="video-info">
              <h3 className="text-1xl sm:text-1xl 1xl:text-2xl">
                {items.title}
              </h3>
              <p>{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default VideoCard;

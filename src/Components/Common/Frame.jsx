import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/constant";
import axios from "axios";

function Iframe({ courseId, videoId }) {
  useEffect(() => {
    // getVideo(courseId, videoId);
  }, []);
  const [url, setUrl] = useState();
  const [boolean, setBoolean] = useState(false);

  const getVideo = async (courseId, id) => {
    await axios
      .get(`${baseUrl}/users/video-switch`, {
        params: {
          id: courseId,
          video_id: id,
        },
      })
      .then((result) => {
        setUrl(result.data.data);
      });
  };

  const handleIframeClick = () => {
    setBoolean(true);
    getVideo(courseId, videoId);
  };

  return (
    <div className="items-center h-36" onClick={handleIframeClick}>
      {boolean ? (
        <iframe
          className="cursor-pointer"
          title="vimeo-player"
          src={url}
          frameBorder="0"
        ></iframe>
      ) : (
        <div className="block align-middle">
          <img className="" src="https://res.cloudinary.com/dd8vgf5yn/image/upload/v1685116609/file-MrylO8jADD_fcufjd.png" alt="" />
        </div>
      )}
    </div>
  );
}

export default Iframe;

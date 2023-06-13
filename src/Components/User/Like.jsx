import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { baseUrl } from "../../utils/constant";
import { useSelector } from "react-redux";

function Like({ courseId, videoId }) {
  const data = useSelector((state) => state.userData.value);
  const userId = data._id;

  const [likeStat, useLikeStat] = useState();
  const [totalLikes, setTotalLikes] = useState("");

  useEffect(() => {
    checkLikeStat(userId, videoId);
    gettotalLikes();
  }, [likeStat, totalLikes]);

  const checkLikeStat = async (userId, videoId) => {
    await axios
      .get(`${baseUrl}/users/like-stat?videoId=${videoId}&userId=${userId}`)
      .then((response) => {
        useLikeStat(response.data.like);
      });
  };

  const gettotalLikes = async() => {
    await axios
      .get(
        `${baseUrl}/users/total-likes?videoId=${videoId}&courseId=${courseId}`
      )
      .then((response) => {
        setTotalLikes(response.data.like);
      });
  };

  const toggleLikeStatus =async() => {
    await axios
      .get(
        `${baseUrl}/users/like?videoId=${videoId}&courseId=${courseId}&userId=${userId}`
      )
      .then(() => {
        checkLikeStat();
        gettotalLikes();
      });
  };

  return (
    <div>
      {likeStat ? (
        <button
          onClick={toggleLikeStatus}
          className="like-button mr-5 bg-blue-500 border-none sm:p-2.5  rounded-md cursor-pointer flex"
        >
          {totalLikes}
          <BiLike className="bg-blue-500 mt-1 mr-2" />
          Like
        </button>
      ) : (
        <button
          onClick={toggleLikeStatus}
          className="like-button mr-5 bg-gray-200 border-none sm:p-2.5  rounded-md cursor-pointer flex"
        >
          {totalLikes}
          <BiLike className="bg-gray-200 mt-1 mr-2" />
          Like
        </button>
      )}
    </div>
  );
}

export default Like;

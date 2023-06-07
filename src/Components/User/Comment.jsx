import React from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constant";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { commentSchema } from "../../schemas";

function Comment({ courseId, videoId }) {
  useEffect(() => {
    getComments(courseId, videoId);
  }, [videoId]);
  const [comments, setComments] = useState("");

  const data = useSelector((state) => state.userData.value);
  const userId = data._id;
  const userName = data.name;

  const onSubmit = async (values, actions) => {
    try {
      await axios.post(`${baseUrl}/users/comment`, {
        videoId,
        courseId,
        comment: values.comment,
        userId,
        userName: userName,
      });
      getComments(courseId, videoId);
      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        comment: "",
      },
      validationSchema: commentSchema,
      onSubmit,
    });

  console.log(errors);

  const getComments = async (courseId, videoId) => {
    await axios
      .get(`${baseUrl}/users/comment`, {
        params: {
          courseId: courseId,
          videoId: videoId,
        },
      })
      .then((result) => {
        setComments(result.data[0]?.comments);
      });
  };
  return (
    <div className="comment-section  p-4 border ml-2 text-center">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              name="comment"
              rows="4"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-0 text-sm text-gray-900 border-0 dark:text-white dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400 ${
                errors.comment && touched.comment ? "input-error" : ""
              }`}
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 dark:hover:bg-blue-900"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>

      <h2 className="sm:text-xl text-sm font-bold mb-4">Comments</h2>
      <ul className="comment-list">
        {comments?.length > 0 ? (
          comments.map((items, index) => {
            return (
              <li className="comment-item" key={index}>
                <div className="comment-author sm:font-bold font-semibold mb-2">
                  {items.userName}
                </div>
                <div className="comment-text text-gray-700 mb-2">
                  {items.data}
                </div>
                <div className="comment-date text-gray-500">{items.date}</div>
              </li>
            );
          })
        ) : (
          <h1>No comments as of now</h1>
        )}
      </ul>
    </div>
  );
}

export default Comment;

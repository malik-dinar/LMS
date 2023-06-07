import React from "react";
import Swal from "sweetalert2";
import { baseUrl } from "../../utils/constant";
import axios from "axios";
import { useSelector } from "react-redux";

function Report({ courseId, videoId }) {
  const data = useSelector((state) => state.userData.value);
  const userId = data._id;

  const report = () => {
    Swal.fire({
      title: "Are you sure?",
      input: "text",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Report it!",
      inputAttributes: {
        required: "required",
      },
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a reason for reporting";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        let data = result.value;
        Swal.fire("Reported!", "Your has  been Marked.", "success").then(() => {
          axios.post(`${baseUrl}/users/report`, {
            videoId: videoId,
            courseId: courseId,
            report: data,
            userId: userId,
          });
        });
      }
    });
  };

  return (
    <button
      className="mr-5 bg-red-700 border-none sm:p-2.5 rounded-md cursor-pointer flex"
      onClick={report}
      required
    >
      Report
    </button>
  );
}

export default Report;

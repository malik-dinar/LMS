import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { baseUrl } from "../../utils/constant";
import { useFormik } from "formik";
import { validationSchema } from "../../schemas";

function AddCategory() {
  // const [courseName, setCourseName] = useState("");
  // const [courseDescription, setCourseDescription] = useState("");
  const [coursePath, setCoursePath] = useState("");
  const [error, setError] = useState("");
  const MySwal = withReactContent(Swal);

  const onSubmit = async (values,actions) => {
    if (coursePath) {
      const formData = new FormData();
      formData.append("coursePath", coursePath);
      formData.append("CategoryName", values.courseName);
      formData.append("Description", values.courseDescription);

      axios.post(`${baseUrl}/admin/category`, formData).then((response) => {
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Course category added successfully </i>,
          icon: "success",
        }).then(()=>{
          actions.resetForm();
        })
      });
    } else {
      setError("All fields mandatory");
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      courseName: "",
      courseDescription: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleFileSelect = async (e) => {
    setError(null);
    const fileSizeInBytes = e.target.files[0].size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMB > 30) {
      return setError("file size exceeded 30 MB");
    }
    setCoursePath(e.target.files[0]);
  };

  return (
    <>
      <main className="sm:p-16 max-w-full px-6 flex flex-col items-center justify-center bg-[url('/book.png')] bg-red md:flex-row lg:px-24 py-20 gap-12 h-auto ">
        <div className="text-box grow shrink text-center md:text-start">
          <h1 className="mb-8 font-bold text-white text-4xl md:text-6xl">
            Leading with Purpose
          </h1>
          <p className="text-white opacity-80 text-md font-medium md:text-lg max-w-lg inline">
            "The greatest leader is not necessarily the one who does the
            greatest things. He is the one that gets the people to do the
            greatest things"
          </p>
        </div>
        <div className="form-area grow shrink sm:min-w-[412px] max-w-2xl w-full">
          <form onSubmit={handleSubmit}>
            <div className="banner mb-8 shadow-grayishBlue bg-blue border-none rounded-md text-white font-medium px-16 py-4 text-center">
              Add course Category
              <span className="opacity-80">............. GROW LEARN </span>
            </div>
            <div className="form-control text-right relative">
              <input
                type="text"
                name="courseName"
                value={values.courseName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="courseName"
                autoComplete="off"
                placeholder="Course Name"
                className="firstname border-2 rounded-md px-8 font-semibold py-4 w-full border-solid outline-none focus:border-darkBlue"
              />
              {errors.courseName && touched.courseName ? (
                <p className="text-red-900 text-left">{errors.courseName}</p>
              ) : (
                <></>
              )}
              <i className="error fa-solid fa-circle-exclamation absolute top-[12px] text-error invisible right-4 text-2xl"></i>
              <i className="success fa-solid fa-circle-check absolute top-[12px] text-success invisible right-4 text-2xl"></i>
              <span className="text-xs mb-4 inline-block invisible text-red">
                message
              </span>
            </div>
            <div className="form-control text-right relative">
              <input
                type="text"
                id="courseDescription"
                name="courseDescription"
                value={values.courseDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                placeholder="Course Description"
                className="lastName border-2 rounded-md px-8 font-semibold py-4 w-full border-solid focus:border-darkBlue outline-none"
              />
              {errors.courseDescription && touched.courseDescription ? (
                <p className="text-red-700 text-left">{errors.courseDescription}</p>
              ) : (
                <></>
              )}
              <i className="error fa-solid fa-circle-exclamation absolute top-[12px] text-error invisible right-4 text-2xl"></i>
              <i className="success fa-solid fa-circle-check absolute top-[12px] text-success invisible right-4 text-2xl"></i>
              <span className="text-xs mb-4 inline-block invisible text-red">
                message
              </span>
            </div>

            <div className="form-control text-right relative">
              <input
                type="file"
                onChange={handleFileSelect}
                className="lastName border-2 rounded-md px-8 font-semibold py-4 w-full border-solid focus:border-darkBlue outline-none"
              />
            </div>
            <h1 className="text-red-500">{error}</h1>
            <button disabled={isSubmitting}
              className="mt-4 bg-green border-none outline-none rounded-md px-8 py-4 w-fullrounded-md border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCategory;

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { baseUrl } from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFormik } from "formik";
import { courseSchema } from "../../schemas";

function AddCourse() {
  const data = useSelector((state) => state.tutorData.value);

  useEffect(() => {
    getCourseCategory();
  }, []);

  const [image, setImage] = useState("");
  const [tutorId, setTutorId] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    setTutorId(data._id);
  }, []);

  const handleFileSelect = async (e) => {
    setError(null);
    const fileSizeInBytes = e.target.files[0].size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMB > 30) {
      return setError("file size exceeded 30 MB");
    }
    setImage(e.target.files[0]);
  };

  const onSubmit = async (values, actions) => {
    if (image) {
      const formData = new FormData();
      formData.append("courseName", values.courseName);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("additionalInfo", values.additionalInfo);
      formData.append("image", image);
      formData.append("tutorId", tutorId);
      axios.post(`${baseUrl}/tutors/course`, formData).then((response) => {
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Course added successfully </i>,
          icon: "success",
        }).then(() => {
          actions.resetForm();
        });
      });
    } else {
      setError("image requires");
    }
  };

  const { 
    values,errors,touched,handleBlur,isSubmitting,handleChange,handleSubmit,
  } = useFormik({
    initialValues: {
      courseName: "",
      description: "",
      category: "",
      additionalInfo: "",
    },
    validationSchema: courseSchema,
    onSubmit,
  });

  const getCourseCategory = async () => {
    let result = await fetch(`${baseUrl}/tutors/category/${tutorId}`);
    result = await result.json();
    setCategories(result.result);
  };
  return (
    <>
      <div className="antialiased text-gray-900 px-6">
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
            <h1 className="text-4xl font-bold">Add your course</h1>
            <p className="mt-2 text-lg text-gray-600">
              "The mediocre teacher tells. The good teacher explains. The
              superior teacher demonstrates. The great teacher inspires." -
              William Arthur Ward
            </p>

          <div className="py-6">
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-1 gap-6">
                <form onSubmit={handleSubmit}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="text-gray-700">Name of your Course</span>
                    <input
                      type="text"
                      name="courseName"
                      value={values.courseName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                        errors.courseName && touched.courseName
                          ? "input-error"
                          : ""
                      }`}
                      placeholder=""
                    />
                    {errors.courseName && touched.courseName ? (
                      <p className="text-red-700">{errors.courseName}</p>
                    ) : (
                      <></>
                    )}
                  </label>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="text-gray-700">Course Description</span>
                    <input
                      type="text"
                      name="description"
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                        errors.description && touched.description
                          ? "input-error"
                          : ""
                      }`}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                    {errors.description && touched.description ? (
                      <p className="text-red-700">{errors.description}</p>
                    ) : (
                      <></>
                    )}
                  </label>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="text-gray-700">
                      Choose the category of the course you intend to instruct.
                    </span>
                    <select
                      name="category"
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                        errors.category && touched.category ? "input-error" : ""
                      }`}
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option></option>
                      {categories.map((items) => {
                        return <option key={items._id}>{items.name}</option>;
                      })}
                    </select>
                    {errors.category && touched.category ? (
                      <p className="text-red-700">{errors.courseName}</p>
                    ) : (
                      <></>
                    )}
                  </label>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="text-gray-700">
                      Additional details about your course
                    </span>
                    <textarea
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                        errors.additionalInfo && touched.additionalInfo
                          ? "input-error"
                          : ""
                      }`}
                      rows="3"
                      name="additionalInfo"
                      value={values.additionalInfo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.additionalInfo && touched.additionalInfo ? (
                      <p className="text-red-700">{errors.additionalInfo}</p>
                    ) : (
                      <></>
                    )}
                  </label>

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="text-gray-700 mt-7">
                      Add thumbnail image
                    </span>{" "}
                    <br />
                    <input
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                        errors.image && touched.image ? "input-error" : ""
                      }`}
                      name="image"
                      value={values.image}
                      onChange={handleFileSelect}
                      onBlur={handleBlur}
                      type="file"
                    />
                  </label>
                  <p className="text-red-700">{error}</p>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Course upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;

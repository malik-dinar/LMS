import * as yup from "yup";

export const commentSchema = yup.object().shape({
  comment: yup.string().max(100).required("Required"),
});

export const courseSchema = yup.object().shape({
  courseName: yup
    .string()
    .max(30, "Course name must be up to 30 characters")
    .min(3, "Course name must be at least 3 characters")
    .required("Course name is required"),
  description: yup
    .string()
    .max(50, "Description must be up to 50 characters")
    .min(3, "Description must be at least 3 characters")
    .required("Description is required"),
  category: yup.string().required("Category is required"),
  additionalInfo: yup
    .string()
    .max(100, "Additional info must be up to 50 characters")
    .required("Additional info is required"),
});

export const validationSchema = yup.object().shape({
  courseName: yup
    .string()
    .max(30, "Course name must be up to 30 characters")
    .min(3, "Course name must be at least 3 characters")
    .required("Course name is required"),
    courseDescription: yup
    .string()
    .max(50, "Description must be up to 50 characters")
    .min(3, "Description must be at least 3 characters")
    .required("Description is required"),
});

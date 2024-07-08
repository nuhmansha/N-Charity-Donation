import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BlogForm = ({ onSubmit }) => {
  const initialValues = {
    date: "",
    category: "",
    image: "",
    title: "",
    description: "",
    author: "",
  };

  const validationSchema = Yup.object({
    date: Yup.string().required("Date is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.string().url("Invalid URL").required("Image URL is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    author: Yup.string().required("Author is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit} // Use onSubmit here
    >
      <Form className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
        <h3 className="text-xl font-semibold mb-4">Add Blog</h3>

        {["date", "category", "image", "title", "description", "author"].map(
          (field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 capitalize">{field}</label>
              <Field
                type={field === "description" ? "textarea" : "text"}
                name={field}
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name={field}
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          )
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Add Blog
        </button>
      </Form>
    </Formik>
  );
};

export default BlogForm;

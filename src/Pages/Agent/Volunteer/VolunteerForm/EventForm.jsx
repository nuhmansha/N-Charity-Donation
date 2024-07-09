import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EventForm = ({ addEvent }) => {
  const initialValues = {
    image: '',
    title: '',
    date: '',
    location: ''
  };

  const validationSchema = Yup.object({
    image: Yup.string()
      .url('Invalid URL')
      .required('Image URL is required'),
    title: Yup.string()
      .trim()
      .min(3, 'Title must be at least 3 characters')
      .max(50, 'Title must be at most 50 characters')
      .required('Title is required'),
    date: Yup.string()
    .matches(
      /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      'Date must be in the format dd-mm-yyyy (e.g., 10-07-2024)'
    )
      .required('Date is required'),
    location: Yup.string()
      .trim()
      .min(3, 'Location must be at least 3 characters')
      .max(50, 'Location must be at most 50 characters')
      .required('Location is required')
  });

  const onSubmit = (values, { resetForm }) => {
    addEvent(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
        <h3 className="text-xl font-semibold mb-4">Add Event</h3>
        
        {['image', 'title', 'date', 'location'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 capitalize">{field}</label>
            <Field 
              type={field === 'description' ? 'textarea' : 'text'}
              name={field}
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage name={field} component="div" className="text-red-500 text-sm" />
          </div>
        ))}
        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Event</button>
      </Form>
    </Formik>
  );
};

export default EventForm;

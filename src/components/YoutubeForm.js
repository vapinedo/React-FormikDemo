import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = values => {
  console.log('Form data:', values)
};

const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors;
}; 

export const YoutubeForm = () => {
  const formik = useFormik({ initialValues, onSubmit, validate });

  console.log('Form errors:', formik.errors)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.name}
            />
          {formik.errors.name && <div className='error'>formik.errors.name</div>}
        </div>

        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
          {formik.errors.email && <div className='error'>formik.errors.email</div>}
        </div>

        <div className='form-control'>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            autoComplete="off"
            channel="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel && <div className='error'>formik.errors.channel</div>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

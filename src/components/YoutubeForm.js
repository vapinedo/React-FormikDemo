import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { TextError } from "./TextError";

const initialValues = {
  name: '',
  email: '',
  channel: '',
  commnents: '',
  address: ''
};

const onSubmit = values => {
  console.log('Form data:', values)
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  channel: Yup.string().required('Required')
});

export const YoutubeForm = () => {
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" autoComplete="off" />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" autoComplete="off" />
          <ErrorMessage name='email'>
            {(errorMsg) => <div className='error'>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" autoComplete="off" />
          <ErrorMessage name='channel' />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments' />
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field as='textarea' name='address'>
            {
              (props) => {
                const { field, form, meta } = props;
                console.log('Render props', props)
                return <div>
                  <input type='text' id='address' {...field} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              }
            }
          </Field>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};
import { React } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import validationSchema from './validationSchema';

const Input = () => {
  const string = '!!!';
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        day: '',
        month: '',
        year: '',
      }}
      onSubmit={() => {
        
      }}
    >
      {() => (
        <Form className="form">
          <label htmlFor="day" className="input-block label-text">
            d a y
            <Field
              id="day"
              name="day"
              type="number"
              className="field"
            />
            <ErrorMessage name="day" component="p" />
          </label>
          <label htmlFor="month" className="input-block label-text">
            m o n t h
            <Field
              id="month"
              name="month"
              type="number"
              className="field"
            />
            <ErrorMessage name="month" component="p" />
          </label>
          <label htmlFor="year" className="input-block label-text">
            y e a r
            <Field
              id="year"
              name="year"
              type="number"
              className="field"
            />
            <ErrorMessage name="year" component="p" />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default Input;

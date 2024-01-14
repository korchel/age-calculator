/* eslint-disable functional/no-expression-statements */
import { React } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';

import validationSchema from './validationSchema';
import { setDay, setMonth, setYear } from '../store/store';

const Input = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        day: '',
        month: '',
        year: '',
      }}
      onSubmit={(values) => {
        const { day, month, year } = values;
        dispatch(setDay(day));
        dispatch(setMonth(month));
        dispatch(setYear(year));
      }}
    >
      {() => (
        <Form>
          <div className="form">
            <label htmlFor="day" className="input-block label-text">
              day
              <Field
                id="day"
                name="day"
                type="number"
                className="field"
              />
              <ErrorMessage name="day" component="p" />
            </label>
            <label htmlFor="month" className="input-block label-text">
              month
              <Field
                id="month"
                name="month"
                type="number"
                className="field"
              />
              <ErrorMessage name="month" component="p" />
            </label>
            <label htmlFor="year" className="input-block label-text">
              year
              <Field
                id="year"
                name="year"
                type="number"
                className="field"
              />
              <ErrorMessage name="year" component="p" />
            </label>
          </div>
          <div className="btn-group">
            <hr />
            <button type="submit" className="btn">
              <span>Submit</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Input;

/* eslint-disable functional/no-expression-statements */
import React, { useRef, useEffect } from 'react';
import {
  Formik, Form, Field, ErrorMessage, getIn,
} from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import validationSchema from './validationSchema';
import {
  setDay, setMonth, setYear, setShow,
} from '../store/store';

const getErrorFieldStyles = (errors, name) => (getIn(errors, name) ? 'field-error' : '');
const getErrorLabelStyles = (errors, name) => (getIn(errors, name) ? 'label-error' : '');

const Input = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    ref.current.focus();
  }, []);

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
        dispatch(setShow(true));
      }}
    >
      {({ errors }) => (
        <Form>
          <div className="form">
            <label htmlFor="day" className={`input-block label-text ${getErrorLabelStyles(errors, 'day')}`}>
              {t('labels.day')}
              <Field
                id="day"
                name="day"
                type="number"
                className={`field ${getErrorFieldStyles(errors, 'day')}`}
                placeholder="DD"
                innerRef={ref}
              />
              <ErrorMessage name="day">
                {(error) => <p className="errorMessage">{t(error)}</p>}
              </ErrorMessage>
            </label>
            <label htmlFor="month" className={`input-block label-text ${getErrorLabelStyles(errors, 'month')}`}>
              {t('labels.month')}
              <Field
                id="month"
                name="month"
                type="number"
                className={`field ${getErrorFieldStyles(errors, 'month')}`}
                placeholder="MM"
              />
              <ErrorMessage name="month">
                {(error) => <p className="errorMessage">{t(error)}</p>}
              </ErrorMessage>
            </label>
            <label htmlFor="year" className={`input-block label-text ${getErrorLabelStyles(errors, 'month')}`}>
              {t('labels.year')}
              <Field
                id="year"
                name="year"
                type="number"
                className={`field ${getErrorFieldStyles(errors, 'year')}`}
                placeholder="YYYY"
              />
              <ErrorMessage name="year">
                {(error) => <p className="errorMessage">{t(error)}</p>}
              </ErrorMessage>
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

/* eslint-disable functional/no-expression-statements */
import * as Yup from 'yup';

const isValidDate = (year, month, day) => {
  const date = new Date(year, month, day);
  if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
    return true;
  }
  return false;
};

export default Yup.object().shape({
  day: Yup.number()
    .required('This field is required')
    .min(1, 'Must be a valid day')
    .max(31, 'Must be a valid day')
    .test(
      'date is valid',
      'Must be a valid date',
      (day, context) => isValidDate(context.parent.year, context.parent.month - 1, day),
    ),
  month: Yup.number()
    .required('This field is required')
    .min(1, 'Must be a valid month')
    .max(12, 'Must be a valid month'),
  year: Yup.number()
    .required('This field is required')
    .max(new Date().getFullYear(), 'Must be in the past'),
});
